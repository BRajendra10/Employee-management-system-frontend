import React from "react";

function ViewEmployeeModal({ open, onClose, employee }) {
  if (!open || !employee) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Employee Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-medium">{employee.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">{employee.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium">{employee.phone}</p>
          </div>

          <div>
            <p className="text-gray-500">Department</p>
            <p className="font-medium">{employee.department}</p>
          </div>

          <div>
            <p className="text-gray-500">Position</p>
            <p className="font-medium">{employee.position}</p>
          </div>

          <div>
            <p className="text-gray-500">Salary</p>
            <p className="font-medium">₹{employee.salary}</p>
          </div>

          <div>
            <p className="text-gray-500">Joined Date</p>
            <p className="font-medium">
              {employee.joinedDate
                ? new Date(employee.joinedDate).toLocaleDateString()
                : "—"}
            </p>
          </div>
        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="w-full mt-6 bg-gray-900 text-white py-2.5 rounded-xl hover:bg-gray-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ViewEmployeeModal;
