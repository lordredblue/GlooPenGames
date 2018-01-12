//store score on user's end
function begin()
{
  if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      sessionStorage.setItem("score", 0);
      //sessionStorage.setItem("neg", 0);
  } else {
      console.log("No can do, your browser does not support web storage, sorry!")
  }
};

function storeRoom(msg)
{
  if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      sessionStorage.setItem("room", msg);
  } else {
      console.log("No can do, your browser does not support web storage, sorry!");
  }
};

function getRoom(msg)
{
  return sessionStorage.getItem("room",msg);

};

console.log(sessionStorage.score);
//update the end based off of score
function updateEnd()
{
  if (Number(sessionStorage.score) > 0)
  {
    d = document.getElementById("next");
    p = document.createElement('a');
    p.href = 'end1.html';
    p.innerHTML = "Next";
    d.appendChild(p);
  }
  else
  {
    //set link to end2
    d = document.getElementById("next");
    p = document.createElement('a');
    p.href = 'end2.html';
    p.innerHTML = "Next";
    d.appendChild(p);
  }
  return true
};

//when the user makes a positive choice we add a point
function updatePos()
{
  sessionStorage.score = Number(sessionStorage.score) + 1;
  console.log(sessionStorage.score);
};

//similarly, a negative choice subtracts one point
function updateNeg()
{
  sessionStorage.score = Number(sessionStorage.score) - 1;
  console.log(sessionStorage.score);
};

//similarly, a neutral choice adds half a point
function updateNeutral()
{
  sessionStorage.score = Number(sessionStorage.score) + 0.5;
  console.log(sessionStorage.score);
}

function firstChoice()
{
  const p1 = document.getElementById('p1');
  const n1 = document.getElementById('n1');
  const neu1 = document.getElementById('neu1');
  p1.addEventListener('click', updatePos);
  n1.addEventListener('click', updateNeg);
  neu1.addEventListener('click', updateNeutral);
};

function secondChoice()
{
  const p2 = document.getElementById('p2');
  const n2 = document.getElementById('n2');
  const neu2 = document.getElementById('neu2');
  p2.addEventListener('click', updatePos);
  n2.addEventListener('click', updateNeg);
  neu2.addEventListener('click', updateNeutral);
};

function thirdChoice()
{
  const p3 = document.getElementById('p3');
  const n3 = document.getElementById('n3');
  const neu3 = document.getElementById('neu3');
  p3.addEventListener('click', updatePos);
  n3.addEventListener('click', updateNeg);
  neu3.addEventListener('click', updateNeutral);
};

function toggleRudeConvo()
{
  const here = document.getElementById("rudeConvo");
  const x = document.getElementById("rudeConvo").innerHTML;
  const p = document.getElementById("freakOut");
  const bar = document.getElementById("warp");

  const m1 = "click to continue";
  const m2 = "Hey doll face, I've been calling you,"
  const m3 = "Is something wrong, sir?"
  const m4 = "Do your parents still send you money?"
  const m5 = "I-I'm sorry...?"
  const m6 = "I just can't imagine how you could make a living if you live off of tips. My food may as well be freezing. Are you gonna fix this?";

  if (x == m1)
  {
    here.innerHTML = m2;
    bar.src = "bar_with_customer.jpg"
    var css = '#warp:hover{ content:url("warped_bar.jpg") }';
    var style = document.createElement('style');

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style)
  }
  if(x == m2)
  {

  here.innerHTML = m3;
  here.style.fontFamily = "'Indie Flower', cursive";
  }
  if (x == m3)
  {
    here.innerHTML = m4;
    here.style.fontFamily = "'Fjalla One', sans-serif";
  }
  if (x == m4)
  {
    here.innerHTML = m5;
    here.style.fontFamily = "'Indie Flower', cursive";
  }
  if (x == m5)
  {
    here.innerHTML = m6;
    here.style.fontFamily = "'Fjalla One', sans-serif";
  }
  if (x == m6)
  {
    here.parentNode.removeChild(here);
    p.innerHTML = "I feel my insides burning. I need to get away. <br> I cannot stay here. <br> My whole body is moving, but it’s not me causing it. I’m trembling violently and I can’t do anything about it.";
    var a = document.createElement('a');
    var linkText = document.createTextNode("Continue");
    a.appendChild(linkText);
    a.href = "workWithChoices.html";
    document.body.appendChild(a);
  }
};

