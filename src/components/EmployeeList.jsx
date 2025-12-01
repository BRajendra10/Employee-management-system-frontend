import React, { useState, useEffect } from "react";
import { LayoutList, Grid3X3, Search, MoreVertical } from "lucide-react";
import { deleteEmployee, filterEmployees, getAllEmployees } from "../api/employee.api";
import ViewEmployeeModal from "./ViewEmployeeModal";

function EmployeeList() {
  const [view, setView] = useState("list"); // list | board
  const [employees, setEmployees] = useState([]);
  const [openView, setOpenView] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [loading, setLoading] = useState(true);

  function handleView(emp) {
    setSelectedEmployee(emp);
    setOpenView(true);
  }

  function handleDelete(employeeId) {
    deleteEmployee(employeeId);
  }

  // const handleFilter = async () => {
  //   try {
  //     let data = [];

  //     // If both are "all" → fetch all
  //     if (departmentFilter === "all" && positionFilter === "all") {
  //       const res = await getAllEmployees();
  //       return setEmployees(res.employees);
  //     }

  //     // If only department selected
  //     if (departmentFilter !== "all" && positionFilter === "all") {
  //       const res = await filterEmployeeWithDepartment(departmentFilter);
  //       return setEmployees(res.employees);
  //     }

  //     // If only position selected
  //     if (positionFilter !== "all" && departmentFilter === "all") {
  //       const res = await filterEmployeeWithPosition(positionFilter);
  //       return setEmployees(res.employees);
  //     }

  //     // If both filters selected → chain them
  //     const depRes = await filterEmployeeWithDepartment(departmentFilter);
  //     const combined = depRes.employees.filter(
  //       (emp) => emp.position === positionFilter
  //     );

  //     setEmployees(combined);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  useEffect(() => {
    ; (async () => {
      setLoading(true);
      if (departmentFilter === "" && positionFilter === "") {
        const data = await getAllEmployees();
        // {success: true, message: 'All employees fetch successfully', employees: Array(4)}
        setEmployees(data.employees);
        setLoading(false);
      } else {
        console.log("else block...")
        const data = await filterEmployees({ departmentFilter, positionFilter });
        console.log(data);
        setEmployees(data);
        setLoading(false);
      }
    })();

  }, [departmentFilter, positionFilter, setEmployees]);

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex-1 w-full">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white">

        {/* Search bar */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-80">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search employees"
            className="ml-3 bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* User Section */}
        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-600">Rajendra</p>
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full border"
          />
        </div>
      </div>

      {/* PAGE HEADER */}
      <div className="flex justify-between items-center px-6 pt-6">
        <h1 className="text-2xl font-semibold">Employees</h1>

        <div className="flex gap-6">
          <div className="flex items-center gap-3">
            {/* Department Filter */}
            <select
              className="bg-gray-100 px-3 py-2 rounded-lg text-sm"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">HR</option>
            </select>

            {/* Position Filter */}
            <select
              className="bg-gray-100 px-3 py-2 rounded-lg text-sm"
              value={positionFilter}
              onChange={(e) => setPositionFilter(e.target.value)}
            >
              <option value="">All Positions</option>
              <option value="MERN Stack developer">MERN stack developer</option>
              <option value="HR">HR</option>
              <option value="Marketing consultant">Marketing consultant</option>
              <option value="Marketing coordinator">Marketing coordinator</option>
              <option value="Director of marketing">Director of marketing</option>
              <option value="Full stack web developer">Full stack web developer</option> 
            </select>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1 flex items-center gap-1 rounded-lg text-sm ${view === "list" ? "bg-white shadow" : "text-gray-500"
                }`}
            >
              <LayoutList size={16} /> List
            </button>

            <button
              onClick={() => setView("board")}
              className={`px-3 py-1 flex items-center gap-1 rounded-lg text-sm ${view === "board" ? "bg-white shadow" : "text-gray-500"
                }`}
            >
              <Grid3X3 size={16} /> Board
            </button>
          </div>
        </div>
      </div>

      {/* LIST VIEW */}
      {view === "list" && (
        <div className="px-6 py-4">
          <table className="w-full border-collapse mt-4">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="pb-3">Name</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Phone</th>
                <th className="pb-3">Department</th>
                <th className="pb-3">Position</th>
                <th className="pb-3">Salary</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees?.map((emp) => (
                <tr
                  key={emp._id}
                  className="border-b text-sm hover:bg-gray-50 transition"
                >
                  <td className="py-3 font-medium">{emp.name}</td>
                  <td className="py-3">{emp.email}</td>
                  <td className="py-3">{emp.phone}</td>

                  <td className="py-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-indigo-100 text-indigo-600">
                      {emp.department}
                    </span>
                  </td>

                  <td className="py-3">{emp.position}</td>

                  <td className="py-3 font-semibold">₹{emp.salary}</td>

                  <td className="py-3 text-right">
                    <button
                      onClick={() => handleView(emp)}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </button>
                    <button className="px-3 py-1 text-green-600 text-sm">Edit</button>
                    <button
                      onClick={() => handleDelete(emp._id)}
                      className="px-3 py-1 text-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* BOARD VIEW */}
      {view === "board" && (
        <div className="px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["IT", "Marketing", "HR"].map((dept) => (
            <div
              key={dept}
              className="bg-white shadow-sm border rounded-2xl p-5 hover:shadow-md transition-all duration-300"
            >
              {/* Department Header */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-gray-800">{dept}</h2>

                <span
                  className={`
                    px-3 py-1 text-xs font-medium rounded-full
                    ${dept === "IT"
                      ? "bg-blue-100 text-blue-600"
                      : dept === "Marketing"
                        ? "bg-green-100 text-green-600"
                        : "bg-purple-100 text-purple-600"
                    }
                  `}
                >
                  {employees.filter((e) => e.department === dept).length} Employees
                </span>
              </div>

              {/* Employee Cards */}
              <div className="space-y-4">
                {employees
                  .filter((e) => e.department === dept)
                  .map((emp) => (
                    <div
                      key={emp._id}
                      className="bg-gray-50 border rounded-xl p-4 hover:bg-gray-100 transition cursor-pointer"
                    >
                      <p className="font-semibold text-gray-800">{emp.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {emp.position}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          ₹{emp.salary}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* If No Employees */}
              {employees.filter((e) => e.department === dept).length === 0 && (
                <p className="text-sm text-gray-400 italic text-center mt-4">
                  No employees in this department.
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      <ViewEmployeeModal
        open={openView}
        onClose={() => setOpenView(false)}
        employee={selectedEmployee}
      />
    </div>
  );
}

export default EmployeeList;
