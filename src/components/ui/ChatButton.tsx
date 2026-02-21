import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteData } from '../../config/siteData';

export const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="bg-white w-[350px] max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={siteData.chat.agentPhoto} alt={siteData.chat.agentName} className="w-10 h-10 rounded-full object-cover border-2 border-white/20" />
              <div>
                <h4 className="font-semibold">{siteData.chat.agentName}</h4>
                <p className="text-xs text-brand-primary-100">Usually replies in 5 mins</p>
              </div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-stone-50 space-y-4">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-stone-200 rounded-full flex-shrink-0 overflow-hidden">
                <img src={siteData.chat.agentPhoto} alt={siteData.chat.agentName} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-700">
                {siteData.chat.greeting}
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-stone-100 bg-white">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 bg-stone-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-brand-primary text-white rounded-full shadow-lg hover:bg-brand-primary-600 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat with an Engineer
          </span>
        )}
      </button>
    </div>
  );
};
