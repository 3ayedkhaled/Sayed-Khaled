import React from 'react';
import { Wallet } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 py-6 mb-8 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <Wallet size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">مدير الأموال الشخصي</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
