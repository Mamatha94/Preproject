import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import {
  
  
  Button,
  
  Container
} from "@material-ui/core";
import bgct from "./bg-01.jpg";

const useStyles   = makeStyles((theme) => ({
  root: {
    
      display: "flex",
      justifyContent: "center",
      
    
  },
 
  eduheader: {
    backgroundImage:"url("+bgct+")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height:160,
    textAlign: "center",
    color:"#00b0ff",
    justifyContent: "center"
  }
}));
//class App extends React.Component{
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
    submitted: false
    
  });
 
 
  const handleChangeName = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const handleChangeEmail = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const handleChangeMsg = (event) => {
    setFormData({ ...formData, msg: event.target.value });
  };
  const handleSubmit = (e) => {
  
    confirmAlert({
     // title: 'Confirm to submit',
      message: 'Finished Successfully',
      buttons: [
        {
          label: 'OK',
          
        },
        
      ]
    })
    setFormData({ submitted: true,name : '',email:'',msg:'' }, () => {
      //  setTimeout(() => setFormData({ submitted: false }), 5000);
  });
  
    e.preventDefault();
    console.log(formData);
  };


     const classes = useStyles();
     
      return (
        
        <Container className={classes.root}
        
      >
       
        <ValidatorForm  onSubmit={handleSubmit} style={{ width: "50%" }} >
        <div  className={classes.eduheader}
        >
        <h3>Let's Connect</h3>
        <h3>We'd love to help you start exceeding your career goals.</h3>
        
        </div >
         
        <br/>
        <TextValidator
                    label="Name"
                    style={{ width: "80%" }}
                    name="name"
                    value={formData.name}
                    onChange={handleChangeName} 
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br/>
        <TextValidator
                    label="Email"
                    style={{ width: "80%" }}
                    name="email"
                    value={formData.email}
                    onChange={handleChangeEmail} 
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br/>
                <TextValidator
                    label="Message"
                    style={{ width: "80%" }}
                    multiline rows={5}
                    name="msg"
                    value={formData.msg}
                    onChange={handleChangeMsg} 
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                   
                >
                   submit 
                </Button>
               
        </ValidatorForm>
          
        
        
        </Container>
      );
    
    
  }
export default App;
