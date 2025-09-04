import React from 'react'
import { Github, Twitter, Globe } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 backdrop-blur-md bg-white/10 border-t border-white/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">BABY Token Auto-Restaking</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Streamline your BABY token rewards with automated restaking. Set your preferences once 
              and let our platform handle the rest with maximum efficiency and security.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 backdrop-blur-md bg-white/20 hover:bg-white/30 rounded-lg border border-white/30 transition-all">
                <Twitter className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 backdrop-blur-md bg-white/20 hover:bg-white/30 rounded-lg border border-white/30 transition-all">
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 backdrop-blur-md bg-white/20 hover:bg-white/30 rounded-lg border border-white/30 transition-all">
                <Globe className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Features</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Auto-Restaking</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Validator Selection</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Liquidity Pools</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Reward Tracking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 BABY Token Auto-Restaking. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
