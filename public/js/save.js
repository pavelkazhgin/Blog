const save = document.querySelector('#save')

// console.log('-----> save',save)


save.addEventListener('submit', async (event) => {
  // console.log('зашел в фетч')
  event.preventDefault();
  const savePost = Object.fromEntries(new FormData(save));
  console.log('------->', savePost)
  const response = await fetch('/edit/save', {
    method:'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(savePost)
  });

  if (response.ok){
    window.location = '/'
  }
})
