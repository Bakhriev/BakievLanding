function burgerMenu() {
  const burger = document.querySelector('.burger')
  const navigation = document.querySelector('.header__navigation')
  const overlay = document.querySelector('.overlay')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navigation.classList.toggle('active')
    overlay.classList.toggle('active')
  })

  overlay.addEventListener('click', () => {
    burger.classList.remove('active')
    navigation.classList.remove('active')
    overlay.classList.remove('active')
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      burger.classList.remove('active')
      navigation.classList.remove('active')
      overlay.classList.remove('active')
    }
  })
}

burgerMenu()

const dropdownInit = () => {
  const allDropdowns = document.querySelectorAll('[data-dropdown]')

  if (window.innerWidth > 992) {
    document.addEventListener('click', e => {
      let currentDropdown
      if (e.target.closest('[data-dropdown]')) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
      }

      document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
      })
    })
    allDropdowns.forEach(d => {
      d.addEventListener('mouseover', () => {
        d.classList.add('active')
      })
      d.addEventListener('mouseleave', () => {
        d.classList.remove('active')
      })
    })
  } else {
    allDropdowns.forEach(drp => {
      drp.addEventListener('click', () => {
        const subMenu = drp.querySelector('.sub-menu')
        if (!subMenu.style.maxHeight) {
          const allSubMenus = document.querySelectorAll('.sub-menu')
          allSubMenus.forEach(sub => {
            sub.style.maxHeight = ''
          })
          subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
        } else {
          subMenu.style.maxHeight = ''
        }
      })
    })
  }
}
dropdownInit()

// Nav Links
const navLinks = document.querySelectorAll('.duplicate')

if (window.innerWidth > 1024) {
  navLinks.forEach(link => {
    const spans1 = link.querySelectorAll('.v-text-1 span')
    const spans2 = link.querySelectorAll('.v-text-2 span')

    link.addEventListener('mouseover', () => {
      BounceText(spans1)
      BounceText(spans2, 100, 80, 10)
    })

    link.addEventListener('mouseleave', () => {
      spans1.forEach(span => {
        span.style.transform = `translate(0, 0)`
      })
      spans2.forEach(span => {
        span.style.transform = `translate(0, 100%)`
      })
    })
  })
}

function BounceText(
  spans,
  transformRate = 110,
  durationIncrement = 40,
  delayIncrement = 20
) {
  let delay = 0
  let duration = 250
  spans.forEach(span => {
    span.style.transition = `transform ${duration}ms ease-in-out`
    span.style.transitionDelay = `${delay}ms`
    span.style.transform = `translate(0, -${transformRate}%)`

    if (delay < 100) {
      delay += delayIncrement
    } else {
      delay += delayIncrement / 2
    }

    if (duration < 300) {
      duration += durationIncrement
    } else {
      duration += durationIncrement / 2
    }
  })
}

// BLob

const blob = document.querySelector('.blob')
window.onpointermove = event => {
  const { clientX, clientY } = event

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: 'forwards' }
  )
}