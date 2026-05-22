import { motion, AnimatePresence } from "motion/react";
import { X, Heart, CreditCard, Landmark, Wallet } from "lucide-react";
import { useTranslation } from "react-i18next";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const { t, i18n } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6" dir={i18n.dir()}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className={`absolute top-6 p-2 rounded-full hover:bg-gray-100 transition-colors ${i18n.dir() === 'rtl' ? 'left-6' : 'right-6'}`}
            >
              <X size={24} />
            </button>

            <div className="p-10 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-[#C00D0D]">
                  <Heart size={24} fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('modal.title')}</h3>
                  <p className="text-gray-500 text-sm">{t('modal.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { key: "method1", icon: CreditCard },
                  { key: "method2", icon: Landmark },
                  { key: "method3", icon: Wallet }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center gap-5 p-6 rounded-2xl border-2 border-gray-100 hover:border-[#C00D0D] hover:bg-red-50 transition-all text-left group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-[#C00D0D] transition-colors shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{t(`modal.${item.key}.title`)}</h4>
                      <p className="text-gray-500 text-xs">{t(`modal.${item.key}.desc`)}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 leading-relaxed px-4">
                  {t('modal.footer')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
