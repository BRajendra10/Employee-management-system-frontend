import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addEmployee } from "../api/employee.api";
import { useNavigate } from 'react-router-dom';

// ⭐ Yup Validation Schema
const employeeSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone is required"),
    department: Yup.string().required("Department is required"),
    position: Yup.string().required("Position is required"),
    salary: Yup.number()
        .typeError("Salary must be a number")
        .positive("Salary must be positive")
        .required("Salary is required"),
});

function AddEmployeeForm() {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-120 mx-auto bg-white p-6 rounded-2xl shadow-sm border">
                <h2 className="text-lg font-semibold mb-4">Add New Employee</h2>

                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        department: "",
                        position: "",
                        salary: "",
                    }}
                    validationSchema={employeeSchema}
                    onSubmit={async (values, { resetForm }) => {
                        await addEmployee(values);
                        resetForm();
                        navigate("/");
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">

                            {/* Name */}
                            <div>
                                <label className="text-sm text-gray-600">Name</label>
                                <Field
                                    name="name"
                                    className="w-full p-2 rounded-xl border focus:ring-2 focus:ring-gray-900 outline-none"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm text-gray-600">Email</label>
                                <Field
                                    name="email"
                                    type="email"
                                    className="w-full p-2 rounded-xl border focus:ring-2 focus:ring-gray-900 outline-none"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="text-sm text-gray-600">Phone</label>
                                <Field
                                    name="phone"
                                    className="w-full p-2 rounded-xl border focus:ring-2 focus:ring-gray-900 outline-none"
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Department */}
                            <div>
                                <label className="text-sm text-gray-600">Department</label>
                                <Field
                                    as="select"
                                    name="department"
                                    className="w-full p-2 rounded-xl border bg-white focus:ring-2 focus:ring-gray-900 outline-none"
                                >
                                    <option value="">Select Department</option>
                                    <option value="IT">IT</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="HR">HR</option>
                                </Field>
                                <ErrorMessage
                                    name="department"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Position */}
                            <div>
                                <label className="text-sm text-gray-600">Position</label>
                                <Field
                                    name="position"
                                    className="w-full p-2 rounded-xl border focus:ring-2 focus:ring-gray-900 outline-none"
                                />
                                <ErrorMessage
                                    name="position"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Salary */}
                            <div>
                                <label className="text-sm text-gray-600">Salary (₹)</label>
                                <Field
                                    name="salary"
                                    type="number"
                                    className="w-full p-2 rounded-xl border focus:ring-2 focus:ring-gray-900 outline-none"
                                />
                                <ErrorMessage
                                    name="salary"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gray-900 text-white py-2.5 rounded-xl hover:bg-gray-800 transition"
                            >
                                Add Employee
                            </button>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default AddEmployeeForm;
