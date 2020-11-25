class Form{

    constructor(){
        this.title = createElement('h3')

        this.instruction = createElement('h4')

        this.address = createInput('TYPE YOUR EMAIL ID');
        this.person = createInput('TYPE YOUR NAME');

        this.question1 = createElement('h4')
        this.option11 = createElement('h4')
        this.option12 = createElement('h4')
        this.answer1 = createInput();

        this.question2 = createElement('h4')
        this.option21 = createElement('h4')
        this.option22 = createElement('h4')
        this.answer2 = createInput();

        this.question3 = createElement('h4')
        this.question31 = createElement('h4')
        this.option31 = createElement('h4')
        this.option32 = createElement('h4')
        this.answer3 = createInput();

        this.question4 = createElement('h4')
        this.question41 = createElement('h4')
        this.option41 = createElement('h4')
        this.option42 = createElement('h4')
        this.option43 = createElement('h4')
        this.option44 = createElement('h4')
        this.answer4 = createInput();

        this.submit = createButton("SUBMIT");
    }

    hide(){

        this.instruction.hide();

        this.address.hide();
        this.person.hide();

        this.question1.hide();
        this.option11.hide();
        this.option12.hide();
        this.answer1.hide();

        this.question2.hide();
        this.option21.hide();
        this.option22.hide();
        this.answer2.hide();

        this.question3.hide();
        this.question31.hide();
        this.option31.hide();
        this.option32.hide();
        this.answer3.hide();

        this.question4.hide();
        this.question41.hide();
        this.option41.hide();
        this.option42.hide();
        this.option43.hide();
        this.option44.hide();
        this.answer4.hide();

        this.submit.hide();

    }
    

    display(){
   

   this.title.position(200,10);
   this.title.html("ANIMAL HEALTH AND ADOPTION SURVEY");

   this.instruction.position(25,40);
   this.instruction.html("PLEASE ENTER YOUR NAME AND EMAIL ID")

   this.person.position(25,80);
   this.address.position(250,80)

   this.question1.position(25,100);
   this.question1.html("Q.1 DO YOU THINK ADOPTING STRAY ANIMALS IS EASY ?")

   this.option11.position(25,120);
   this.option11.html("A.YES")

   this.option12.position(100,120);
    this.option12.html("B.NO")

   this.answer1.position(25,180);



  this.question2.position(25,200);
   this.question2.html("Q.2 HOW MANY % OF PEOPLE DO YOU THINK ARE AWARE ABOUT ANIMAL HEALTH ?")

   this.option21.position(25,220);
   this.option21.html("A.LESS THAN 50%")

   this.option22.position(200,220);
   this.option22.html("B.MORE THAN 50%")

   this.answer2.position(25,280);


   this.question3.position(25,300);
   this.question3.html("Q.3 DO YOU THINK THERE SHOULD BE MORE ORGANISATIONS, NGOs AND APPS WHICH WORK")

   this.question31.position(25,320);
   this.question31.html("TOWARDS WELFARE OF ANIMALS AND THEIR HEALTH")

   this.option31.position(25,340);
   this.option31.html("A.YES")

   this.option32.position(100,340);
   this.option32.html("B.NO")

   this.answer3.position(25,400);


   this.question4.position(25,420);
   this.question4.html("Q.4 WHICH OF THE FOLLOWING DISEASES IS MORE COMMON IN STRAY DOGS ?")

   this.question41.position(25,440);
   this.question41.html("(YOU CAN WRITE TWO ANSWERS EX- A AND B)")

   this.option41.position(25,460);
   this.option41.html("A.RABIES")

   this.option42.position(200,460);
   this.option42.html("B.PARAINFLUENZA")

   this.option43.position(25,480);
   this.option43.html("C.LEPTOSPIROSIS")
   
   this.option44.position(200,480);
   this.option44.html("D.DISTEMPER")

   this.answer4.position(25,540);

   this.submit.position(730,760);
   this.submit.mousePressed(()=>{

       var ans1 = this.answer1.value();
       var ans2 = this.answer2.value();
       var ans3 = this.answer3.value();
       var ans4 = this.answer4.value();
       var name = this.person.value();
       var email = this.address.value();
       var ans1REF = database.ref('/');
       ans1REF.set({
           QUES1: ans1,
           QUES2: ans2,
           QUES3: ans3,
           QUES4: ans4,
           Name: name,
           emailID: email
       })
       this.hide();
       formSTATE = 2;
   })


    }
}