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
    constructor(title,castMembers,shootingShedule,budget){
    this.title = title;
    this.castMembers = castMembers;
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