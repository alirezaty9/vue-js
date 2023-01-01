let app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            logBattleArray: [],
            currentRound: 0,
            winner: null
        }
    },
    watch: {
        playerHealth(val) {
            if (val <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draww'
            } else if (val <= 0) {
                this.winner = 'monster win'
            }
        },
        monsterHealth(val) {
            if (val <= 0 && this.playerHealth <= 0) {
                this.winner = 'draww'
            } else if (val <= 0) {
                this.winner = 'player win'
            }
        }
    },
    computed: {
        monsterHealthStyle() {
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0
            }
            return { width: this.monsterHealth + '%' }
        },
        playerHealthStyle() {
            if (this.playerHealth < 0) {
                this.playerHealth = 0
            }
            return { width: this.playerHealth + '%' }
        },
        canSpecialAttack() {
            return this.currentRound % 4 !== 0 || this.currentRound == 0
        },


    },
    methods: {

        startGame() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.winner = null
            this.logBattleArray = []

        },
        attackPlayer() {
            this.currentRound++
            let attack = Math.floor(Math.random() * (10)) + 1
            this.monsterHealth -= attack
            this.logBattleArrayHandler('player','attack' ,attack)
            this.attackMonster()
        },
        attackMonster() {
            let MosterAttack = Math.floor(Math.random() * (10)) + 1
            this.playerHealth -= MosterAttack
            this.logBattleArrayHandler('monster', 'attack', MosterAttack)
        },
        specialAttackMonster() {
            this.currentRound++;
            let MosterAttack = Math.floor(Math.random() * (20)) + 1
            this.monsterHealth -= MosterAttack
            this.attackMonster()
            console.log(this.monsterHealth);
            this.logBattleArrayHandler('player', 'specialAttack', MosterAttack)

        },
        healHandler() {
            this.currentRound++
            let heal = Math.floor(Math.random() * (20)) + 1

            if (this.playerHealth + heal > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += heal
            }
            this.attackMonster()
            this.logBattleArrayHandler('player', 'heal', heal)

        },
        surrenderHandler() {
            this.winner = 'monster'
            this.logBattleArrayHandler('player', 'surended', this.winner)

        },
        logBattleArrayHandler(who,what,value){
            this.logBattleArray.unshift({
                actionWho:who,
                actonWhat:what,
                actionValue:value
            })
        }
    },


    // attackHandler() {
    //     let attack = Math.floor(Math.random() * (10)) + 1
    //     let MosterAttack = Math.floor(Math.random() * (10)) + 1
    //     let player = document.getElementById("player")
    //     let monster = document.getElementById("monster")
    //     let playerHealth = player.querySelector('.healthbar .healthbar__value')
    //     let monsterHealth = monster.querySelector('.healthbar .healthbar__value')

    //     if (this.playerHealth > attack) {
    //         this.playerHealth = this.playerHealth - attack
    //         playerHealth.style.width = this.playerHealth + "%"
    //         // console.log(this.playerHealth);
    //         // console.log(attack);


    //     } else {
    //         playerHealth.style.width = 0 + '%'
    //         console.log(this.playerHealth);
    //         console.log(attack);

    //     }





    //     if (this.monsterHealth > attack) {
    //         this.monsterHealth = this.monsterHealth - MosterAttack
    //         monsterHealth.style.width = this.monsterHealth + "%"
    //         // console.log(this.monsterHealth);


    //     } else {
    //         monsterHealth.style.width = 0 + '%'
    //         // console.log(this.monsterHealth);

    //     }

    //     let logBattle = [this.playerHealth, this.monsterHealth]
    //     this.logBattleArray.push(logBattle)

    //     console.log(Array.from( this.logBattleArray));






    // },



})



app.mount('#game')