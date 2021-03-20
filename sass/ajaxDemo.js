const btn=document.getElementById('btnSubmit')
const id=document.getElementById('empID')
const email=document.getElementById('empEmail')
const salary=document.getElementById('empSal')

//id.addEventListener('change',(evt)=>console.log(evt.target.value) )
const getData=async () => {
  const data=await fetch("http://localhost:3000/employees")
   data.json()
  
  .then(res=>{
    localStorage.setItem('newData',JSON.stringify(res));
  document.querySelector(".countries").innerHTML=html; //.insertAdjacentHTML("beforeend",testHTML)
 //document.getElementById
  document.querySelector(".countries").style.opacity=1;
})
};

btn.addEventListener('click',async ()=>{
    const obj=  {id:id.value,
     email:email.value,
     salary:salary.value
    }
    console.log(typeof obj)
   congetData= JSON.stringify(obj)
   

    const data=await fetch("http://localhost:3000/employees",{
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(obj)
})
    const res=await data.json()
    console.log(res);
    const allData=JSON.parse(localStorage.getItem('newData'))
    allData.push(res);
    localStorage.setItem('newData',JSON.stringify(allData))
    
   
});
getData();
