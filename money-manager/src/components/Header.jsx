import React, { useEffect, useState } from 'react';
import { Wallet, WifiOff, Wifi } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

const Header = () => {
  const isOnline = useOnlineStatus();
  const [justReconnected, setJustReconnected] = useState(false);

  useEffect(() => {
    if (isOnline) {
      setJustReconnected(true);
      const timer = setTimeout(() => setJustReconnected(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline]);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      {!isOnline && (
        <div className="bg-amber-50 border-b border-amber-200 py-2 px-4 flex items-center justify-center gap-2 text-amber-700 text-sm font-medium">
          <WifiOff size={16} />
          <span>يظهر في وضع عدم الاتصال. سيعمل عند إعادة الاتصال.</span>
        </div>
      )}
      {isOnline && justReconnected && (
        <div className="bg-emerald-50 border-b border-emerald-200 py-2 px-4 flex items-center justify-center gap-2 text-emerald-700 text-sm font-medium">
          <Wifi size={16} />
          <span>تمت إعادة الاتصال بالإنترنت.</span>
        </div>
      )}
      <div className="py-6 mb-0">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <Wallet size={24} />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">مدير الأموال الشخصي</h1>
          </div>
          <div className="flex items-center gap-2">
            {isOnline ? (
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                متصل
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs text-amber-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse" />
                غير متصل
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
