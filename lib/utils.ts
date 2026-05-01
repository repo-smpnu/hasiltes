import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function generateLetterNumber(index: number, prefix: string): string {
  const paddedIndex = String(index).padStart(4, "0");
  return `${prefix}-${paddedIndex}`;
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[^a-zA-Z0-9-]/g, "");
}

export function isValidSearchQuery(query: string): boolean {
  const sanitized = query.trim();
  return sanitized.length >= 6 && sanitized.length <= 50;
}

export function getTimeUntil(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
} {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isExpired: false };
}

export function createWhatsAppShareUrl(
  studentName: string,
  status: string,
  url: string
): string {
  const emoji = status === "LULUS" ? "🎉" : "📋";
  const text = status === "LULUS"
    ? `${emoji} Alhamdulillah! *${studentName}* dinyatakan *LULUS* seleksi akademik SMP NU Assalafie Tahun Ajaran 2026/2027!\n\nCek hasil seleksi di: ${url}`
    : `${emoji} Hasil seleksi akademik SMP NU Assalafie untuk *${studentName}* sudah tersedia.\n\nCek di: ${url}`;
  
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
