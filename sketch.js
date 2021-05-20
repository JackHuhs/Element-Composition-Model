//dictionaries (the periodic table compressed)
elementDictionary = new p5.TypedDict({"H":1.00794,"He":4.002602,"Li":6.941,"Be":9.012182,"B":10.811,"C":12.0107,"N":14.0067,"O":15.9994,"F":18.9984032,"Ne":20.1797,"Na":22.98976928,"Mg":24.305,"Al":26.9815386,"Si":28.0855,"P":30.973762,"S":32.065,"Cl":35.453,"Ar":39.948,"K":39.0983,"Ca":40.078,"Sc":44.955912,"Ti":47.867,"V":50.9415,"Cr":51.9961,"Mn":54.938045,"Fe":55.845,"Co":58.933195,"Ni":58.6934,"Cu":63.546,"Zn":65.38,"Ga":69.723,"Ge":72.64,"As":74.9216,"Se":78.96,"Br":79.904,"Kr":83.798,"Rb":85.4678,"Sr":87.62,"Y":88.90585,"Zr":91.224,"Nb":92.90638,"Mo":95.96,"Tc":98,"Ru":101.07,"Rh":102.9055,"Pd":106.42,"Ag":107.8682,"Cd":112.411,"In":114.818,"Sn":118.71,"Sb":121.760,"Te":127.6,"I":126.90447,"Xe":131.293,"Cs":132.9054519,"Ba":137.327,"Hf":178.49,"Ta":180.94788,"W":183.84,"Re":186.207,"Os":190.23,"Ir":192.217,"Pt":195.084,"Au":196.966569,"Hg":200.59,"Ti":204.3833,"Pb":207.2,"Bi":208.9804,"Po":209,"At":210,"Rn":222,"Fr":223,"Ra":226,"Rf":265,"Db":268,"Sg":271,"Bh":272,"Hs":277,"Mt":276,"Ds":281,"Rg":280,"Cn":285,"Uut":284,"Uuq":289,"Uup":288,"Uuh":293,"Uus":294,"Uuo":294,"La":138.90547,"Ce":140.116,"Pr":140.90765,"Nd":144.242,"Pm":145,"Sm":150.36,"Eu":151.964,"Gd":157.25,"Tb":158.92535,"Dy":162.5,"Ho":164.93032,"Er":167.259,"Tm":168.93421,"Yb":173.054,"Lu":174.9668,"Ac":227,"Th":232.03806,"Pa":231.03588,"U":238.02891,"Np":237,"Pu":244,"Am":243,"Cm":247,"Bk":247,"Cf":251,"Es":252,"Fm":257,"Md":258,"No":259,"Lr":262});
compoundDiagnosis = new p5.TypedDict({});
//variables
let description;
let continueButton;
let inputBox;
let submitButton;
let prompt;
var compound = '';
var elementsInDiagnosis = [];
var totalMass = 0;
var approxElementPercents = [];
//colors
var colorList = ['#0066ff','#ff3399','#33cc33','#ff9933','#ff3333','#ffff00','#9900ff','#4d4d4d','#99ccff','#996600','#66ff99','#003366'];
//inputs and setting up
function setup() {
  //canvas
  createCanvas(700, 600);
  //console logs
  console.log("There are only 12 colors so far so make sure to use less than 12 elements. This will be fixed later.")
  console.log("Depending on the size of your computer screen, you might have to change the amount of space you give to the canvas, or you could just scroll using the scrollers on the bottom and right.")
  console.log("For typing out your element, superscript is not required (e.g. H2O is water.)")
  startUp1();
}
function startUp1(){
  //description and options
  description = createElement('h2','This program seperates your compound into its different elements, and then creates a pie chart showing the percentage composition of each element by mass. You can choose between typing the chemical composition out yourself, or you can choose an already named compound (Make sure to check the console for more info.)');
  description.position(10,50);
  continueButton = createButton('Type it Yourself');
  continueButton.position(10,275);
  chooseButton = createButton('Choose a Compound');
  chooseButton.position(10, 350);
  continueButton.mousePressed(continue1);
  chooseButton.mousePressed(chooseCompound);
}
function hideChooseButtons(){
  //hide all buttons when leaving selection screen
  backButton.hide();
  waterButton.hide();
  glucoseButton.hide();
  CO2Button.hide();
  ibuprofenButton.hide();
  isopropylButton.hide();
  sulfurButton.hide();
  ethyleneButton.hide();
  propyleneButton.hide();
  gelatinButton.hide();
  NaFButton.hide()
  caffeineButton.hide()
  sugarButton.hide()
}
function hideStartingButtons(){
  //hide buttons/txt when leaving starting screen
  description.hide();
  continueButton.hide();
  chooseButton.hide();
}
function startUp2(){
  hideChooseButtons();
  startUp1();
}
function chooseCompound(){
  hideStartingButtons();
  //selection screen
  backButton = createButton('<--Go Back')
  backButton.position(25, 25);
  backButton.mousePressed(startUp2);
  waterButton = createButton('Water');
  waterButton.position(75, 75);
  waterButton.mousePressed(waterContinue);
  glucoseButton = createButton('Glucose/Fructose');
  glucoseButton.position(75, 100);
  glucoseButton.mousePressed(glucoseContinue);
  CO2Button = createButton('Carbon Dioxide');
  CO2Button.position(75,125);
  CO2Button.mousePressed(CO2Continue);
  ibuprofenButton = createButton('Ibuprofen')
  ibuprofenButton.position(75,150);
  ibuprofenButton.mousePressed(ibuprofenContinue);
  isopropylButton = createButton('Isopronanol');
  isopropylButton.position(75,175);
  isopropylButton.mousePressed(isopropylContinue);
  sulfurButton = createButton("Sulfuric Acid");
  sulfurButton.position(75,200);
  sulfurButton.mousePressed(sulfurContinue);
  ethyleneButton = createButton('Ethylene');
  ethyleneButton.position(75,225);
  ethyleneButton.mousePressed(ethyleneContinue);
  propyleneButton = createButton("Propylene");
  propyleneButton.position(75,250);
  propyleneButton.mousePressed(propyleneContinue);
  gelatinButton = createButton("Gelatin");
  gelatinButton.position(75,275);
  gelatinButton.mousePressed(gelatinContinue);
  NaFButton = createButton("Sodium Flouride");
  NaFButton.position(75,300);
  NaFButton.mousePressed(NaFContinue);
  caffeineButton = createButton("Caffeine");
  caffeineButton.position(75,325);
  caffeineButton.mousePressed(caffeineContinue);
  sugarButton = createButton("Sugar");
  sugarButton.position(75,350);
  sugarButton.mousePressed(sugarContinue);
}
//button functions
function sugarContinue(){
  chooseContinue("C12H22O11");
}
function caffeineContinue(){
  chooseContinue("C8H10N4O2");
}
function NaFContinue(){
  chooseContinue("NaF");
}
function gelatinContinue(){
  chooseContinue("C102H151O39N31");
}
function propyleneContinue(){
  chooseContinue("C3H6");
}
function ethyleneContinue(){
  chooseContinue("C2H4");
}
function sulfurContinue(){
  chooseContinue("H2SO4");
}
function isopropylContinue(){
  chooseContinue('C3H8O');
}
function ibuprofenContinue(){
  chooseContinue('C13H18O2')
}
function CO2Continue(){
  chooseContinue('CO2')
}
function waterContinue(){
  chooseContinue('H2O');
}
function glucoseContinue(){
  chooseContinue('C6H12O6')
}
function chooseContinue(newCompound){
  hideChooseButtons();
  compound = newCompound;
  seperateCompound();
}
function continue1() {
  //compound input
  hideStartingButtons();
  prompt = createElement('h2','Type in your compound:')
  prompt.position(10,25);
  inputBox = createInput();
  inputBox.position(13,75);
  submitButton = createButton('Submit');
  submitButton.position(inputBox.x+inputBox.width,inputBox.y);
  submitButton.mousePressed(continue2);
  goBackButton2 = createButton('<--Go Back');
  goBackButton2.position(10,10);
  goBackButton2.mousePressed(goBackButtonContinue);
}
function goBackButtonContinue(){
  prompt.hide()
  inputBox.hide()
  submitButton.hide()
  goBackButton2.hide()
  startUp1()
}
function continue2(){
  //get value from compound
  compound = inputBox.value();
  compound = split(compound,'');
  if (compound == ''){
    console.log("Error: You did not type anything in.")
    remove();
  }
  inputBox.hide();
  prompt.hide();
  submitButton.hide();
  goBackButton2.hide();
  seperateCompound();
}
function seperateCompound(){
  //split up compound
  let symbolStorer='';
  let numberStorer=0;
  for(var i=0;i<compound.length;i++) { //for every item in the list
    if (unchar(compound[i])>64&&unchar(compound[i])<91){ //check if it's a capital letter
      if (symbolStorer==''){
        symbolStorer+=compound[i];
      } else {
        if (elementDictionary.hasKey(symbolStorer)){
          if (numberStorer>1){
            compoundDiagnosis.create(symbolStorer,numberStorer);
            elementsInDiagnosis.push(symbolStorer);
            numberStorer=0;
          } else {
            compoundDiagnosis.create(symbolStorer,1);
            elementsInDiagnosis.push(symbolStorer);
            numberStorer=0;
          }
        } else {
          //error if they incorrectly type element
          console.log("Error: '"+symbolStorer+"' is not an element. Please make sure you capitalize correctly.")
          remove();
        }
        symbolStorer=compound[i];
      }
    }
    if (unchar(compound[i])>92&&unchar(compound[i])<123) {//if lower case letter
      symbolStorer+=compound[i];
    }
    if (unchar(compound[i])>47&&unchar(compound[i])<58){//if number
      numberStorer=(numberStorer*10)+int(compound[i]);
    }
    if (i>compound.length-2) {
      if (elementDictionary.hasKey(symbolStorer)){
        if (numberStorer>1){
          compoundDiagnosis.create(symbolStorer,numberStorer);
          elementsInDiagnosis.push(symbolStorer);
        } else {
          compoundDiagnosis.create(symbolStorer,1)
          elementsInDiagnosis.push(symbolStorer);
        }
      } else {
        //same error message as before
        console.log("Error: '"+symbolStorer+"' is not an element. Please make sure you capitalize correctly.")
        remove();
      }
    }
  }
  totalMassCalc();
}
function totalMassCalc() {
  //finds total masses of all elements and entire compound
  for (var a=0;a<elementsInDiagnosis.length;a++){
    for (var b=0;b<compoundDiagnosis.get(elementsInDiagnosis[a]);b++){
      totalMass+=elementDictionary.get(elementsInDiagnosis[a]);
    }
  }
  findPercents();
}
function findPercents(){
  //finds percents of all the elements in the compound
  for (var c=0;c<elementsInDiagnosis.length;c++){
    temp1 = (elementDictionary.get(elementsInDiagnosis[c])*compoundDiagnosis.get(elementsInDiagnosis[c]))/totalMass
    approxElementPercents.push(round(temp1,3));
  }
}
function draw() {
  //background
  background("#e6e6e6");
  strokeWeight(1);
  placeStorer = 0;
  //the ratio of percent to degrees
  ratio = 360/1000;
  angleMode(DEGREES); //changes angleMode from RADIANS to DEGREES, as my ratio is for conversion between percents and degrees, not radians
  for (var d=0;d<approxElementPercents.length;d++){
    stroke(colorList[d]);//color for part of pie chart
    for (var e=0;e<approxElementPercents[d]*1000;e++){ //draws lines until it finishes the part of the pie chart I am on
      line(325,260,cos((e+placeStorer)*ratio)*100+325,sin((e+placeStorer)*ratio)*100+260); //draws line using trig
    }
    tempMiddle = round(approxElementPercents[d]*500,0)+placeStorer;
    stroke(0);
    //this part draws the lines and the percents next to it using trig as well
    line(cos(tempMiddle*ratio)*50+325,sin(tempMiddle*ratio)*50+260,cos(tempMiddle*ratio)*175+325,sin(tempMiddle*ratio)*175+260);
    textAlign(CENTER,CENTER);
    textSize(18);
    fill(colorList[d]);
    text('~'+str(round(approxElementPercents[d]*100,1))+'%',cos(tempMiddle*ratio)*200+325,sin(tempMiddle*ratio)*200+260);
    placeStorer+=approxElementPercents[d]*1000;
  }
  stroke(0)
  keyDrawing();
}
function keyDrawing(){
  //makes the key
  for (var f=0;f<elementsInDiagnosis.length;f++){
    stroke(0)
    fill(colorList[f]);
    rect(650,12.5+(37.5*f),25,25);
    fill(0)
    textAlign(RIGHT,TOP);
    textSize(30);
    text(elementsInDiagnosis[f]+': ',637.5,12.5+(37.5*f));
    textSize(9);
    stroke(0);
    fill(255);
    textAlign(LEFT,TOP);
    text('~'+str(round(approxElementPercents[f]*100))+'%',650.5,22.5+(37.5*f))
  }
}
