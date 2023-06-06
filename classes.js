//The ever changing ankara: you are a fashion designer known for your unique and vibrant ankara designs. recently you've discovered that some of your fabric patterns change their designs based on the temperature and mood of the wearer. 
//you want to create a software application that can predict the changes in the fabric design given the mood and temperature data.
// think about the classes you will need to model the changing ankara and how to predict the changes
class Ankara{
    constructor(pattern,color,temperature,mood){
        this.pattern=pattern;
        this.color=color;
        this.temperature=temperature;
        this.mood=mood;
        this.design=' ';

    }
    changeDesign(newDesign){
        this.design=newDesign;
        console.log(`Ankara fabric design changed to:${this.design}`);
    }
    getColor(){
        const temp=20;
        const mood=5;
        if(this.temperature>=temp && this.mood>=mood){
            console.log(`wear light clothes and more ${this.pattern} Ankara`);
        }
        else{
            console.log("wear dull and less patterned Ankara");
        }

    }
}

let ankara=new Ankara("patterned","bright",24,7);
ankara.getColor();


//the Great migration forecast: Every year millions of wildbeaast, zebras and other animals participate in the great migration across the serengeti-mara ecosystrm. as a conservationist, you want to develop a software system that models this migration,
//predicting the movement of the herds based on weather patterns, river levels and the animals, the environment and the various factors that influence the migration 
class Migration{
    constructor(species,age,speed,currentLocation){
        this.species=species;
        this.age=age;
        this.speed=speed;
        this.currentLocation=currentLocation;

    }
    move(){
        if(this.speed>=70){
            console.log(`It will take less time for ${this.species} to migrate `);
        }
        else{
            console.log(`It will take more time for ${this.species} to migrate `);

        }
    }
    makeDecision(){
        if(this.currentLocation=="cold" && "hot"){
            console.log(`${this.species} are likely to migrate`);
        }
        else{
            console.log(`${this.species} are unlikely to migrate`);

        }
    }
    interactWithEnvironment(env){
        if(env=="dangerous" && "scarcity of food"){
            console.log(`${this.species} are likely to migrate`);
        }
        else{
            console.log(`${this.species} are unlikely to migrate`);

        }

    }
}

class River{
    constructor(waterLevel,flowRate){
        this.waterLevel=waterLevel;
        this.flowRate=flowRate;
    }
    riverChanges(){
        if(this.waterLevel>=50 && this.flowRate=="rushy"){
            console.log(`${this.species} are unlikely to migrate`);

        }
        else{
            console.log(`${this.species} are likely to migrate`);

        }

    }

}

migrate=new Migration("zebras",60,50,"Warm");
migrate.move();
migrate.makeDecision();
migrate.interactWithEnvironment("dangerous");

migrat=new Migration("Wildbeast",85,90,"cold");
migrat.move();
migrat.makeDecision();
migrat.interactWithEnvironment("dangerous");

river= new River(40,"calm");
river.riverChanges();

// Nollywood movie planner:As a producer in the booming nollywood movie industry, you are in charge of multiple film projects at once. each movie has a different cast members, 
// shooting schedules and budgets. you want to write a program to help manage your film projects efficiently. the software should be able to handle the complexities of scheduling, 
// budgeting and coordinating between different movie projects. 


class Nollywood{
    constructor(title,castMembers,shootingSchedule,budget){
    this.title = title;
    this.castMembers = " ";
    this.shootingSchedule = shootingSchedule;
    this.budget = budget;

    }
    updateShootingSchedule(schedule){
        this.shootingSchedule=schedule

    }
    updateBudget(budget){ 
        this.budget=budget
    }
}

class FilmProjectManager{
    constructor(){
        this.projects=[];
    }
    addProject(project){
        this.projects.push(project)
    }
    removeProject(project){
        let index=this.projects.indexOf(project)
        if(index>-1){
            this.projects.splice(index,1)
        }
    }
    getProjects(){
        return this.projects
    }
}
// let project1=new Nollywood("Movie1",[Jane,Grace,Wambui],"schedule",1000000);
// project1.updateShootingSchedule();
// project1.updateBudget();
// let projectManager=new FilmProjectManager();




