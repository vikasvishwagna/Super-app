import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Form.css'
import img from "../../assets/left-img.png";



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
    <div className="main-container">
      <div className="left-conatiner">
        <img className="left-img" src={img} alt="left image"/>
        <p className="left-text">Discover new things on <br />Superapp</p>
      </div>

    <div className="right-conatiner">
    <form onSubmit={handleSubmit} className="form-container">
      <p className="superapp-text">Super app</p>
      <p className="text-two">Create your new account</p>

      <div className="form-fields">
        <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange}
        className={`input-field ${errors.name ? "input-error" : "input-success"}`}/>
        <p className="error-text">{errors.name}</p>

        <input type="text" name="username" id="username" placeholder="UserName" onChange={handleChange}  className={`input-field ${errors.username ?"input-error":"input-success"}`}/>
        <p className="error-text">{errors.username}</p>

        <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}
        className={`input-field ${errors.email ? "input-error" : "input-success"}`} />
        <p className="error-text">{errors.email}</p>

        <input type="tel" name="mobile" id="mobile" placeholder="Mobile" onChange={handleChange}
        className={`input-field ${errors.mobile? "input-error" : "input-success"}`} />
        <p className="error-text">{errors.mobile}</p>

        <div className="checkbox-container">
          <input className="checkbox" type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckBox} />
          <label htmlFor="checkbox" className="checkbox-label">
           Share my registration data with Superapp
            </label>
        </div>
        <p className="error-text">{errors.checkbox}</p>
        
        <button className="signup-btn" type="submit">SIGN UP</button>

        <label className="label1">
        By clicking on Sign up. you agree to Superapp <br></br>
        <a className="a-link">Terms and Conditions of Use</a>
        </label>

        <label className="label2">
        To learn more about how Superapp collects, uses, shares<br></br>  and protects your personal data please head Superapp<br></br> <a className="a-link">Privacy Policy</a>
        </label>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Form