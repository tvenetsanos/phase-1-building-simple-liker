// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

likerButton()

function likerButton() {
  let likes = document.getElementsByClassName('like')
  for (let element of likes) {
    element.addEventListener('click', () => {
      const heart = element.getElementsByTagName('span')[0]
      const modal = document.getElementById('modal')
      const modalMessage = document.getElementById('modal-message')

      if (heart.textContent === FULL_HEART) {
        heart.textContent = EMPTY_HEART
        heart.classList.remove('activated-heart')
        return EMPTY_HEART
      }

      mimicServerCall()
      .then(() => {
        heart.classList.add('activated-heart')
        heart.textContent = FULL_HEART
      })
      .catch(error => {
        modal.classList.remove('hidden')
        modalMessage.textContent = error 

        setTimeout(function(){ modal.classList.add("hidden"); }, 3000);
      })
    })
  }
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
