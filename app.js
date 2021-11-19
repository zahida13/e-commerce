 const category = document.querySelector('.categories')
const mega_menu = document.querySelector('.mega_menu')
const women = document.querySelector('.women')
const mega_details = document.querySelector('.mega_details')


category.addEventListener('click', () =>{
  mega_menu.classList.add('mega_menu_visible')
})

women.addEventListener('click', () =>{
  mega_details.classList.add('mega_details_visible')
})