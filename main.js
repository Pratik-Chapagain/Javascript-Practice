prompt("Enter your name");
prompt("Enter her name");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore)  + 1; //1-100

if( lovescore > 70 )
  {
    alert("Your love score is " + lovescore + "%\nYou guys are made for each other")
  }
   


if(lovescore > 30 &&  lovescore<=70)
  {
    alert("Your love score is " + lovescore + "%\nYou guys are good together")
  }

  if (lovescore<= 30)
    {
      alert("Your love score is " + lovescore + "%\nYou are not good together")
    }


