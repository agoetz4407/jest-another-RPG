const Potion = require('../lib/Potion.js')

function Enemy(name = '') {
    this.name = name

    this.health = Math.floor(Math.random() * 10 + 95)
    this.strength = Math.floor(Math.random() * 5 + 7)
    this.agility = Math.floor(Math.random() * 5 + 7)
    this.potion = new Potion()
    this.weapon = 'weapon'
}

Enemy.prototype.getDescription = function() {
}

Enemy.prototype.getHealth = function() {
}

Enemy.prototype.getAttackValue = function() {
}

Enemy.prototype.isAlive = function() {
}

Enemy.prototype.reduceHealth = function() {
}