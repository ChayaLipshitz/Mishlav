import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Accessibility, 
  X, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Link2, 
  Eye,
  MousePointer,
  Type,
  PauseCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isRTL } = useLanguage();
  const [settings, setSettings] = useState({
    fontSize: 100,
    highContrast: false,
    highlightLinks: false,
    largerCursor: false,
    readableFont: false,
    stopAnimations: false,
    textSpacing: false
  });

  useEffect(() => {
    // Load saved settings
    const saved = localStorage.getItem('accessibilitySettings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${settings.fontSize}%`;
    
    // High contrast
    if (settings.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    
    // Highlight links
    if (settings.highlightLinks) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }
    
    // Larger cursor
    if (settings.largerCursor) {
      document.body.classList.add('large-cursor');
    } else {
      document.body.classList.remove('large-cursor');
    }
    
    // Readable font
    if (settings.readableFont) {
      document.body.classList.add('readable-font');
    } else {
      document.body.classList.remove('readable-font');
    }
    
    // Stop animations
    if (settings.stopAnimations) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
    
    // Text spacing
    if (settings.textSpacing) {
      document.body.classList.add('text-spacing');
    } else {
      document.body.classList.remove('text-spacing');
    }
    
    // Save settings
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
  }, [settings]);

  const increaseFontSize = () => {
    setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 10, 150) }));
  };

  const decreaseFontSize = () => {
    setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 10, 80) }));
  };

  const resetSettings = () => {
    setSettings({
      fontSize: 100,
      highContrast: false,
      highlightLinks: false,
      largerCursor: false,
      readableFont: false,
      stopAnimations: false,
      textSpacing: false
    });
  };

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Accessibility styles */}
      <style>{`
        .high-contrast {
          filter: contrast(1.5);
        }
        
        .high-contrast * {
          background-color: #000 !important;
          color: #fff !important;
          border-color: #fff !important;
        }
        
        .high-contrast a {
          color: #ffff00 !important;
        }
        
        .highlight-links a {
          background-color: #ffff00 !important;
          color: #000 !important;
          padding: 2px 4px !important;
          border-radius: 2px !important;
          text-decoration: underline !important;
        }
        
        .large-cursor * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="black" stroke="white" stroke-width="1" d="M3 3 L10 20 L13 13 L20 10 Z"/></svg>') 0 0, auto !important;
        }
        
        .readable-font * {
          font-family: Arial, sans-serif !important;
        }
        
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .text-spacing * {
          line-height: 1.8 !important;
          letter-spacing: 0.12em !important;
          word-spacing: 0.16em !important;
        }
      `}</style>

      {/* Floating Accessibility Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 z-50 bg-mishlav-orange hover:bg-orange-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ [isRTL ? 'right' : 'left']: '20px' }}
        aria-label={isRTL ? "פתח תפריט נגישות" : "Open accessibility menu"}
        title={isRTL ? "נגישות" : "Accessibility"}
      >
        <Accessibility className="w-6 h-6" />
      </Button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? 300 : -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 z-50 bg-white shadow-2xl h-screen overflow-y-auto border-l-4 border-mishlav-orange"
            style={{ 
              [isRTL ? 'right' : 'left']: 0,
              width: '320px'
            }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-navy-blue font-heebo flex items-center gap-2">
                  <Accessibility className="w-6 h-6 text-mishlav-orange" />
                  {isRTL ? "נגישות" : "Accessibility"}
                </h2>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  aria-label={isRTL ? "סגור תפריט" : "Close menu"}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Font Size */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold font-heebo flex items-center gap-2">
                    <Type className="w-5 h-5 text-mishlav-orange" />
                    {isRTL ? "גודל טקסט" : "Text Size"}
                  </span>
                  <span className="text-sm text-gray-600 font-heebo">{settings.fontSize}%</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={decreaseFontSize}
                    variant="outline"
                    className="flex-1 font-heebo"
                    disabled={settings.fontSize <= 80}
                  >
                    <ZoomOut className="w-4 h-4 mr-1" />
                    {isRTL ? "הקטן" : "Smaller"}
                  </Button>
                  <Button
                    onClick={increaseFontSize}
                    variant="outline"
                    className="flex-1 font-heebo"
                    disabled={settings.fontSize >= 150}
                  >
                    <ZoomIn className="w-4 h-4 mr-1" />
                    {isRTL ? "הגדל" : "Larger"}
                  </Button>
                </div>
              </div>

              {/* Toggle Options */}
              <div className="space-y-3">
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`w-full p-4 rounded-lg border-2 transition-all font-heebo text-right ${
                    settings.highContrast 
                      ? 'bg-mishlav-orange text-white border-mishlav-orange' 
                      : 'bg-white hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Contrast className="w-5 h-5" />
                    <span className="font-semibold">{isRTL ? "ניגודיות גבוהה" : "High Contrast"}</span>
                  </div>
                </button>

                <button
                  onClick={() => toggleSetting('highlightLinks')}
                  className={`w-full p-4 rounded-lg border-2 transition-all font-heebo text-right ${
                    settings.highlightLinks 
                      ? 'bg-mishlav-orange text-white border-mishlav-orange' 
                      : 'bg-white hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Link2 className="w-5 h-5" />
                    <span className="font-semibold">{isRTL ? "הדגש קישורים" : "Highlight Links"}</span>
                  </div>
                </button>

                <button
                  onClick={() => toggleSetting('largerCursor')}
                  className={`w-full p-4 rounded-lg border-2 transition-all font-heebo text-right ${
                    settings.largerCursor 
                      ? 'bg-mishlav-orange text-white border-mishlav-orange' 
                      : 'bg-white hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MousePointer className="w-5 h-5" />
                    <span className="font-semibold">{isRTL ? "סמן עכבר גדול" : "Large Cursor"}</span>
                  </div>
                </button>

                <button
                  onClick={() => toggleSetting('readableFont')}
                  className={`w-full p-4 rounded-lg border-2 transition-all font-heebo text-right ${
                    settings.readableFont 
                      ? 'bg-mishlav-orange text-white border-mishlav-orange' 
                      : 'bg-white hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5" />
                    <span className="font-semibold">{isRTL ? "גופן קריא" : "Readable Font"}</span>
                  </div>
                </button>

                <button
                  onClick={() => toggleSetting('textSpacing')}
                  className={`w-full p-4 rounded-lg border-2 transition-all font-heebo text-right ${
                    settings.textSpacing 
                      ? 'bg-mishlav-orange text-white border-mishlav-orange' 
                      : 'bg-white hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5" />
                    <span className="font-semibold">{isRTL ? "ריווח טקסט" : "Text Spacing"}</span>
                  </div>
                </button>

                <button
                  onClick={() => toggleSetting('stopAnimations')}
                  className={`w-full p-4 rounded-lg border-2 transition-all font-heebo text-right ${
                    settings.stopAnimations 
                      ? 'bg-mishlav-orange text-white border-mishlav-orange' 
                      : 'bg-white hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <PauseCircle className="w-5 h-5" />
                    <span className="font-semibold">{isRTL ? "עצור אנימציות" : "Stop Animations"}</span>
                  </div>
                </button>
              </div>

              {/* Reset Button */}
              <Button
                onClick={resetSettings}
                variant="outline"
                className="w-full mt-6 font-heebo border-2 border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white"
              >
                {isRTL ? "אפס הגדרות" : "Reset Settings"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}