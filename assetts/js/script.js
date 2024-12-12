// Dom Element Selection
const $ = document
const mainElem = $.querySelector('main')
const dropdown = $.querySelector('.dropdown')
const sideNavIcon = $.querySelector('.sideNav-icon')
const sidebarNav = $.querySelector('.sidebar-nav')
const sidebarCloseBtn = $.querySelector('.sidebar-closeBtn')
const scrollTop = $.querySelector('.scrollTop')
const menuIcon = $.querySelector('.menu-icon')
const orderText = $.querySelector('.orderText')
const accordian1PlusIcon = $.querySelectorAll('.accordian1-plusIcon')
const mobileSidebarNav = $.getElementById('mobile-sidebarNav')
const mobileSidebarCloseBtn = $.getElementById('mobile-sidebarCloseBtn')
const mainHeader = $.getElementById('header')
const stickyHeader = $.getElementById('sticky-header')



// Function for show navbar
function showNavbar(event) {
    event.target.lastElementChild.style.opacity = 1
    event.target.lastElementChild.classList.remove('pointer-none')
}

// Function for hide navbar
function hideNavbar(event) {
    event.target.lastElementChild.style.opacity = 0
    event.target.lastElementChild.classList.add('pointer-none')
}

// Function for open sidebar navigation
function openSideNav() {
    sidebarNav.classList.add('open')
    sidebarNav.style.left = 0
}

// Function for close sidebar navigation
function closeSideNav() {
    sidebarNav.classList.remove('open')
    sidebarNav.style.left = '-545px'
}

// Function for open mobile sidebar navigation
function openMobileNav() {
    // mobileSidebarNav.style.opacity = '0.70' 
    mobileSidebarNav.style.transform = 'translateX(0)'
    menuIcon.style.display = 'none'
    document.body.style.position = 'fixed'
}

// Function for close mobile sidebar navigation
function closeMobileNav() {
    mobileSidebarNav.style.transform = 'translateX(101%)'
    menuIcon.style.display = 'flex'
    document.body.style.position = ''
}

// Function when window scroll
function scrollFunc(event) {
    let position = Math.ceil(window.scrollY)

    if (position < 150) {
        stickyHeader.style.opacity = 0
        stickyHeader.style.display = 'none'
        stickyHeader.style.top = '-100px'
        scrollTop.style.bottom = '100%'
    } else if (position >= 150) {
        stickyHeader.style.opacity = 1
        stickyHeader.style.display = 'flex'
        stickyHeader.style.top = 0
        scrollTop.style.bottom = '8%'
    }
}

// Function when click on go top button
function scrolltoTop(event) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// Function for change form
function changeForm(event) {
    let formText = event.target.firstElementChild.innerHTML
    orderText.innerHTML = formText
}

// Function for open dropdown
function openDropdown(event) {

    event.target.nextElementSibling.classList.toggle('rotating1')
    let menuContent = event.target.parentElement.parentElement.nextElementSibling

    if (menuContent.classList.contains('hidden')) {
        menuContent.classList.remove('hidden')
    } else {
        menuContent.classList.add('hidden')
    }
}

// Function when click on dropdown in mobile sidebar
function openMobileDropdown(event) {

    event.target.parentElement.classList.toggle('rotating2')
    let menuContent = event.target.parentElement.parentElement.nextElementSibling

    if (menuContent.classList.contains('hidden')) {
        menuContent.classList.remove('hidden')
    } else {
        menuContent.classList.add('hidden')
    }
}


// all addEventListeners
window.addEventListener('scroll', scrollFunc)
sideNavIcon.addEventListener('click', openSideNav)
sidebarCloseBtn.addEventListener('click', closeSideNav)
scrollTop.addEventListener('click', scrolltoTop)
menuIcon.addEventListener('click', openMobileNav)
mobileSidebarCloseBtn.addEventListener('click', closeMobileNav)