import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getData = async () => await axios.get(`${API_URL}/UserData`);

export const postData = async (username, email, password, userRole) => {
    const { data: edata } = await getData();
    const newid = Math.max(...edata.map(user => user.id), 0) + 1;
    const ND = {
        uname: username,
        email: email,
        password: password,
        Role: userRole,
        id: newid,
    };
    await axios.post(`${API_URL}/UserData`, ND);
};

export const showData = async () => {
    const res = await axios.get(`${API_URL}/UserData`);
    return res.data;
};

export const updateData = async (id, updatedUser) => {
    await axios.put(`${API_URL}/UserData/${id}`, updatedUser);
};

export const deleteData = async (id) => {
    await axios.delete(`${API_URL}/UserData/${id}`);
};

export const getUserData = async (id) => {
    const res = await axios.get(`${API_URL}/UserData/${id}`);
    return res.data;
};
export const setNewUserPassword = async (id,updatedUser) => {
    await axios.put(`${API_URL}/UserData/${id}`,updatedUser);
};

export const updateUserPlans = async (id, updatedPlans) => {
    const user = await getUserData(id);
    if (!user.Plans) {
        user.Plans = [];
    }
    await axios.patch(`${API_URL}/UserData/${id}`, { Plans: updatedPlans });
};
// export const updateUserPlans = async (id, newPlan) => {
//     const user = await getUserData(id);
//     if (!user.Plans) {
//       user.Plans = [];
//     }
//     if (newPlan) {
//       user.Plans = [...user.Plans, newPlan];
//     }
//     await axios.patch(`${API_URL}/UserData/${id}`, { Plans: user.Plans });
//   };
export const showInventory = async() =>{
    return await axios.get(`${API_URL}/Inventory`);
}
// src/Json/Db.js
export const updateInventory = async (id, updatedProduct) => {
    try {
        await axios.put(`${API_URL}/Inventory/${id}`, updatedProduct);
    } catch (error) {
        console.error('Error updating inventory:', error);
    }
};
