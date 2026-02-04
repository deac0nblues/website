export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <a 
              href="mailto:ben@quicksilverlab.ai" 
              className="text-base font-light gradient-text-iridescent hover:opacity-80 transition-opacity"
            >
              Contact
            </a>
            <p className="text-sm text-white/50">617.932.5512</p>
          </div>
          <p className="text-sm text-white/50">
            Based in Boston and Houston, working globally
          </p>
        </div>
      </div>
    </footer>
  );
}
