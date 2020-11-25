var form1;
var formSTATE = 1;

function setup() {
    
  createCanvas(800,800);
  form1 = new Form();
  database = firebase.database();

}

function draw() {
  
  background("#F4A03F")
  form1.display();

  if(formSTATE === 2){
    fill("black")
    textSize(23)
    text("THANK YOU FOR YOUR CONTRIBUTION TO THE SURVEY.",25,200);
    text("YOUR RESPONSE HAS BEEN RECORDED BY TEAM ANIMAL HEALTH",25,250)
  }

}