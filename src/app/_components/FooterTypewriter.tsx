"use client";

import { useEffect, useState } from "react";

type FooterPhrase = {
  message: string;
  span?: string | null;
  link?: string;
  route?: string;
};

const PHRASES: FooterPhrase[] = [
  { message: "Revisa mis proyectos aquí", span: "aquí", route: "/latest" },
  {
    message: "Disfruta los artículos de mi ",
    span: "Dev stash",
    link: "https://dev-stash-routine.vercel.app/",
  },
  { message: "#exercise daily" },
  { message: "¿Quieres contactarme? Haz clic aquí", span: "Haz clic aquí", route: "/contact" },
];

const TYPE_TOTAL_MS = 850;
const HOLD_AFTER_TYPE_MS = 1950;
const HOLD_BEFORE_NEXT_MS = 325;
const DELETE_TOTAL_MS = 700;

export default function FooterTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentPhrase = PHRASES[phraseIndex];
  const spanText =
    typeof currentPhrase?.span === "string" && currentPhrase.span.trim().length > 0
      ? currentPhrase.span
      : null;
  const baseMessage = currentPhrase?.message ?? "";
  const shouldAppendSpan = spanText !== null && !baseMessage.includes(spanText);
  const fullMessage = `${baseMessage}${shouldAppendSpan ? spanText : ""}`;

  useEffect(() => {
    const currentMessage = fullMessage;
    const typeIntervalMs =
      currentMessage.length > 0
        ? Math.max(18, Math.round(TYPE_TOTAL_MS / currentMessage.length))
        : TYPE_TOTAL_MS;
    const deleteIntervalMs =
      currentMessage.length > 0
        ? Math.max(12, Math.round(DELETE_TOTAL_MS / currentMessage.length))
        : DELETE_TOTAL_MS;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentMessage.length) {
          setText(currentMessage.slice(0, text.length + 1));
          return;
        }

        setIsDeleting(true);
        return;
      }

      if (text.length > 0) {
        setText(currentMessage.slice(0, text.length - 1));
        return;
      }

      setIsDeleting(false);
      setPhraseIndex((current) => (current + 1) % PHRASES.length);
    }, isDeleting
      ? text.length === 0
        ? HOLD_BEFORE_NEXT_MS
        : deleteIntervalMs
      : text.length === currentMessage.length
        ? HOLD_AFTER_TYPE_MS
        : typeIntervalMs);

    return () => window.clearTimeout(timeout);
  }, [fullMessage, isDeleting, phraseIndex, text]);

  const href = currentPhrase?.route ?? currentPhrase?.link;
  const isExternal = !currentPhrase?.route && Boolean(currentPhrase?.link);
  const spanStart = spanText ? text.lastIndexOf(spanText) : -1;
  const hasVisibleSpan = spanText && spanStart >= 0;
  const beforeSpan = hasVisibleSpan ? text.slice(0, spanStart) : text;
  const visibleSpan = hasVisibleSpan ? text.slice(spanStart, spanStart + spanText.length) : "";
  const afterSpan = hasVisibleSpan ? text.slice(spanStart + spanText.length) : "";
  const interactiveSpan = href && spanText;
  const content = (
    <span className="footer-typewriter__line">
      <span>{beforeSpan}</span>
      {interactiveSpan ? (
        <span className="footer-typewriter__link-span">{visibleSpan}</span>
      ) : hasVisibleSpan ? (
        <span>{visibleSpan}</span>
      ) : null}
      <span>{afterSpan}</span>
      <span className="footer-typewriter__cursor" aria-hidden="true">
        |
      </span>
    </span>
  );

  return href && interactiveSpan ? (
    <a
      className="footer-typewriter"
      href={href}
      aria-label={fullMessage}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  ) : (
    <div className="footer-typewriter" aria-label={fullMessage}>
      {content}
    </div>
  );
}
