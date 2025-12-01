import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddEmployeeForm from '../components/AddEmployeeForm';
import EmployeeList from '../components/EmployeeList';

export default function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployeeForm />} />
        </Routes>
    )
}