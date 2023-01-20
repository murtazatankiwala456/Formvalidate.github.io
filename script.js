const form =document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const password2=document.querySelector('#password2');

form.addEventListener('submit',(e) => {
    e.preventDefault()
    validInputs()
})

const setError=(element,message) => {
    const inputControl=element.parentElement; //target the parent element of enter element value that is input-control class
    const errorDisplay=inputControl.querySelector('.error'); //then target the first return error class of input-contel div
    errorDisplay.innerText=message //display message on error class
    inputControl.classList.add('error') //adding red class to input
    inputControl.classList.remove('success') //removing green class from input
}
const setSucess=(element) => {
    const inputControl=element.parentElement;//target the parent element of enter value that is input-control class
    const errorDisplay=inputControl.querySelector('.error');//then target the first return error class of input-contel div
    errorDisplay.innerText='' //display nothing is everything is fine
    inputControl.classList.add('success')//adding green class to input
    inputControl.classList.remove('error')//removing red class from input
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validInputs=() =>{
    const usernameValue=username.value.trim()
    const emailValue=email.value.trim()
    const passwordValue=password.value.trim()
    const password2Value=password2.value.trim()


    if(usernameValue === ''){
        setError(username,'username required')
    }else{
setSucess(username)
    }


   if(emailValue ===''){
      setError(email,'Enter your email')
   }else if(!isValidEmail(emailValue)){
    setError(email,'Enter a Valid Email')
   }else{
    setSucess(email)
   }

   if(passwordValue === ''){
    setError(password,'Enter your Password')
   }else if(passwordValue.length < 8){
    setError(password,'Password must be of 8 characters')
   }else{
    setSucess(password)
   }

   if(password2Value === ''){
    setError(password2,'Please confirm your password')
   }else if(password2Value !== passwordValue){
    setError(password2,"Password doesn't match!")
   }else{
    setSucess(password2)
   }
}