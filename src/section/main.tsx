'use client';

import React from 'react';

function Main() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* ===== Dashboard Header ===== */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Dashboard
      </h1>

      {/* ===== Summary Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
          <p className="text-gray-500 dark:text-gray-300 text-sm">Total Income</p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">$12,500</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
          <p className="text-gray-500 dark:text-gray-300 text-sm">Total Expenses</p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">$8,200</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
          <p className="text-gray-500 dark:text-gray-300 text-sm">Budget Left</p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">$4,300</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
          <p className="text-gray-500 dark:text-gray-300 text-sm">Savings</p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">$1,500</p>
        </div>
      </div>

      {/* ===== Charts Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 h-64 flex items-center justify-center text-gray-400 dark:text-gray-300">
          {/* Replace with chart component later */}
          Income vs Expenses Chart
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 h-64 flex items-center justify-center text-gray-400 dark:text-gray-300">
          {/* Replace with chart component later */}
          Category-wise Spending Chart
        </div>
      </div>

      {/* ===== Recent Transactions ===== */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Recent Transactions
        </h2>
        <table className="w-full text-left text-gray-700 dark:text-gray-300">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-2 px-4">2025-10-01</td>
              <td className="py-2 px-4">Grocery</td>
              <td className="py-2 px-4">Food</td>
              <td className="py-2 px-4 text-red-500">-$120</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-2 px-4">2025-10-02</td>
              <td className="py-2 px-4">Salary</td>
              <td className="py-2 px-4">Income</td>
              <td className="py-2 px-4 text-green-500">+$3,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4">2025-10-03</td>
              <td className="py-2 px-4">Electric Bill</td>
              <td className="py-2 px-4">Utilities</td>
              <td className="py-2 px-4 text-red-500">-$80</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
