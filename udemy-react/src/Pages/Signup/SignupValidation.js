function validation(values){
    let error = {}
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

 
    
    if (values.name.trim() === "") { // Use trim() to remove leading and trailing whitespace
        error.name = "Name should not be empty";
    } else {
        error.name = "";
    }
    
    if(values.email === ""){
     error.email = "Name should not be empty";
    }
    else if(!email_pattern.test(values.email)){
     error.email = "Email didn't match";
    }
    else {
     error.email = "";
    }
 
    if(values.password === ""){
     error.password = "Password shouldn't be empty";
    }
    else if(!password_pattern.test(values.password)){
     error.password = "Password didn't match";
    }else{
     error.password = ""
    }
    return error;
 }
 
 export default validation;