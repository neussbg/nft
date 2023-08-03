let cripto = document.querySelector('#cripto');
let main = document.querySelector('#main');
let nav = document.querySelector('#nav');



function getCurrentHeightElements () {
    const navHeight = nav.clientHeight + 90;
    const documentHeight = document.documentElement.clientHeight;
    const rowHeight = 66 + 24;
    const page =  documentHeight - navHeight;
    const result = page / rowHeight
    return Math.floor(result)
  }

  for(let i = 0; i < this.getCurrentHeightElements(); i++){
    main.insertAdjacentHTML('beforeend', `
    <div id="cripto-block" class="cripto-block">
    <span id="cripto" class="cripto">criptoart</span>
    <span id="cripto" class="cripto">criptoart</span>
    <span id="cripto" class="cripto">criptoart</span>
    <span id="cripto" class="cripto">criptoart</span>
  </div>
  `)
}


let clonesProfile = document.querySelectorAll('#clones')
function setClonesPosition(clones){
  clones?.forEach((el,i)=>{
    
    if(i === 2){
      el.style.left = `${(((i + 1) * 10) - 2)}vw`
    }else{
      el.style.left = `${((i + 1) * 10)}vw`
    }

    console.log(el);
  })
}

setClonesPosition(clonesProfile?.[0]?.querySelectorAll('img'))
let footer = document.querySelector('#footer');
let criptoBlock = document.querySelectorAll('#cripto-block');


console.log(footer);
function setFooterImgs(){
  for(let i = 0; i < 4; i++){
    footer.insertAdjacentHTML('beforeend',
    `
    <img src="imgs/logo/relume.svg" alt="" />
    <img src="imgs/logo/webflow.svg" alt="" />
    `)
  }
}

setFooterImgs()
