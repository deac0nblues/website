export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t-2 border-[#000000] bg-[#f8f7f3] relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      
      {/* Geometric elements */}
      <div className="absolute top-6 left-6 w-8 h-8 border border-black/8 hidden lg:block"></div>
      <div className="absolute top-6 right-6 w-8 h-8 border border-black/8 hidden lg:block"></div>
      <div className="absolute bottom-6 left-1/4 w-6 h-6 border border-black/6 hidden xl:block"></div>
      <div className="absolute bottom-6 right-1/4 w-6 h-6 border border-black/6 hidden xl:block"></div>
      
      {/* Horizontal accent lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent hidden lg:block"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex flex-col items-start">
            <a 
              href="mailto:ben@quicksilverlab.ai" 
              className="text-[#000000] hover:underline transition-all font-medium code-accent tracking-wider"
            >
              Contact
            </a>
            <p className="text-[#666666] code-accent text-xs tracking-widest mt-2">617.932.5512</p>
          </div>
          <p className="text-[#666666] code-accent text-xs tracking-widest">
            Based in Boston and Houston, working globally
          </p>
        </div>
      </div>
    </footer>
  );
}
