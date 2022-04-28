// getting html elements

const starIcon = [...document.querySelectorAll('.star-icon')];
const emojisEl = document.querySelectorAll('.fa-3x');
const button = document.querySelector('.reset-action');

const colors = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

starIcon.forEach((star,index) => {
    star.addEventListener('click', () => {
        updateRating(index);
    })
})

const updateRating = (index) => {
    starIcon.forEach((star, idx) => {
        if (idx <= index) {
            star.classList.add('active')
        } else {
            star.classList.remove('active')
        }
    });
    emojisEl.forEach((emojiEl, idx) => {
        if (idx === index) {
            emojisEl[idx].classList.add('active-emoji')
            emojisEl[idx].style.color = colors[index];
            
        } else {
            emojisEl[idx].classList.remove('active-emoji')
        }
    })

}
const resetFeedback = () => {
    starIcon.forEach((star) => {
        star.classList.remove('active');
    })
    emojisEl.forEach((emojiEl) => {
        emojiEl.classList.remove('active-emoji');
    })
}

button.addEventListener('click', resetFeedback)