import Link from "next/link";
import Image from "next/image";
import "@/styles/whatsapp-bubble.scss";
import { cdn } from "@/lib/cdn";

const WHATSAPP_NUMBER = "+34600663107";
const DEFAULT_MESSAGE = "Hi! I'd like to book detailing at Marbella carspa.";
const ICON_SRC = cdn("/logos/WhatsApp.svg", { width: 28, height: 28 });

const normalizedNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
const whatsappHref = `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(
  DEFAULT_MESSAGE,
)}`;

export default function WhatsAppBubble() {
  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-bubble"
      aria-label={`Chat on WhatsApp ${WHATSAPP_NUMBER}`}
    >
      <Image
        src={ICON_SRC}
        alt="WhatsApp"
        width={28}
        height={28}
        className="whatsapp-bubble__icon"
        priority
      />
    </Link>
  );
}
