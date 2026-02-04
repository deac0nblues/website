export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 bg-[#1a1a1a] text-white relative">
      {/* Diagonal accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#d32f2f]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <a 
              href="mailto:ben@quicksilverlab.ai" 
              className="text-base font-bold uppercase tracking-[0.2em] text-white hover:text-[#ff6f00] transition-colors"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              CONTACT
            </a>
            <p className="text-sm text-white/70" style={{ fontFamily: 'Oswald, sans-serif' }}>617.932.5512</p>
          </div>
          <p className="text-sm text-white/70 uppercase tracking-[0.1em]" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Based in Boston and Houston, working globally
          </p>
        </div>
      </div>
      
      {/* Bottom geometric accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ff6f00]" />
    </footer>
  );
}
