document.getElementById('text').innerHTML = 'Quote of the Day';
document.getElementById('text2').innerHTML= 'Press the button below to recieve a random quote!';
document.getElementById('btn').innerHTML = 'New Quote'
function getText(){
    let paragraphs =[
           "Resentment is like drinking poison and waiting for your enemies to die.",
           "The best revenge is massive success.",
           "It's not what happens to you, but how you react to it that matters.",
           "You miss 100% of the shots you don't take.",
    ];
        let random = Math.floor(Math.random() * paragraphs.length);
        /*
          math.floor ====>  يتولد عدد صحيح 
          math.random====> تولد عدد عشوائي
          بيتم استخدام math.floor , math.random  في ارجاع اعدا صحيحة عشوائية
         */
     document.getElementById('newPragraphe').innerHTML= paragraphs[random]
    }




