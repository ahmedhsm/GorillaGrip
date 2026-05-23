export default function Footer() {
  return (
    <footer id="footer" className="relative py-10 px-6 md:px-10 bg-brand-black overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-heading text-lg tracking-[4px] text-[#333]">
          GORILLA GRIP<span className="text-[#555]">®</span>
        </div>
        <div className="text-[11px] text-[#444] tracking-[2px] uppercase text-center">
          No Sweat. Max Grip. · Made in Egypt
        </div>
      </div>
    </footer>
  );
}
