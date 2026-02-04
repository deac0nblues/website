export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 bg-[#faf8f5] text-[#2d3133] relative">
      {/* Horizon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent opacity-20" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <a 
              href="mailto:ben@quicksilverlab.ai" 
              className="text-base text-[#2d3133] hover:text-[#6b7f5c] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact
            </a>
            <p className="text-sm text-[#7a8288]" style={{ fontFamily: 'Crimson Text, serif' }}>617.932.5512</p>
          </div>
          <p className="text-sm text-[#7a8288]" style={{ fontFamily: 'Crimson Text, serif' }}>
            Based in Boston and Houston, working globally
          </p>
        </div>
      </div>
    </footer>
  );
}
