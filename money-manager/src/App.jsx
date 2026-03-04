import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { useTransactions } from './hooks/useTransactions';

function App() {
  const { transactions, addTransaction, deleteTransaction, totals } = useTransactions();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900" dir="rtl">
      <Header />
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <Summary totals={totals} />
        <TransactionForm onAdd={addTransaction} />
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
        />
      </main>
    </div>
  );
}

export default App;
