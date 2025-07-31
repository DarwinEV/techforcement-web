import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A192F] border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-wider">Techforcement</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expert web design and business services for small to medium-sized businesses across the United States.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-design" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services#business-formation" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Business Formation
                </Link>
              </li>
              <li>
                <Link href="/services#gbp" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Google Business Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-teal-400 mt-1" />
                <a href="mailto:hello@techforcement.com" className="text-slate-400 text-sm hover:text-teal-400">hello@techforcement.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-teal-400 mt-1" />
                <span className="text-slate-400 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-teal-400 mt-1" />
                <span className="text-slate-400 text-sm">Serving all 50 US States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Techforcement. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-slate-500 hover:text-teal-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-teal-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
