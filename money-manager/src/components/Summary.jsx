import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const Summary = ({ totals }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
            <DollarSign size={20} />
          </div>
          <span className="text-slate-500 font-medium">الرصيد الإجمالي</span>
        </div>
        <p className="text-3xl font-bold text-slate-800">
          {totals.balance.toLocaleString()} ج.م
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
            <TrendingUp size={20} />
          </div>
          <span className="text-slate-500 font-medium">إجمالي الدخل</span>
        </div>
        <p className="text-3xl font-bold text-emerald-600">
          {totals.income.toLocaleString()} ج.م
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-rose-50 p-2 rounded-lg text-rose-600">
            <TrendingDown size={20} />
          </div>
          <span className="text-slate-500 font-medium">إجمالي المصاريف</span>
        </div>
        <p className="text-3xl font-bold text-rose-600">
          {totals.expense.toLocaleString()} ج.م
        </p>
      </div>
    </div>
  );
};

export default Summary;
