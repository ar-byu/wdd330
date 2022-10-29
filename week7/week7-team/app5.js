import Hikes from './hikes.js';
import {makeCommentButtons} from './comments.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
  makeCommentButtons();
  // const allComments = localStorage.getItem('comments')
  // if (allComments) {
  //   let comments = JSON.parse(allComments)
  //   comments.forEach(comment => {
  //     displayComment(comment)
  //   });
  // }
});

function displayComment(comment) {
  let newParagraph = document.createElement('p')
  newParagraph.textContent = comment.text
  console.log(newParagraph.textContent)
  //commentSection.insertBefore(newParagraph, comment.div)
  
}