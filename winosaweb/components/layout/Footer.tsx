export default function Footer() {
  return (
    <footer className="relative z-20">

      {/* TOP BORDER */}
      <div className="h-[1px] w-full bg-white/70" />

      <div className="max-w-7xl mx-auto px-8 pt-4 pb-12 text-white text-sm">

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">

          <span className="font-medium tracking-wide">
            © 2026 WINOSAWEB
          </span>

          <div className="flex gap-8">
            <a className="hover:opacity-70 transition">LinkedIn</a>
            <a className="hover:opacity-70 transition">Facebook</a>
            <a className="hover:opacity-70 transition">Contact</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
