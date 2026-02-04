export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 border-t-4 border-[#1a1a1a] bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-sm">
          <div className="flex flex-col items-start gap-2">
            <a 
              href="mailto:ben@quicksilverlab.ai" 
              className="text-[12px] font-bold uppercase tracking-[2px] text-[#1a1a1a] hover:text-[#ff6b35] transition-colors"
            >
              CONTACT
            </a>
            <p className="text-[12px] font-bold uppercase tracking-[2px] text-[#666666]">617.932.5512</p>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-[2px] text-[#666666]">
            Based in Boston and Houston, working globally
          </p>
        </div>
      </div>
    </footer>
  );
}
