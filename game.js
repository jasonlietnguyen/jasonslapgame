var health = 100;
var hits = 0;
var name = 'Jason';

var Item = function(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function() {
        var runMod = 0;
        for (var i = 0; i < this.items.length; i++) {
            var x = this.items[i];
            runMod += x.modifier;
            if (runMod > 1) {
                runMod = 1;
            }
        }
        return runMod;
    }
};



var items = {
    shield: new Item("Shield", 0.1, "This is an awesome shield!"),
    forcefield: new Item("forcefield", .5, "This is an awesome forcefield!"),
    vest: new Item("Vest", .2, "This is an awesome vest!"),
};


// var player = {
//     health = 100,
//     hits = 0,
//     theItems:[],
//     addMods: function() {
//         var total=0;
//         for(var i=0; i < this.items.length; i++) {
//             total = total + this.items[i].modifier;
//         }  
//         return total; 
//     }
// }

// function giveShield(){
//     player.theItems.push(items.shield);
//     if (player.health <= 0){
//         return;
//     }
    
//     player.health -= 1 - (1 * player.addMods());
//     player.hits++;
//     update();
    
// }

function slap() {
    health--
    hits = hits + 1
    update()
};

function punch() {
    health = health - 5
    hits = hits + 1
    update()
};

function kick() {
    health = health - 10
    hits = hits + 1
    update()
};


function update() {
    document.getElementById("health").innerText = health;
    document.getElementById("hits").innerText = hits;
    //document.getElementById('items').innerText = items;
    if (health <= 0) {
        document.getElementById("player-panel").classList.add("panel-danger")
    } 
    else {
        document.getElementById("player-panel").classList.remove("panel-danger")
    }
};

update();


