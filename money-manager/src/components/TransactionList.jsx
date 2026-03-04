import React from 'react';
import { Trash2, History, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 min-h-[400px]">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
          <History size={20} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">تاريخ المعاملات</h2>
      </div>

      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-slate-400 space-y-4">
          <History size={48} className="opacity-20" />
          <p className="text-lg">لا توجد معاملات بعد</p>
        </div>
      ) : (
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="group flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div
                  className={`p-3 rounded-xl ${
                    transaction.type === 'income'
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'bg-rose-50 text-rose-600'
                  }`}
                >
                  {transaction.type === 'income' ? (
                    <ArrowUpCircle size={24} />
                  ) : (
                    <ArrowDownCircle size={24} />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{transaction.title}</h3>
                  <p className="text-sm text-slate-400 font-medium">اليوم</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span
                  className={`text-lg font-bold ${
                    transaction.type === 'income' ? 'text-emerald-600' : 'text-rose-600'
                  }`}
                >
                  {transaction.type === 'income' ? '+' : '-'}
                  {parseFloat(transaction.amount).toLocaleString()} ج.م
                </span>
                <button
                  onClick={() => onDelete(transaction.id)}
                  className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;
