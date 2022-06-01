

const signUp = document.querySelector('#up');
const signIn = document.querySelector('#in');



signUp.addEventListener('submit', async (event) => {
  // console.log('зашел в фетч')
  event.preventDefault();
  const newUser = Object.fromEntries(new FormData(signUp));
  console.log('------->', newUser)
  const response = await fetch('/signUp', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(newUser)
  });

  if (response.ok){
    window.location = '/'
  }
})

signIn.addEventListener('submit', async (event) => {
  // console.log('зашел в фетч')
  event.preventDefault();
  const currentUser = Object.fromEntries(new FormData(signUp));
  // console.log('------->', newUser)
  const response = await fetch('/signIn', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(currentUser)
  });

  if (response.ok){
    window.location = '/'
  }
})


