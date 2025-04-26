import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Form.css'


function Form() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:"",
    username:"",
    email:"",
    mobile:"",
    checkbox:""
  });

  const [errors, setErrors] = useState({
    name:"",
    username:"",
    email:"",
    mobile:"",
    checkbox:false
  })
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }

  const handleCheckBox = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.checked
    });
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    let newErrors = {...errors};

    //name
    if(
      formData.name.trim().length ===0 ||
      formData.name === undefined ||
      formData.name === null
    ){
      newErrors.name = "Filed is required";
    }else{
      newErrors.name = "";
    }

    //username
    if(
      formData.username.trim().length ===0 ||
      formData.username === undefined ||
      formData.username === null
    ){
      newErrors.username = "Filed is required";
    }else{
      newErrors.username = "";
    }

    //email
    if(
      formData.email.trim().length ===0 ||
      formData.email === undefined ||
      formData.email === null
    ){
      newErrors.email = "Filed is required";
    }else{
      newErrors.email = "";
    }

    //mobile
    if(
      formData.mobile.trim().length ===0 ||
      formData.mobile === undefined ||
      formData.mobile === null
    ){
      newErrors.mobile = "Filed is required";
    }else{
      newErrors.mobile = "";
    }

    //checkbox
    if(!formData.checkbox){
      newErrors.checkbox = "Check this box if you want to proceed";
    }else{
      newErrors.checkbox = "";
    }

    setErrors({...newErrors});
    if(
      newErrors.name === "" &&
      newErrors.username === "" &&
      newErrors.email === "" &&
      newErrors.mobile === "" &&
      newErrors.checkbox === ""
    ){
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/gener");
    }
  }

  return (
    <div className="form-container">
      <div className="form-left">
        <p>Discover new things on superapp</p>
      </div>

    <div className="form-right">
    <form onSubmit={handleSubmit} className="">
    <p>Super app</p>
    <p>Create your new account</p>
      <div className="input-container">
        <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange}/>
        <p style={{color:"red"}}>{errors.name}</p>

        <input type="text" name="username" id="username" placeholder="UserName" onChange={handleChange} />
        <p style={{color:"red"}}>{errors.username}</p>

        <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
        <p style={{color:"red"}}>{errors.email}</p>

        <input type="tel" name="mobile" id="mobile" placeholder="Mobile" onChange={handleChange} />
        <p style={{color:"red"}}>{errors.mobile}</p>

        <input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckBox} />
        <p style={{color:"red"}}>{errors.checkbox}</p>

        <button type="submit">SIGN UP</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Form