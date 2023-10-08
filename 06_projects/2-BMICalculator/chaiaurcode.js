const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const height= parseInt(document.querySelector('#height').value);
  const weight= parseInt(document.querySelector('#weight').value);
  const results= document.querySelector('#results');
  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML="Please give valid height";
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML="Please give valid weight";
  }
  else{
    const bmi  = (weight/((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
    let message=''
    if(bmi<18.6){
      message=' Under Weight'
    }
    else if(bmi>=18.6 && bmi<24.9){
      message=' Normal Range'
    }
    else{
      message=' Overweight'
    }
    const sp=document.createElement('span')
    sp.appendChild(document.createTextNode(message))
    results.appendChild(sp)
  }
})