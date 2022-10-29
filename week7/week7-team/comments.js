const commentDivs = document.querySelectorAll('.comments')
const commentContent = document.getElementsByClassName('add-comment')

export function makeCommentButtons() {
    
    for (let i = 0; i < commentDivs.length; i++) {
        commentDivs[i].setAttribute('id', i)
        commentContent[i].setAttribute('id', i)
    }

    commentDivs.forEach(div => {
        let submitButton = document.createElement('button')
        submitButton.innerHTML = 'Submit Comment'
        
        submitButton.addEventListener('click', () => {
            let comment = commentContent[div.id].value
            console.log(comment)
            let newComment = document.createElement('p')
            newComment.textContent = comment
            div.insertBefore(newComment, commentContent[div.id])
            let storedComment = {
                text: newComment.textContent,
                div: div.id
            }
            storeComment(storedComment)
        })
        
        div.appendChild(submitButton)
    })
}

function storeComment(comment) {
    let comments = JSON.parse(localStorage.getItem('comments') || '[]')
    comments.push(comment)
    console.log(comments)
    localStorage.setItem('comments', JSON.stringify(comments))
}