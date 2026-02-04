export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-20 border-t border-[#e0e0e0] bg-[#fafafa]">
      <div className="max-w-[700px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-sm">
          <div className="flex flex-col items-start gap-2">
            <a 
              href="mailto:ben@quicksilverlab.ai" 
              className="text-black hover:underline transition-all font-medium"
            >
              Contact
            </a>
            <p className="text-[#666666] text-sm">617.932.5512</p>
          </div>
          <p className="text-[#666666] text-sm">
            Based in Boston and Houston, working globally
          </p>
        </div>
      </div>
    </footer>
  );
}
