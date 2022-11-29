import axios from 'axios'

const URL_ADMIN = "https://matan1902.onrender.com/products/"
const URL_USER = "https://matan1902.onrender.com/getproducts/"
const URL_ALL_PRODS = "https://matan1902.onrender.com/getallproducts/"
// async(2)
export function getprods(catId) {
    return new Promise((resolve) =>
        axios(URL_USER + catId).then((res) => resolve({ data: res.data }))
        
    );
}
export function getallprods() {
    return new Promise((resolve) =>
        axios(URL_ALL_PRODS).then((res) => resolve({ data: res.data }))
        
    );
}

export function saveprod(newProduct) {
    return new Promise((resolve) =>
        axios.post(URL_ADMIN,newProduct,{
            headers: {
                'Authorization': `Bearer ${newProduct.userToken}`
            }
        }).then((res) => resolve({ data: res.data }))
    );
}

export function removeprod(id) {
    return new Promise((resolve) =>
      axios.delete(URL_ADMIN + id.productId,{
        headers:{
          'Authorization':`Bearer ${id.userToken}`
      
        }  
      }).then((res) => resolve({ data: res.data }))
    );
  } 

export function updateprod(updateProduct) {
    return new Promise((resolve) =>
        axios.put(URL_ADMIN + updateProduct.id,updateProduct,{
            headers: {
                'Authorization': `Bearer ${updateProduct.userToken}`
            }
        }).then((res) => resolve({ data: res.data }))
    );
}
