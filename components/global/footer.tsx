import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gray-900">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-900">Techforcement</span>
              </Link>
              <p className="text-gray-600 mb-6 max-w-md">
                Expert web design and business services for small to medium-sized businesses across the United States.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Business Formation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@techforcement.com" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Techforcement. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
