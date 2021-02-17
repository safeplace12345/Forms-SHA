const checkpattern = (e) => {
    const el = e.target
    if (el.checkValidity()) {
        el.style.color = 'green'
    }else{
        el.style.color = 'red'
    }
}
const checkCountry = (e) => {
    const el = e.target
    if(el.value === '' || el.value === undefined){
        el.style.borderColor = 'red'
    }else{
        el.style.borderColor = 'green'
    }
}
const checkZip = (e) => {
    const regex = /(\d{5})|(\d{4})|(^\d{5}-\d{4}$)/
 const el = e.target
 if( regex.test(el.value)){
    el.style.color = 'green'
    }else{
     el.style.color = 'red'
 }

}
const checkPassword = (e) => {
  const pwd = document.querySelector('#pwd');
  const cpwd = e.target
  if(pwd.value === cpwd.value){
      cpwd.style.borderColor = 'green'
    }else{
        cpwd.style.borderColor = 'red'
  }
}
const inputs = Array.from(document.getElementsByTagName('input'))
inputs.forEach(input => {
    if(input.id === 'email'){
        input.addEventListener('focusout',checkpattern)
    }else if(input.id === 'country'){
        input.addEventListener('focusout',checkCountry)
    } else if (input.id === 'zip') {
        input.addEventListener('focusout', checkZip)
    }
     else if (input.id === 'pwd-confirm') {
        input.addEventListener('focusout', checkPassword)
    }

})
const checkEmptyFields = (arr) => {
  if(arr.every(input => input.value !== '')){
      alert(`Welcome to the Team ${arr[0].value}`)
  }else{
  alert('Ooops some information missing or invalid')
  }
}
const submitBtn = document.querySelector('.submit')
submitBtn.addEventListener('click', function () {
 checkEmptyFields(inputs)
})