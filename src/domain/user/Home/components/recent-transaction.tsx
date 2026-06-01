const RecentTransaction = () => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>

      {/* Scrollable container */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[800px] w-full text-xs text-left text-gray-700 border-separate border-spacing-y-1">
          {/* Table Head */}
          <thead className="bg-[#F5F6FA] text-gray-500 font-medium border-b border-gray-300">
            <tr>
              <th className="py-2 px-2">REFERENCE ID</th>
              <th className="px-2">SENDER/BENEFICIARY</th>
              <th className="px-2">TYPE</th>
              <th className="px-2">AMOUNT</th>
              <th className="px-2">DESCRIPTION</th>
              <th className="px-2">STATUS</th>
              <th className="px-2">DATE</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <td className="py-2 px-2">#A1B2C3D4</td>
              <td className="px-2">Alice Johnson</td>
              <td className="px-2">Transfer</td>
              <td className="px-2">$147,000</td>
              <td className="px-2">April Transfer</td>
              <td className="px-2 text-green-600">Completed</td>
              <td className="px-2">April 21, 2025</td>
            </tr>
            <tr className="bg-white border-b border-gray-200">
              <td className="py-2 px-2">#E5F6G7H8</td>
              <td className="px-2">Michael Smith</td>
              <td className="px-2">Deposit</td>
              <td className="px-2">$121,000</td>
              <td className="px-2">Year-End Funds</td>
              <td className="px-2 text-green-600">Completed</td>
              <td className="px-2">November 29, 2024</td>
            </tr>
            <tr className="bg-white border-b border-gray-200">
              <td className="py-2 px-2">#I9J0K1L2</td>
              <td className="px-2">Sarah Williams</td>
              <td className="px-2">Transfer</td>
              <td className="px-2">$92,000</td>
              <td className="px-2">Project Payment</td>
              <td className="px-2 text-green-600">Completed</td>
              <td className="px-2">May 12, 2024</td>
            </tr>
            <tr className="bg-white border-b border-gray-200">
              <td className="py-2 px-2">#M3N4O5P6</td>
              <td className="px-2">David Lee</td>
              <td className="px-2">Withdrawal</td>
              <td className="px-2">$164,000</td>
              <td className="px-2">Business Expense</td>
              <td className="px-2 text-green-600">Completed</td>
              <td className="px-2">January 30, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransaction;
