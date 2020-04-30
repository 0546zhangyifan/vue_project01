import Vue from 'vue'

const gotop = Vue.directive('gotop', {
  inserted: (el) => {
    el.style.display = 'none'
    const oDiv = el.parentElement
    oDiv.addEventListener('scroll', () => {
      if (oDiv.scrollTop >= oDiv.clientHeight) {
        el.style.display = 'inline-block'
      } else {
        el.style.display = 'none'
      }
    })
  }
})

export default gotop
