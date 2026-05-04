"use client";

import { useEffect, useState } from "react";

interface CopyState {
  label: string;
  kind: "idle" | "success" | "error";
}

const DEFAULT_STATE: CopyState = {
  label: "",
  kind: "idle",
};

function extractOriginalImageUrl(image: HTMLImageElement): string {
  const candidate = image.currentSrc || image.src;

  if (!candidate) {
    return "";
  }

  try {
    const parsed = new URL(candidate, globalThis.location.origin);
    const proxiedUrl = parsed.searchParams.get("url");

    if (parsed.pathname === "/_next/image" && proxiedUrl) {
      return decodeURIComponent(proxiedUrl);
    }

    if (parsed.origin === globalThis.location.origin) {
      return `${parsed.pathname}${parsed.search}`;
    }

    return parsed.toString();
  } catch {
    return candidate;
  }
}

function getClickedImage(target: EventTarget | null): HTMLImageElement | null {
  if (!(target instanceof Element)) {
    return null;
  }

  const directMatch = target.closest("img");
  return directMatch instanceof HTMLImageElement ? directMatch : null;
}

async function copyText(text: string): Promise<void> {
  if (!navigator.clipboard?.writeText) {
    throw new Error("Clipboard API unavailable");
  }

  await navigator.clipboard.writeText(text);
}

export default function DevImageCopy() {
  const [copyState, setCopyState] = useState<CopyState>(DEFAULT_STATE);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    let timeoutId: ReturnType<typeof globalThis.setTimeout> | undefined;

    const handleClick = async (event: MouseEvent) => {
      const image = getClickedImage(event.target);
      if (!image) {
        return;
      }

      const imageUrl = extractOriginalImageUrl(image);
      if (!imageUrl) {
        setCopyState({
          label: "Could not resolve image URL",
          kind: "error",
        });
        return;
      }

      const payload = JSON.stringify(
        {
          imageUrl,
          alt: image.alt || undefined,
          page: globalThis.location.pathname,
        },
        null,
        2
      );

      try {
        await copyText(payload);
        setCopyState({
          label: `Copied ${imageUrl}`,
          kind: "success",
        });
      } catch {
        setCopyState({
          label: "Copy failed",
          kind: "error",
        });
      }

      if (timeoutId) {
        globalThis.clearTimeout(timeoutId);
      }

      timeoutId = globalThis.setTimeout(() => {
        setCopyState(DEFAULT_STATE);
      }, 1800);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      if (timeoutId) {
        globalThis.clearTimeout(timeoutId);
      }
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <>
      <style>{`
        body img {
          cursor: copy;
        }
      `}</style>
      {copyState.kind === "idle" ? null : (
        <div
          style={{
            position: "fixed",
            right: "16px",
            bottom: "16px",
            zIndex: 9999,
            maxWidth: "min(520px, calc(100vw - 32px))",
            padding: "12px 14px",
            borderRadius: "12px",
            background:
              copyState.kind === "success"
                ? "rgba(12, 18, 12, 0.92)"
                : "rgba(40, 14, 14, 0.94)",
            color: "#f6f3ec",
            fontSize: "13px",
            lineHeight: 1.4,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.28)",
            backdropFilter: "blur(10px)",
            wordBreak: "break-word",
          }}
        >
          {copyState.label}
        </div>
      )}
    </>
  );
}