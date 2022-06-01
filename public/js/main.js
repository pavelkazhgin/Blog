const cardList = document.querySelector('#cardList')





cardList.addEventListener('click', async (event) => {
  // console.log(event.target)
  event.preventDefault();
  const id = event.target.value;

  if (event.target.id === 'del') {
    // console.log('------->', id)
   
    const response = await fetch(`/delete/${id}`, {
      method:'DELETE',
    });
  
    if (response.ok){
      window.location.pathname = '/'
    }

  } 
  if (event.target.id === 'edit'){
    // const response = await fetch(`/edit/${id}`, {
    //   method:'GET',
    // });
    const id = event.target.value
    // // if (response.ok){
      console.log('хааахаххахахахаха',id)
      window.location = `/edit/${id}`
    // }


  }
  
  
})
