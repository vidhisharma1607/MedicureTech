import axios from "axios";
export const getAllMedicines = async () => {
  const res = await axios.get("http://localhost:5000/medicines");

  if (res.status !== 200) {
    return console.log("some error occured");
  }
  const data = res.data;
  return data;
};
export const sendAuthRequest = async (signup, data) => {
  const res = await axios
    .post(
      `http://localhost:5000/admin/${signup ? "admin-signup" : "admin-login"}/`,
      {
        licence: data.licence ? data.licence : "",
        company: data.company,
        password: data.password,
      }
    )
    .catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    return console.log("unable to authenticate");
  }
  const resData = await res.data;
  return resData;
};

export const sendAuthRequestShopkeeper = async (signup, data) => {
  const res = await axios
    .post(`http://localhost:5000/user/${signup ? "signup" : "login"}/`, {
      name: data.name ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    return console.log("unable to authenticate");
  }
  const resData = await res.data;
  return resData;
};

export const addMedicine = async (data) => {
  const res = await axios
    .post("http://localhost:5000/medicines/", {
      name: data.name,
      salts: data.salts,
      company: data.company,
      description: data.description,
      expiryDate: data.expiryDate,
      credPoints: data.credPoints,
      price: data.price,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Error occured");
  }
  const resData = await res.data;
  return resData;
};

export const addMR = async (data) => {
  const res = await axios
    .post("http://localhost:5000/mr/", {
      name: data.name,
      location: data.location,
      employee: data.employee,
      joiningDate: data.joiningDate,
      password: data.password,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Error occured");
  }
  const resData = await res.data;
  return resData;
};

export const getMRbyAdmin = async (id) => {
  console.log(id);
  const res = await axios
    .get(`http://localhost:5000/mr/admins/${id}/`)
    .catch((err) => {
      console.log(err);
    });
  if (res.status !== 200) {
    return console.log("unable to fetch occured");
  }
  const resData = await res.data;
  return resData;
};

export const getMedicineDetails = async (id) => {
  console.log(id);
  const res = await axios
    .get(`http://localhost:5000/medicines/${id}/`)
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("unable to fetch occured");
  }
  const resData = await res.data;
  return resData;
};

export const getMRDetails = async (id) => {
  console.log(id);
  const res = await axios
    .get(`http://localhost:5000/mr/${id}/`)
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("unable to fetch occured");
  }
  const resData = await res.data;
  return resData;
};

export const medicineUpdate = async (data, id) => {
  const res = await axios
    .put(`http://localhost:5000/medicines/${id}`, {
      name: data.name,
      salts: data.salts,
      company: data.company,
      description: data.description,
      expiryDate: data.expiryDate,
      credPoints: data.credPoints,
      price: data.price,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to update from helper");
  }

  const resData = await res.data;
  return resData;
};

export const medicineDelete = async (id) => {
  const res = await axios
    .delete(`http://localhost:5000/medicines/${id}`)
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("unable to delete");
  }
  const resData = await res.data;
  return resData;
};



export const MRUpdates = async (data, id) => {
  const res = await axios
    .put(`http://localhost:5000/mr/${id}`, {
      name: data.name,
      location: data.location,
      joiningDate: data.joiningDate,
      employee: data.employee,
      password: data.password,
     
    })
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to update from helper");
  }

  const resData = await res.data;
  return resData;
};


export const mrDelete = async (id) => {
  const res = await axios
    .delete(`http://localhost:5000/mr/admin/MRid/${id}`)
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("unable to delete");
  }
  const resData = await res.data;
  return resData;
};

export const addCartItem= async (data) => {
  const res = await axios
    .post("http://localhost:5000/cart/user/addtocart/", {
      name: data.name,
      company:data.company,
      price:data.price,

      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Error occured");
  }
  const resData = await res.data;
  return resData;
};

export const getProductbyUser = async (id) => {
  console.log(id);
  const res = await axios
    .get(`http://localhost:5000/cart/user/cartItem/${id}/`)
    .catch((err) => {
      console.log(err);
    });
  if (res.status !== 200) {
    return console.log("unable to fetch occured");
  }
  const resData = await res.data;
  return resData;
};

export const getProductById= async (id)=>{
  console.log(id);
  const res= await axios.get(`http://localhost:5000/cart/cartItem/${id}`).catch((err)=>{ console.log(err);})
  if (res.status !== 200) {
    return console.log("unable to fetch occured");
  }
  const resData = await res.data;
  return resData;
}