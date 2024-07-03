import inquirer from "inquirer"

let hero_name = ""
let hero_health = 100
let hero_attacking_power = 100
let num_health_portion = 2
let health_increase = 50

let enemies = ["Zoombie","Dracula","Mummy","Vampire"]
let enemy_health = 100
let enemy_attacking_power = 100

let random_hero_attacking_power = Math.floor(Math.random() * hero_attacking_power  +1)
let random_enemy_attacking_power = Math.floor(Math.random() * enemy_attacking_power  +1)
let random_index = Math.floor(Math.random() * 4)
let random_enemy = enemies[random_index]

console.clear();

console.log("\n\t--------------Welcome to Adventure Game---------------");

let name = await inquirer.prompt({
    name : "question",
    type : "input",
    message : "What is your name?"
})
hero_name = name.question
information()

while(enemy_health > 0){
    let options = await inquirer.prompt({
        name : "question",
        type : "list",
        message : "Please select one",
        choices : ["Attack","health_Portion"]
    })
    if(options.question === "Attack"){
        enemy_health = enemy_health - random_hero_attacking_power
        hero_health =hero_health -  random_enemy_attacking_power

        information()

        if(enemy_health <= 0){
            console.log("\n---------------------------------------");
            
            console.log("\t\tYou have killed enemy now");
            break
           
        }
        else if(hero_health <= 0){
            console.log("\n----------------------------------");
            
            console.log("Hero is dead now");
            break
    }
      
    }
    else if(options.question === "health_Portion"){
        if(num_health_portion > 0){
            hero_health = hero_health + health_increase
            --num_health_portion
            information()
        }else{
            console.log("No health portion available");
            
        }
    }
        
}
console.log("Thank you for playing adventure game");


function information(){
    if(hero_health < 0){
        hero_health = 0
    }
    if(enemy_health < 0){
        enemy_health = 0
    }



//-------------------------hero info---------------------
    console.log("\t\tHero information");

    console.log("\n---------------------------------------");

    console.log(`Hero name :${hero_name},
        Your health is:${hero_health},
        your maximum attacking power is:${hero_attacking_power}`);

//------------------------enemy info------------------
console.log("\t\tEnemy information");

    console.log("\n---------------------------------------");

    console.log(`Enemy name :${random_enemy},
        enemy health is:${enemy_health},
        enemy maximum attacking power is:${enemy_attacking_power}`);
    
    
}