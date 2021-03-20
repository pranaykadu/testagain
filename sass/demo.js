//IIFE




//UI form  input

let UIModule=(function(){
   let htmlIds={
     para:'headline',
     div:'test1'
   }


   let paraVal=  document.getElementById(htmlIds.para).innerText;
   function ModifyPara(val){
    document.getElementById(htmlIds.para).innerText=document.getElementById(htmlIds.para).innerText +val;
   }
   let hideAnyElement=function(id){
    document.getElementById(id).style.display='none';
   }
   return {
         getIDs:function(){
           return htmlIds;
         },
         getParaValue:function(){
           return paraVal;
         },
         setParaValue:function(val){
          ModifyPara(val)
          if( val<20){ 
            hideAnyElement(htmlIds.div)
           }

         },
         hideDiv:function(id){
             hideAnyElement(id)
         }
   }

})()


let appModule=(function(uMod){

  this.counter=40;
  function calculation(t){
    if(t){
      counter=counter-t
    }
    else{
    counter=counter+50;
    }
    if( counter<20){ 
     // uMod.hideDiv(uMod.getIDs().div)
    }
  }
  return {
    getLastCounter:function(){
      calculation()
      return counter;
    },
    setCounter:function(val){
       calculation(val)
       uMod.setParaValue(counter);
      return counter;
    },
  }
})(UIModule)
//console.log(UIModule.getParaValue())
console.log(appModule.setCounter(11))


// class Person {


//   constructor(name,address,year){
//     this.name=name;
//     this.address=address
//     this.year=year
//   }
//   calAge=function(){ return 2021-this.year}
// }


// class Student extends Person{
//   #sub1;
//   #sub2;
//   static collegeName='Test';
// constructor(name,address,year,course,sub1,sub2){
//   super(name,address,year)
//    this.course=course;
//    this.#sub1=sub1;
//    this.#sub2=sub2
// }
// getSubject1(){
//   return this.#sub1;
// }
// getSubject2(){
//   return this.#sub2;
// }
// setSubject1(val){
//   this.#sub1=val;
// }
//  static getCollegeName() {
//    console.log('this is a static method' + Student.collegeName);
//  }
// }


//  const compStudent= new Student('testComp','India',2010,'Msc','comp','eng')
//  console.log(compStudent.getSubject1())
//  console.log(compStudent.getSubject2())
//  console.log(compStudent.name);
//  compStudent.name="abcd"
//  console.log(compStudent.name);
// compStudent.setSubject1('Web Design')
// console.log(compStudent.getSubject1())
// console.log(Student.getCollegeName())
// const Student= function(name,address,year,course,sub1,sub2){
//   this.course=course;
//   this.sub1=sub1;
//   this.sub2=sub2;
//   Person.call(this,name,address,year)
// }



// Student.prototype=Object.create(Person.prototype);
// Student.prototype.constructor=Student;
// const compStudent= new Student('testComp','India',2010,'Msc','comp','eng')
// console.log(compStudent)

// const Person=function(name,address,year){
//   this.name=name;
//   this.address=address;
//   this.year=year;
//   //this.calAge=function(){ return 2021-this.year}
// }

// Person.prototype.calAge=function(){ return 2021-this.year}
// const a= new Person('a','pune',2000);
// const b= new Person('b','pune',1995);


// function getCountryData(name){
// const testURL=new XMLHttpRequest()
// testURL.open('GET','https://restcountries.eu/rest/v2/name/'+name)
// testURL.send()
// testURL.addEventListener('load',calbac)
// }

// function calbac(data) {
//  // console.log(this.response)
//   const indiaData= JSON.parse(this.response)
//   // console.log(indiaData.name)
//   // console.log((+indiaData.population/10000000).toFixed(2) + ' Cr')
//   //document.getElementById('headline').innerHTML='<img width="200px"  height="200px" src="'+indiaData[1].flag+'">'

// secondtest(indiaData[0].borders[0]);



//   const html = `
//   <article class="country">
//     <img class="country__img" src="${indiaData[0].flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${indiaData[0].name}</h3>
//       <h4 class="country__region">${indiaData[0].region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +indiaData[0].population / 10000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${indiaData[0].languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${indiaData[0].currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
//   document.querySelector('.countries').style.opacity = 1;
// }



// function secondtest(name){
//   const req=new XMLHttpRequest();
// req.open('GET',`https://restcountries.eu/rest/v2/alpha/${name}`)
// req.send()
// req.addEventListener('load',(d)=>{
 
//   const indiaData1= JSON.parse(d.currentTarget.response)
//   console.log(indiaData1)
//   thirdtest(indiaData1.borders[0]);;
//   const html1 = `
//   <article class="country">
//     <img class="country__img" src="${indiaData1.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${indiaData1.name}</h3>
//       <h4 class="country__region">${indiaData1.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +indiaData1.population / 10000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${indiaData1.languages.name}</p>
//       <p class="country__row"><span>💰</span>${indiaData1.currencies.name}</p>
//     </div>
//   </article>
//   `;
//   document.querySelector('.countries').insertAdjacentHTML('beforeend', html1);
//   document.querySelector('.countries').style.opacity = 1;
// })