function p2toggleRudeConvo()
{
  const here = document.getElementById("rudeConvo");
  const x = document.getElementById("rudeConvo").innerHTML;
  const p = document.getElementById("freakOut");
  const bar = document.getElementById("warp");

  const m1 = "click to continue";
  const m2 = "Hey doll face, I've been calling you,"
  const m3 = "Is something wrong, sir?"
  const m4 = "Do your parents still send you money?"
  const m5 = "I-I'm sorry...?"
  const m6 = "I just can't imagine how you could make a living if you live off of tips. My food may as well be freezing. Are you gonna fix this?";

  if (x == m1)
  {
    here.innerHTML = m2;
    bar.src = "bar_with_customer.jpg"
    var css = '#warp:hover{ content:url("warped_bar.jpg") }';
    var style = document.createElement('style');

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style)
  }
  if(x == m2)
  {

  here.innerHTML = m3;
  here.style.fontFamily = "'Indie Flower', cursive";
  }
  if (x == m3)
  {
    here.innerHTML = m4;
    here.style.fontFamily = "'Fjalla One', sans-serif";
  }
  if (x == m4)
  {
    here.innerHTML = m5;
    here.style.fontFamily = "'Indie Flower', cursive";
  }
  if (x == m5)
  {
    here.innerHTML = m6;
    here.style.fontFamily = "'Fjalla One', sans-serif";
  }
  if (x == m6)
  {
    here.parentNode.removeChild(here);
    p.innerHTML = "I feel my insides burning. I need to get away. <br> I cannot stay here. <br> My whole body is moving, but it’s not me causing it. I’m trembling violently and I can’t do anything about it.";
    var a = document.createElement('a');
    var linkText = document.createTextNode("Continue");
    a.appendChild(linkText);
    a.href = "p2workWithChoices.html";
    document.body.appendChild(a);
  }
};

function toggleCalmDown() {
  const here = document.getElementById("calmDown");
  const x = document.getElementById("calmDown").innerHTML;
  const p = document.getElementById("calmText");
  const options = document.getElementById("options");
  const hid = document.getElementById("hid");
  const b = document.getElementById("panic");
  const escape = document.getElementById("escape");
  const m1 = "Continue";
  const m2 = "Lila, are you alright?";

  if (x == m1)
  {
    escape.parentNode.removeChild(escape);
    b.style.backgroundColor = "#65546B";
    here.innerHTML = m2;
    here.style.fontFamily = "'Caveat', cursive";
    here.style.fontSize = "1em";

    hid.style.visibility = "visible";
    p.innerHTML = "Somehow I am sitting down now.<br>Someone brought me here.<br>My face and hands feel soaked with tears and sweat.<br>Even now I cannot remain still. No part of my body can. My manager is in front of me.";

    options.style.visibility = "visible";
  }
};

function toggleText()
{
  const p = document.getElementById("peace");
  p.innerHTML = "I feel the heaviness in my chest subside faintly. Maybe this is what I needed after all.";
  const a = document.createElement('a');
  const linkText = document.createTextNode("Continue");
  a.appendChild(linkText);
  a.href = "party.html";
  document.body.appendChild(a);
}

function p2toggleText()
{
  const p = document.getElementById("peace");
  p.innerHTML = "I feel the heaviness in my chest subside faintly. Maybe this is what I needed after all.";
  const a = document.createElement('a');
  const linkText = document.createTextNode("Continue");
  a.appendChild(linkText);
  a.href = "p2party.html";
  document.body.appendChild(a);
}

function toggleText2()
{
  const p = document.getElementById("lies");
  p.innerHTML = "I cannot trust those words. I push everything back inside me and carry on as well as I can.";
  const a = document.createElement('a');
  const linkText = document.createTextNode("Continue");
  a.appendChild(linkText);
  a.href = "party.html";
  document.body.appendChild(a);
}

function p2toggleText2()
{
  const p = document.getElementById("lies");
  p.innerHTML = "I cannot trust those words. I push everything back inside me and carry on as well as I can.";
  const a = document.createElement('a');
  const linkText = document.createTextNode("Continue");
  a.appendChild(linkText);
  a.href = "p2party.html";
  document.body.appendChild(a);
}