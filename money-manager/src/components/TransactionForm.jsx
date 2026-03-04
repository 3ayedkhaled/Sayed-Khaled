import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const TransactionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'expense',
    category: 'طعام',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) return;
    onAdd(formData);
    setFormData({ ...formData, title: '', amount: '' });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <PlusCircle size={20} className="text-blue-600" />
        إضافة معاملة جديدة
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-600">العنوان</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            placeholder="مثال: فاتورة الغاز"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            dir="rtl"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-600">المبلغ</label>
          <input
            type="number"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            placeholder="0.00"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-600">النوع</label>
          <select
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="expense">مصروفات</option>
            <option value="income">إيرادات</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
        >
          <PlusCircle size={20} />
          إضافة
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
