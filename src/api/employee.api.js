import api from "./axiosConfig";

export const getAllEmployees = async () => {
    const responce = await api.get("/");
    return responce.data;
}

export const addEmployee = async (employeeData) => {
    const responce = await api.post("/add", employeeData);
    return responce.data;
}

export const updateEmployee = async ({ employeeId, employeeData }) => {
    const responce = await api.put(`/update/:${employeeId}`, employeeData);
    return responce.data;
}

export const deleteEmployee = async (employeeId) => {
    const responce = await api.delete(`/delete/${employeeId}`);
    return responce.data;
}

export const filterEmployees = async ({ departmentFilter, positionFilter }) => {
    const responce = await api.get("/filter", {
        params: {
            department: departmentFilter,
            position: positionFilter,
        }
    });
    console.log(responce.data);

    return responce.data.data;
}