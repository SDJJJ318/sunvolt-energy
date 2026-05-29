'use client';

import { useState, useEffect } from 'react';
import { Mail, MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

export default function FloatingChat() {
  const [showPopup, setShowPopup] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed && !showChat) {
        setShowPopup(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed, showChat]);

  const handleWhatsAppClick = () => {
    setShowPopup(false);
    setShowChat(true);
  };

  const handleDismissPopup = () => {
    setShowPopup(false);
    setDismissed(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {/* Chat Panel */}
      {showChat && (
        <div className="animate-bounce-in w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden mb-2">
          <div className="bg-green-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">SunVolt Energy</span>
            </div>
            <button
              onClick={handleCloseChat}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                Hello! Welcome to SunVolt Energy. How can we help you today? We are happy to assist with product inquiries, quotes, and technical support.
              </p>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Continue on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Auto Popup Bubble */}
      {showPopup && !showChat && (
        <div className="animate-bounce-in bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-72 mb-2 relative">
          <button
            onClick={handleDismissPopup}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="text-sm text-gray-700 mb-3">Hi! How can we help you?</p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Chat
          </button>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="flex flex-col gap-2">
        <a
          href={`mailto:info@sunvoltenergy.com`}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-110 transition-all"
          aria-label="Send email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <button
          onClick={handleWhatsAppClick}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 hover:scale-110 transition-all"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
