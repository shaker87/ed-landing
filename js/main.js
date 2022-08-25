window.onscroll = function () {
    scrollFunction()
    scrollTopFunc()
}
function scrollFunction() {
    const sn = document.getElementById("sticky_nav");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        sn.style.background = 'rgba(84,165,239,1)'
        sn.style.position = 'fixed'
        sn.style.paddingTop = '10px'
        sn.style.paddingBottom = '10px'

    }
    else {
        sn.style.position = 'relative'
        sn.style.background = 'transparent'
        sn.style.top = '0'
        sn.style.paddingTop = '15px'
        sn.style.paddingBottom = '15px'
    }
}
