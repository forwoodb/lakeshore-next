// ********** Navigation **********
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector("nav").classList.add("scrolled");
  } else {
    document.querySelector("nav").classList.remove("scrolled");
  }
}

// // ********** Dark Mode **********

// let dot = document.querySelector('.dot')
// let darkMode = localStorage.getItem('darkMode')

// dot.addEventListener('click', function() {
//     const body = document.querySelector('body');
//     let darkMode = localStorage.getItem('darkMode')

//     if (darkMode !== 'active') {
//         body.classList.add('dark');
//         localStorage.setItem('darkMode', 'active')
//     } else {
//         body.classList.remove('dark');
//         localStorage.setItem('darkMode', null)
//     }
// })

// // ********** Tabbed Table **********

// const tabs = document.querySelectorAll('.tab')
// const basic = document.querySelectorAll('.basic')
// const macros = document.querySelectorAll('.macros')
// const cells = document.querySelectorAll('th, td')

// cells.forEach(data => {
//     console.log(data.className);
// });

// tabs.forEach(tab => {
//     tab.addEventListener('click', function() {
//         tabs.forEach(tab => {
//             tab.classList.remove('active-tab')
//         });
//         tab.classList.add('active-tab')
//         // console.log(tab.className);
//         if (tab.className === 'tab tab-basic active-tab') {
//             cells.forEach(cell => {
//                 cell.classList.remove('active')
//             });

//             basic.forEach(data => {
//                 data.classList.add('active')
//                 // console.log(data.className);
//                 // console.log('Hello');
//             });
//         } else if (tab.className === 'tab tab-macros active-tab') {
//             cells.forEach(cell => {
//                 cell.classList.remove('active')
//             });

//             macros.forEach(data => {
//                 data.classList.add('active')
//                 // console.log(data.className);
//                 // console.log('Hello');
//             });
//         }
//     })
// });
