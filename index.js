const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
     
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
      
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
  
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ]
const ancients = document.querySelectorAll('.ancient')
const difficulties = document.querySelectorAll('.difficulty-box')
const shufflebatn = document.querySelector('.shuffle_btn')
const deckbox = document.querySelector('.card_preview2')
ancients.forEach((element,i) => {
 element.addEventListener('click',()=>{
    document.querySelector('.green.stage1').innerHTML = ancientsData[i].firstStage.greenCards
    document.querySelector('.brown.stage1').innerHTML = ancientsData[i].firstStage.brownCards
    document.querySelector('.blue.stage1').innerHTML = ancientsData[i].firstStage.blueCards
    document.querySelector('.green.stage2').innerHTML = ancientsData[i].secondStage.greenCards
    document.querySelector('.brown.stage2').innerHTML = ancientsData[i].secondStage.brownCards
    document.querySelector('.blue.stage2').innerHTML = ancientsData[i].secondStage.blueCards
    document.querySelector('.green.stage3').innerHTML = ancientsData[i].thirdStage.greenCards
    document.querySelector('.brown.stage3').innerHTML = ancientsData[i].thirdStage.brownCards
    document.querySelector('.blue.stage3').innerHTML = ancientsData[i].thirdStage.blueCards 
    ancients.forEach(element2=>element2.classList.remove('active'))
    element.classList.add('active')
    document.querySelector('.card_preview').style.visibility = 'hidden'
 })
})
 difficulties.forEach(element=>{
    element.addEventListener('click',()=>{
        difficulties.forEach(element2=>element2.classList.remove('active'))
        element.classList.add('active')
        document.querySelector('.card_preview').style.visibility = 'hidden'
    })
    
 })
 shufflebatn.addEventListener('click',()=>{
    document.querySelector('.card_preview').style.visibility = 'visible'
 })
 deckbox.addEventListener('click',()=>{
    
 })
