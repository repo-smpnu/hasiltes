import Link from "next/link";
import { SCHOOL_INFO, ACADEMIC_YEAR } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8 w-full">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="text-base font-bold text-slate-800 font-inter">
            {SCHOOL_INFO.name}
          </span>
          <p className="font-inter text-xs uppercase tracking-widest text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. Academic Excellence & Islamic Values.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <Link
            href={SCHOOL_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors"
          >
            Facebook
          </Link>
          <Link
            href={SCHOOL_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors"
          >
            Instagram
          </Link>
          <Link
            href={SCHOOL_INFO.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors"
          >
            YouTube
          </Link>
          <Link
            href={SCHOOL_INFO.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors"
          >
            Maps
          </Link>
        </div>
      </div>
    </footer>
  );
}
