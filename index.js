function rolldice(){
    const numofDice=document.getElementById('numofDice').value;
    const diceResult=document.getElementById('diceResult');
    const diceImages=document.getElementById('diceImages');
    const values=[];
    const images=[];
    for(let i=0;i<numofDice;i++){
        const value=Math.floor(Math.random()*6)+1 ;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dice ${value}">`);


    }

    diceResult.textContent=`You got ${values.join(' + ')} = ${values.reduce((a,b)=>a+b,0)}`;
    diceImages.innerHTML=images.join('');
}