// }

// function thirdtest(name){
//   const req=new XMLHttpRequest();
// req.open('GET',`https://restcountries.eu/rest/v2/alpha/${name}`)
// req.send()
// req.addEventListener('load',(d)=>{
 
//   const indiaData1= JSON.parse(d.currentTarget.response)
//   console.log(indiaData1);
//   const html1 = `
//   <article class="country">
//     <img class="country__img" src="${indiaData1.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${indiaData1.name}</h3>
//       <h4 class="country__region">${indiaData1.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +indiaData1.population / 10000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${indiaData1.languages.name}</p>
//       <p class="country__row"><span>💰</span>${indiaData1.currencies.name}</p>
//     </div>
//   </article>
//   `;
//   document.querySelector('.countries').insertAdjacentHTML('beforeend', html1);
//   document.querySelector('.countries').style.opacity = 1;
// })

// }

//getCountryData('France');
//getCountryData('Germany');

// function testDelay() {
//   console.log(`print the current time ${new Date()}`)
// }

// setTimeout(()=>{
//   console.log(`print the current time ${new Date()}`)
//   setTimeout(()=>{
//     console.log(`from 2nd settimeout current time ${new Date()}`)
//     setTimeout(()=>{
//       console.log(`3rd one current time ${new Date()}`)
      
//     },1000)
//   },1000)
// },1000);
// testDelay()

function getCountryData(name){

//const data= 
fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//console.log(data);
.then(res=>{ 
  if(!res.ok) throw new Error('This country does not exist');
  return res.json()})

 

.then( function(indiaData){
  //const indiaData= JSON.parse(this.response)
 // console.log(indiaData);
    //  const html = `
    // <article class="country">
    //   <img class="country__img" src="${indiaData[0].flag}" />
    //   <div class="country__data">
    //     <h3 class="country__name">${indiaData[0].name}</h3>
    //     <h4 class="country__region">${indiaData[0].region}</h4>
    //     <p class="country__row"><span>👫</span>${(
    //       +indiaData[0].population / 10000000
    //     ).toFixed(1)} people</p>
    //     <p class="country__row"><span>🗣️</span>${indiaData[0].languages[0].name}</p>
    //     <p class="country__row"><span>💰</span>${indiaData[0].currencies[0].name}</p>
    //   </div>
    // </article>
    // `;
    // document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
    addCountryonPage(indiaData)
   // document.querySelector('.countries').style.opacity = 1;
    console.log(indiaData[0]);
    if(indiaData[0].borders.length==0) throw new Error('This country does not have any neighbours')
     return indiaData[0];

})
.then(r=> fetch(`https://restcountries.eu/rest/v2/alpha/${r.borders[0]}`))
.then(response=>{ return response.json()})
.then(function(indiaData1){
  const html1 = `
    <article class="country">
      <img class="country__img" src="${indiaData1.flag}" />
      <div class="country__data">
        <h3 class="country__name">${indiaData1.name}</h3>
        <h4 class="country__region">${indiaData1.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +indiaData1.population / 10000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${indiaData1.languages.name}</p>
        <p class="country__row"><span>💰</span>${indiaData1.currencies.name}</p>
      </div>
    </article>
    `;
    document.querySelector('.countries').insertAdjacentHTML('beforeend', html1);
    

})
 .catch(err=> { document.querySelector('.countries').insertAdjacentHTML('beforeend', err.message)
console.error(err.message);
})
 .finally(t=> document.querySelector('.countries').style.opacity = 1)

}
//getCountryData('japan');

const getNewCountryData= async function (name) {
  try{
  const data= await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  const indiaData= await data.json()
  addCountryonPage(indiaData)
  if(indiaData[0].borders.length==0) return;
   const nData=await fetch(`https://restcountries.eu/rest/v2/alpha/${indiaData[0].borders[0]}`)
   const test= await nData.json()
   const indiaData1=[test];
   addCountryonPage(indiaData1)

   const nData1=await fetch(`https://restcountries.eu/rest/v2/alpha/${indiaData[0].borders[1]}`)
   const test1= await nData1.json()
   const indiaData2=[test1];
   addCountryonPage(indiaData2)

   const nData2=await fetch(`https://restcountries.eu/rest/v2/alpha/${indiaData[0].borders[2]}`)
   const test2= await nData2.json()
   const indiaData3=[test2];
   addCountryonPage(indiaData3)
  }
  catch(err){
    console.error(err.message)

  }
  finally{
    
  }
}

function addCountryonPage(indiaData){
  const html = `
  <article class="country">
    <img class="country__img" src="${indiaData[0].flag}" />
    <div class="country__data">
      <h3 class="country__name">${indiaData[0].name}</h3>
      <h4 class="country__region">${indiaData[0].region}</h4>
      <p class="country__row"><span>👫</span>${(
        +indiaData[0].population / 10000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${indiaData[0].languages[0].name}</p>
      <p class="country__row"><span>💰</span>${indiaData[0].currencies[0].name}</p>
    </div>
  </article>
  `;
  document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
  document.querySelector('.countries').style.opacity = 1
}

//getNewCountryData('germany')