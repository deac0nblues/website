export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 border-t-2 border-[#00ff96]/30 bg-[#0a0e27] relative">
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,255,150,0.1) 1px, transparent 1px),
            linear-gradient(0deg, rgba(0,255,150,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col items-start">
            <a 
              href="mailto:build@quicksilverlab.ai" 
              className="text-[#00ff96] hover:text-[#00ff96]/80 transition-all font-mono text-sm uppercase tracking-wider mb-2"
            >
              Contact
            </a>
          </div>
          <div className="font-mono text-[10px] text-[#a0a0a0] uppercase tracking-wider">
            Based in Boston and Houston, working globally
          </div>
        </div>
      </div>
    </footer>
  );
}
