   const board = document.getElementById('board')
   const SQURES_NUMBERS = 440
   const colors = ['#e74c3c', '#8e44ad', '#3488db', '#e67e22', '#2ecc71']

   for(let i = 0; i < SQURES_NUMBERS; i++) {
      const square = document.createElement('div')
      square.classList.add('square')

      
   square.addEventListener('mouseover', () => {
      setColor(square)
   })

   square.addEventListener('mouseout', () => {
      removeColor(square)
   })


   board.append(square)
   }

   
   function setColor(element) {
      const color = getRandomColor()
      element.style.backgroundColor = color
      element.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}, 0 0 10px ${color}`
   }

   function removeColor(element) {
      element.style.backgroundColor = '#1d1d1d'
      element.style.boxShadow = `0 0 10px #000`
   }

   function getRandomColor() {
      const index = Math.floor(Math.random() * colors.length)
      return colors[index]
   }