
 let elInp = document.querySelector('.inp')
 let elList = document.querySelector('.list')
 let elUInp = document.querySelector('.u_inp')
 let data = []
 if(window.localStorage.getItem('locData')){
  data = JSON.parse(window.localStorage.getItem('locData'))
 }
 function fnAdd(){
 data.push(elInp.value)
 window.localStorage.setItem('locData',JSON.stringify(data))
 elInp.value = ''
 fnMapper(JSON.parse(window.localStorage.getItem('locData')))
}

function fnMapper(data){
  elList.innerHTML = ''
    data.map((item, index)=>{
    let newLi = document.createElement('li')
    newLi.innerHTML = `  <div class="d-flex m-5 ">
    <p>${item}</p>
    <button class="btn m-1 btn-danger" onclick="fnDel(${index})"> delete</button>
    <button onclick="fnUpdate(${index})" class="btn btn-info m-1 "  data-bs-toggle="modal" data-bs-target="#exampleModal">update</button>
  </div>`
    elList.appendChild(newLi)
   }) 
  }

  fnMapper(JSON.parse(window.localStorage.getItem('locData')))

  function fnDel(id) {
        let data = JSON.parse(window.localStorage.getItem('locData'))
    let filData = data.filter((item, index)=> index != id)
    window.localStorage.setItem('locData', JSON.stringify(filData))
    fnMapper(JSON.parse(window.localStorage.getItem('locData')))
    
  }

  function fnUpdate(id){
   window.localStorage.setItem('id', id)
   elUInp.value = JSON.parse(window.localStorage.getItem('locData'))[id]
    
  }

  function fnAddUpdated() {
      let data = JSON.parse(window.localStorage.getItem('locData'))

      data[ window.localStorage.getItem('id')] = elUInp.value
     
      window.localStorage.setItem('locData', JSON.stringify(data))
      fnMapper(JSON.parse(window.localStorage.getItem('locData')))
      }