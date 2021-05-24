//DOM manipuláció: js-sel módosítjuk a html-t és a css-t
// scores a pontszámok
let scores, roundScore, activePlayer;


function init() {
// a két játékos pontszáma, egy 2 elemű tömbben lesz tárolva...
// az első elem az első játékos pontszáma, a második a második játékos pontszáma
  scores = [0, 0];

  // az aktuális játékos kör alatt megszerzett pontjai
  roundScore = 0;

  // mindig az első játékos kezd
  activePlayer = 0;

  // beállítjuk a kezdő értékeket a UI-on user interfacen is

  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;

  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;

  // a játék kezdetekor a kockát eltüntetjük:
  // inline style-t adunk hozzá az img-hez...
  document.querySelector('.dice').style.display = 'none';
  // a gombokat megjelenítjük
  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-hold').style.display = 'block';

  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}

init();
document.querySelector('.btn-new').addEventListener('click', init);

// ha a roll dice gombra kattint a user...
document.querySelector('.btn-roll').addEventListener('click', function () {
  //console.log('rolling the dice...');
  // generálunk egy random számot 1 és 6 között
  let dice = Math.floor(Math.random() * 6 ) + 1;
  //console.log(dice);
  // a 2.  Az eredményt megjelenítjük a UI-on:
  let diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  // string concatenation, string összefűzés
  diceDOM.setAttribute('src', 'dice-'+dice+'.png');

 
  // 4. Ha a játéos 1-est dob, a roundscore értékét elveszti, és a következő játékos jön.

  if (dice !==1) {
    // 3. a dobott értéket kiszámoljuk, majd megjelenítjük a piros <dobozban...
    roundScore = roundScore + dice;

    document.querySelector('#current-'+activePlayer).textContent = roundScore;

    // ha a játékos 1-est dobott:
  } else {
    nextPlayer();
  }
        
});

// létrehozunk egy függvényt, itt most a nextplayert, ezt később bármikor meghívhatom a programban...
function nextPlayer() {
  // roundscore értéket nullázuk a UI-on is:
  document.querySelector('#current-'+activePlayer).textContent = 0;
  // a következő játékos jön
  if(activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  roundScore = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

// ha a hold gombra rányom a játékos
document.querySelector('.btn-hold').addEventListener('click', function () {
  // a játékos megszrzi a kör alatt szerzett pontjait
  // az előző érték plusz a mostani...
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // update the UI
  document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

  // ellenőrizzük, hogy van-e nyertes
  if(scores[activePlayer] >= 20) {
    //játék vége
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

    document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
    // a játék végén a gombokat és a kockát eltüntetjük
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';

    // ha nincs nyertes, akkor a következő játékos jön
  } else {
    nextPlayer();
  }
});