// the magical baobab: in a small village , there is a baobab tree believed to have magical properties . every season ,
// it bears different types of fruits , each with its own unique power. you've decided to create a software system that tracks the changes in the tree and predicts
// what type of fruit will bear next season and what powers it will possess. the system should also record the effect of each fruit when consumed

class Fruit{
    constructor(type,power,effect){
        this.type=type;
        this.power=power;
        this.effect=effect;
    }
}
class Baobab{
    constructor(){
        this.fruits=[];
    }
    addFruit(fruit){
        this.fruits.push(fruit);
    }
    predictNextFruit(fruit){
        if(this.fruits.includes(fruit)){
            return `${fruit} will not bear next season`
        }
        else{
            return `${fruit} may bear next season`

        }

    }
}
const baobabTree=new Baobab();
baobabTree.addFruit('mango');
baobabTree.addFruit('passion');
const predict=baobabTree.predictNextFruit("apple");
console.log(predict);

const fruit1=new Fruit('Mango','energise','strong muscles');
const fruit2=new Fruit('Apple','energise','strong muscles');



// The legendary african drum circles: you're a part of a community that hosts one of the largest drum circles , each with its unique sound and rhythm. the Djembe, talking drum and bougarabou are among the popular ones. these drums have common properties such as the material they're made from and their sizes , but they also have distinct characteristics. for instance, the talking drum can mimic the lines of human speech, 
// the djembe is known for its wide range of tones, and the bougarabou is noted for its deep rich bass tones. you want to create a sofware application model of the drum circle that encapsulates these different types of drums. you wish to include methods for each drum that represent the sound it makes, and also group similar drums together. think about creating a base drum class that contains properties and methods common
// to all drums and then create subclasses for each specific type of drum (like Djembe,talkingDrum and baogarabou). the subclasses should inherit from the base drum class and also implement their unique characteristics. this software model would help newcomers understand the characteristics of each drum and how they conribute to the overall rhythm of the drum cicle

class Drum{
    constructor(material,size){
    this.material=material;
    this.size=size;
    }
    playSound(){

    }
}
class Djembe extends Drum{
    constructor(material,size){
        super(material,size);
    }
    playSound(){

    }
}
class TalkingDrum extends Drum {
    constructor(material, size) {
      super(material, size);
    }

  playSound() {

  }

}
class Bougarabou extends Drum {
  constructor(material, size) {
    super(material, size);
  }

  playSound() {
  
  }
}

const djembe = new Djembe("Wood", "Medium");
const talkingDrum = new TalkingDrum("Leather", "Large");
const bougarabou = new Bougarabou("Wood", "Large");


djembe.playSound();
talkingDrum.playSound();
bougarabou.playSound();

// You are a music composer known for creating music that adapts to the listener's emotions and surroundings. You want to develop a software system that analyzes the listener's 
// mood and environment to predict the type of music that would best suit their current state. Think about the classes you'll need to model the music compositions and how to predict the appropriate music based on mood and environment.
class Music{
    constructor(title,duration,genre,artist,year){
        this.title=title;
        this.duration=duration;
        this.genre=genre;
        this.artist=artist;
        this.year=year;
    }
    play() {
        return `Playing ${this.title} by ${this.artist}`;
      }
    pause(){
        return `Pausing ${this.title} by ${this.artist}`;
    }
    stop() {
        return `Stopping ${this.title} by ${this.artist}`;
      }
    
}


class MusicAnalyze{
    constructor(mood,env){
        this.mood=mood;
        this.env=env;

    }
    mood(){
        if(mood>7){
            return `${this.genre} is best suited for you`;
        }
        else if(mood==7){
            return `${this.genre} is best suited for you`;
        }
        else{
            return `${this.genre} is best suited for you`;
        }
    }
    analyzeEnvironment(){
        if(env=="cool"){
            return `${this.genre} is best suited for our customer`;
        }
        else if(env=="noisy"){
            return `${this.genre} is best suited for our customer`;

        }
    }
}

music1=new Music("Driver's license",5,"Rnb","Olivia Rodrigo",2019);
music2=new Music("Minefields",5,"Rnb","Faouzia",2019);
console.log(music1);
console.log(music1.play());
console.log(music1.pause());

console.log(music2);
analyzeA=new MusicAnalyze(6,"noisy");
console.log(analyzeA);

