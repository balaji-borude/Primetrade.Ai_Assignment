// basic Crud Operations 
import axios from 'axios';

//const BASE_URL = "http://localhost:3000/api/v1";
//const BASE_URL = process.env.REACT_APP_BASE_URL; //--> process.env is not supported on vite project below line is supported 
const BASE_URL=import.meta.env.VITE_BASE_URL;

console.log("base URl of api --> ", BASE_URL);

// eslint-disable-next-line react-refresh/only-export-components
export const addTask = async(taskData)=>{
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/task/createtask`,taskData,{
            headers: { "Content-Type": "application/json" }, 
        });

        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error creating task:", error.response?.data);
        console.error(error);
    }

};

export const FetchAllTask = async()=>{
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/task/getalltask`);
       // console.log("All Task is fetched", response);
        return response.data.task;
    } catch (error) {
        console.error(error);
        alert("Error in getting all tasks")
    }

};

// export const UpdateTask = async(taskId)=>{
//     try {
//         const response = await axios.put(`${BASE_URL}/updateTask/${taskId}`);
//         console.log(response);
//         return response.data;

//     } catch (error) {
//         console.log("Error ocuur While Updating Task ",error)
//     }
// };

export const UpdateTask = async (taskId, updatedTask) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/v1/task/updatetask/${taskId}`,updatedTask  );
  
      console.log("Task Updated:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error occurred while updating task:", error);
    }
  };
  
export const DeleteTask = async(taskId)=>{
    try {
        console.log("Getting Url for deltete task",`${BASE_URL}/deletetask/${taskId}`)
        const response = await axios.delete(`${BASE_URL}/api/v1/deletetask/${taskId}`);
        return response.data;

    } catch (error) {
       console.log("Error occur while Delteing Task",error); 
    }
}

