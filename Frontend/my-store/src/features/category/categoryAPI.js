import axios from 'axios'

const URL_ADMIN = "https://matan1902.onrender.com/categories/"
const URL_USER = "https://matan1902.onrender.com/getcategories/"

export function getcats() {
    return new Promise((resolve) =>
        axios(URL_USER).then((res) => resolve({ data: res.data }))
    );
}

export function savecat(newCategory) {
    return new Promise((resolve) =>
        axios.post(URL_ADMIN,newCategory,{
            headers: {
                'Authorization': `Bearer ${newCategory.userToken}`
            }
        }).then((res) => resolve({ data: res.data }))
    );
}

export function removecat(id) {
    return new Promise((resolve) =>
      axios.delete(URL_ADMIN + id.categoryId,{
        headers:{
          'Authorization':`Bearer ${id.userToken}`
      
        }  
      }).then((res) => resolve({ data: res.data }))
    );
  } 

export function updatecat(updateCategory) {
    return new Promise((resolve) =>
        axios.put(URL_ADMIN + updateCategory.categoryId,updateCategory,{
            headers: {
                'Authorization': `Bearer ${updateCategory.userToken}`
            }
        }).then((res) => resolve({ data: res.data }))
    );
}