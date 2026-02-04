export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 bg-[#0a0a0a] text-[#00ff41] relative">
      {/* Waveform divider */}
      <div className="absolute top-0 left-0 right-0 h-16">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path 
            d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50" 
            fill="none" 
            stroke="#00ff41" 
            strokeWidth="1"
            opacity="0.3"
          />
          <path 
            d="M0,50 Q150,80 300,50 T600,50 T900,50 T1200,50" 
            fill="none" 
            stroke="#00d9ff" 
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <a 
              href="mailto:ben@quicksilverlab.ai" 
              className="text-sm text-[#00ff41] hover:text-[#ffb000] transition-colors text-glow"
            >
              {'>'} CONTACT
            </a>
            <p className="text-xs text-[#4a4a4a]">617.932.5512</p>
          </div>
          <p className="text-xs text-[#4a4a4a]">
            BASED IN BOSTON AND HOUSTON WORKING GLOBALLY
          </p>
        </div>
      </div>
    </footer>
  );
}
