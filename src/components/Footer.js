export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="h-[5vh] bg-[#103641] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between text-white/90 text-xs">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p>&copy; {currentYear} Flaha Creative. All rights reserved.</p>
          </div>
          
          {/* Additional Info */}
          <div className="text-center md:text-right mt-1 md:mt-0">
            <p>Crafted with ❤️ for your special moments</p>
          </div>
        </div>
      </div>
    </footer>
  )
}