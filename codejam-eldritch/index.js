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
  const bluecardsData = [
    {
      id: 'blue1',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
 
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
 
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
    
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
     
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
     
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
    
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
 
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
 
      difficulty: 'normal',
      color:'blue'
    },
  ]
  const browncardsData = [
    {
      id: 'brown1',
       
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
     
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
     
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
  
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
   
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
 
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
    
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
 
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
   
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
  
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
     
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
    
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
 
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
    
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
    
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
   
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
   
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
 
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
 
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
 
      difficulty: 'easy',
      color:'brown'
    },
  ]
  const greencardsData = [
    {
      id: 'green1',
 
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
     
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
     
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
 
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
 
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
    
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
 
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
  
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
 
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
 
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
   
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
 
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
 
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
  
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
  
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
  
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
    
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
 
      difficulty: 'easy',
      color:'green'
    },
  ]
  console.log("Все пункты выполнены 100/100")
const ancients = document.querySelectorAll('.ancient')
const difficulties = document.querySelectorAll('.difficulty-box')
const shufflebatn = document.querySelector('.shuffle_btn')
const deckbox = document.querySelector('.card_preview2')
var currentstage = 0;
var deckresult = []
var colorresult = []
var allowedblue =[]
var allowedgreen = []
var allowedbrown = []
var reshuffle = false
var colorarray = ['green','brown','blue']
const difficultiesar = ['Very Easy','Easy','Normal','Hard','Very Hard']
var curdifficulty = 'Normal'
var stagearray = [
      {id : 'Firststage',
      greenCards: 0,
      blueCards: 0,
      brownCards: 0,
    },
    {id : 'Secondstage',
      greenCards: 0,
      blueCards: 0,
      brownCards: 0,
       },
       {id : 'Thirdstage',
      greenCards: 0,
      blueCards: 0,
      brownCards: 0,
    } 
]
function updateboard(){
  document.querySelector('.green.stage1').innerHTML = stagearray[0].greenCards
  document.querySelector('.brown.stage1').innerHTML = stagearray[0].brownCards
  document.querySelector('.blue.stage1').innerHTML = stagearray[0].blueCards
  document.querySelector('.green.stage2').innerHTML =  stagearray[1].greenCards
  document.querySelector('.brown.stage2').innerHTML =  stagearray[1].brownCards
  document.querySelector('.blue.stage2').innerHTML =  stagearray[1].blueCards
  document.querySelector('.green.stage3').innerHTML =  stagearray[2].greenCards
  document.querySelector('.brown.stage3').innerHTML = stagearray[2].brownCards
  document.querySelector('.blue.stage3').innerHTML =  stagearray[2].blueCards
}
function preshuffle(){
  ancients.forEach((element,i)=>{
    if (element.classList.contains('active')){
      document.querySelector('.green.stage1').innerHTML = ancientsData[i].firstStage.greenCards
      document.querySelector('.brown.stage1').innerHTML = ancientsData[i].firstStage.brownCards
      document.querySelector('.blue.stage1').innerHTML = ancientsData[i].firstStage.blueCards
      document.querySelector('.green.stage2').innerHTML = ancientsData[i].secondStage.greenCards
      document.querySelector('.brown.stage2').innerHTML = ancientsData[i].secondStage.brownCards
      document.querySelector('.blue.stage2').innerHTML = ancientsData[i].secondStage.blueCards
      document.querySelector('.green.stage3').innerHTML = ancientsData[i].thirdStage.greenCards
      document.querySelector('.brown.stage3').innerHTML = ancientsData[i].thirdStage.brownCards
      document.querySelector('.blue.stage3').innerHTML = ancientsData[i].thirdStage.blueCards 
     stagearray[0].greenCards = ancientsData[i].firstStage.greenCards
     stagearray[0].brownCards = ancientsData[i].firstStage.brownCards
     stagearray[0].blueCards = ancientsData[i].firstStage.blueCards
     stagearray[1].greenCards = ancientsData[i].secondStage.greenCards
     stagearray[1].brownCards = ancientsData[i].secondStage.brownCards
     stagearray[1].blueCards = ancientsData[i].secondStage.blueCards
     stagearray[2].greenCards = ancientsData[i].thirdStage.greenCards
     stagearray[2].brownCards = ancientsData[i].thirdStage.brownCards
     stagearray[2].blueCards = ancientsData[i].thirdStage.blueCards 
    }
  })  
  allowedblue =[]
  allowedbrown = []
  allowedgreen = []
  if (curdifficulty =='Normal'){
  for(let i =0 ;i<bluecardsData.length;i++){
  allowedblue.push(bluecardsData[i].id)
  }
  for(let i =0 ;i<greencardsData.length;i++){
  allowedgreen.push(greencardsData[i].id)
  }
  for(let i =0 ;i<browncardsData.length;i++){
  allowedbrown.push(browncardsData[i].id)
  }
  }
  else if(curdifficulty =='Easy') {
    for(let i =0 ;i<bluecardsData.length;i++){
      if (bluecardsData[i].difficulty !='hard'){
      allowedblue.push(bluecardsData[i].id)}
      }
      for(let i =0 ;i<greencardsData.length;i++){
        if (greencardsData[i].difficulty !='hard'){
      allowedgreen.push(greencardsData[i].id)}
      }
      for(let i =0 ;i<browncardsData.length;i++){
        if (browncardsData[i].difficulty !='hard'){
      allowedbrown.push(browncardsData[i].id)}
      }
  }
  else if (curdifficulty == 'Very Easy'){
    for(let i =0 ;i<bluecardsData.length;i++){
      if (bluecardsData[i].difficulty =='easy'){
      allowedblue.push(bluecardsData[i].id)}
      }
      for(let i =0 ;i<greencardsData.length;i++){
        if (greencardsData[i].difficulty =='easy'){
      allowedgreen.push(greencardsData[i].id)}
      }
      for(let i =0 ;i<browncardsData.length;i++){
        if (browncardsData[i].difficulty =='easy'){
      allowedbrown.push(browncardsData[i].id)}
      }
      if(allowedblue.length<(stagearray[0].blueCards+stagearray[1].blueCards+stagearray[2].blueCards)){
        while(allowedblue.length<(stagearray[0].blueCards+stagearray[1].blueCards+stagearray[2].blueCards)){
          let f = Math.floor(Math.random()*bluecardsData.length)  
            if (bluecardsData[f].difficulty =='normal'&& !allowedblue.includes(bluecardsData[f].id)){
              allowedblue.push(bluecardsData[f].id)
               }        
        }
      }
      if(allowedbrown.length<(stagearray[0].brownCards+stagearray[1].brownCards+stagearray[2].brownCards)){
         
        while(allowedbrown.length<(stagearray[0].brownCards+stagearray[1].brownCards+stagearray[2].brownCards)){
          let f = Math.floor(Math.random()*browncardsData.length)  
            if (browncardsData[f].difficulty =='normal'&& !allowedbrown.includes(browncardsData[f].id)){
          allowedbrown.push(browncardsData[f].id)
               }        
        }
    }
    if(allowedgreen.length<(stagearray[0].greenCards+stagearray[1].greenCards+stagearray[2].greenCards)){
      while(allowedgreen.length<(stagearray[0].greenCards+stagearray[1].greenCards+stagearray[2].greenCards)){
        let f = Math.floor(Math.random()*greencardsData.length)  
          if (greencardsData[f].difficulty =='normal'&& !allowedgreen.includes(greencardsData[f].id)){
            allowedgreen.push(greencardsData[f].id)
             }        
      }
  }
  }
  else if (curdifficulty =='Hard'){
    for(let i =0 ;i<bluecardsData.length;i++){
      if (bluecardsData[i].difficulty !='easy'){
      allowedblue.push(bluecardsData[i].id)}
      }
      for(let i =0 ;i<greencardsData.length;i++){
        if (greencardsData[i].difficulty !='easy'){
      allowedgreen.push(greencardsData[i].id)}
      }
      for(let i =0 ;i<browncardsData.length;i++){
        if (browncardsData[i].difficulty !='easy'){
      allowedbrown.push(browncardsData[i].id)}
      }
  }
  else if (curdifficulty == 'Very Hard'){
    for(let i =0 ;i<bluecardsData.length;i++){
      if (bluecardsData[i].difficulty =='hard'){
      allowedblue.push(bluecardsData[i].id)}
      }
      for(let i =0 ;i<greencardsData.length;i++){
        if (greencardsData[i].difficulty =='hard'){
      allowedgreen.push(greencardsData[i].id)}
      }
      for(let i =0 ;i<browncardsData.length;i++){
        if (browncardsData[i].difficulty =='hard'){
      allowedbrown.push(browncardsData[i].id)}
      }
      if(allowedblue.length<(stagearray[0].blueCards+stagearray[1].blueCards+stagearray[2].blueCards)){
        while(allowedblue.length<(stagearray[0].blueCards+stagearray[1].blueCards+stagearray[2].blueCards)){
          let f = Math.floor(Math.random()*bluecardsData.length)  
            if (bluecardsData[f].difficulty =='normal'&& !allowedblue.includes(bluecardsData[f].id)){
              allowedblue.push(bluecardsData[f].id)
               }        
        }
      }
      if(allowedbrown.length<(stagearray[0].brownCards+stagearray[1].brownCards+stagearray[2].brownCards)){
         
        while(allowedbrown.length<(stagearray[0].brownCards+stagearray[1].brownCards+stagearray[2].brownCards)){
          let f = Math.floor(Math.random()*browncardsData.length)  
            if (browncardsData[f].difficulty =='normal'&& !allowedbrown.includes(browncardsData[f].id)){
          allowedbrown.push(browncardsData[f].id)
               }        
        }
    }
    if(allowedgreen.length<(stagearray[0].greenCards+stagearray[1].greenCards+stagearray[2].greenCards)){
      while(allowedgreen.length<(stagearray[0].greenCards+stagearray[1].greenCards+stagearray[2].greenCards)){
        let f = Math.floor(Math.random()*greencardsData.length)  
          if (greencardsData[f].difficulty =='normal'&& !allowedgreen.includes(greencardsData[f].id)){
            allowedgreen.push(greencardsData[f].id)
             }        
      }
  }
  }
}
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
   stagearray[0].greenCards = ancientsData[i].firstStage.greenCards
   stagearray[0].brownCards = ancientsData[i].firstStage.brownCards
   stagearray[0].blueCards = ancientsData[i].firstStage.blueCards
   stagearray[1].greenCards = ancientsData[i].secondStage.greenCards
   stagearray[1].brownCards = ancientsData[i].secondStage.brownCards
   stagearray[1].blueCards = ancientsData[i].secondStage.blueCards
   stagearray[2].greenCards = ancientsData[i].thirdStage.greenCards
   stagearray[2].brownCards = ancientsData[i].thirdStage.brownCards
   stagearray[2].blueCards = ancientsData[i].thirdStage.blueCards 
    ancients.forEach(element2=>element2.classList.remove('active'))
    element.classList.add('active')
    document.querySelector('.card_preview').style.visibility = 'hidden'
    document.querySelector('.card_preview1').style.background = 'none'
    document.querySelector('.deck_container').style.visibility = 'hidden'
    document.querySelector('.deck_preview').style.visibility = 'hidden'
    document.querySelector('.difficulty_container').style.visibility = 'visible'
    difficulties.forEach(el=>el.classList.remove('active')) 
 })
})
 difficulties.forEach((element,i)=>{
    element.addEventListener('click',()=>{
        difficulties.forEach(element2=>element2.classList.remove('active'))
        element.classList.add('active')
        curdifficulty = difficultiesar[i]
        document.querySelector('.card_preview').style.visibility = 'hidden'
        document.querySelector('.card_preview1').style.background = 'none'
        document.querySelector('.card_preview2').style.background = 'url(../codejam-eldritch/assets/mythicCardBackground.png)'
        document.querySelector('.card_preview2').style.border ='none'
        currentstage = 0
        colorarray = ['green','brown','blue']
        preshuffle()
        document.querySelector('.deck_container').style.visibility = 'visible'
    })
    
 })
 shufflebatn.addEventListener('click',()=>{
    document.querySelector('.card_preview').style.visibility = 'visible'
    currentstage = 0
    colorarray = ['green','brown','blue']
     preshuffle()
     document.querySelector('.card_preview2').style.background = 'url(../codejam-eldritch/assets/mythicCardBackground.png)'
     document.querySelector('.card_preview2').style.border ='none'
     document.querySelector('.card_preview1').style.background = 'none'
     reshuffle  = false
     deckresult = []
    colorresult = []
    document.querySelector('.deck_preview').style.visibility = 'visible'
 })
 var i = 0;
 deckbox.addEventListener('click',()=>{
 if( reshuffle ===true ){
  preshuffle()
  document.querySelector('.card_preview2').style.background = 'url(../codejam-eldritch/assets/mythicCardBackground.png)'
  document.querySelector('.card_preview2').style.border ='none'
  document.querySelector('.card_preview1').style.background = `url(../codejam-eldritch/assets/MythicCards/${colorresult[i]}/${deckresult[i]}.png)`;
  document.querySelector('.card_preview1').style.backgroundSize ='276px 407px'
   
  i++
 
  if (i==deckresult.length){
    i=0
    document.querySelector('.card_preview2').style.background = 'none'
    document.querySelector('.card_preview2').style.border ='1px solid red'
  }
   
}
 else {
    
  if (stagearray[currentstage].blueCards == 0 && stagearray[currentstage].greenCards == 0 && stagearray[currentstage].brownCards == 0 && currentstage!=2){
    colorarray = []
    currentstage = currentstage+1
    if (stagearray[currentstage].greenCards >0) {colorarray.push('green')}
    if (stagearray[currentstage].brownCards >0) {colorarray.push('brown')}
    if (stagearray[currentstage].blueCards >0) {colorarray.push('blue')}
  }
  else if (stagearray[currentstage].blueCards == 0 && stagearray[currentstage].greenCards == 0 && stagearray[currentstage].brownCards == 0 && currentstage == 2){
    currentstage = 0
    colorarray = ['green','brown','blue']
    preshuffle()
    document.querySelector('.card_preview2').style.background = 'url(../codejam-eldritch/assets/mythicCardBackground.png)'
    document.querySelector('.card_preview2').style.border ='none'
    reshuffle = true
     
  }
  else if ((stagearray[2].blueCards == 1 && stagearray[2].greenCards == 0 && stagearray[2].brownCards == 0)||(stagearray[2].blueCards == 0 && stagearray[2].greenCards == 1 && stagearray[2].brownCards == 0)||(stagearray[2].blueCards == 0 && stagearray[2].greenCards == 0 && stagearray[2].brownCards == 1))
  {
    document.querySelector('.card_preview2').style.background = 'none'
    document.querySelector('.card_preview2').style.border ='1px solid red'
    document.querySelector('.deck_preview').style.visibility = 'hidden' 
    alert('Игра окончена.\nЧтобы собрать новую колоду нажмите Shuffle или выберите другого Древнего или сложность.\nCечас вы в режиме просмотра колоды\nДля просмотра нажмите на пустую колоду')
    
  }
  if(stagearray[currentstage].blueCards == 0 && colorarray.includes('blue')){
    for(let i = 0;i<colorarray.length;i++){
      if (colorarray[i] == 'blue'){
        colorarray.splice(i,1)
      }
    }
  }
  else if (stagearray[currentstage].greenCards == 0 && colorarray.includes('green') ){
    for(let i = 0;i<colorarray.length;i++){
      if (colorarray[i] == 'green'){
        colorarray.splice(i,1)
      }
    }
  }
  else if (stagearray[currentstage].brownCards == 0 && colorarray.includes('brown')){
    for(let i = 0;i<colorarray.length;i++){
      if (colorarray[i] == 'brown'){
        colorarray.splice(i,1)
      }
    }
  }
  let curcolor = colorarray[Math.floor(Math.random()*colorarray.length)]  
   let curcard = (curcolor =='green'?allowedgreen:curcolor == 'brown'?allowedbrown:allowedblue)[Math.floor(Math.random()*(curcolor =='green'?allowedgreen:curcolor == 'brown'?allowedbrown:allowedblue).length)]
   curcolor == 'blue'?stagearray[currentstage].blueCards--:curcolor == 'brown'?stagearray[currentstage].brownCards--:curcolor=='green'?stagearray[currentstage].greenCards--:console.log(curcolor)
   updateboard()
   for(let i = 0;i<(curcolor =='green'?allowedgreen:curcolor == 'brown'?allowedbrown:allowedblue).length;i++){
          if ( (curcolor =='green'?allowedgreen:curcolor == 'brown'?allowedbrown:allowedblue)[i] === curcard) { 
    
            (curcolor =='green'?allowedgreen:curcolor == 'brown'?allowedbrown:allowedblue).splice(i, 1); 
        }
    
    }
   document.querySelector('.card_preview1').style.background = `url(../codejam-eldritch/assets/MythicCards/${curcolor}/${curcard}.png)`;
   document.querySelector('.card_preview1').style.backgroundSize ='276px 407px'
   deckresult.push(curcard)
   colorresult.push(curcolor)
    
   
 
 }
})