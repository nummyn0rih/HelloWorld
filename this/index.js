// --------------------------------------------------
// Задание #1
// --------------------------------------------------

const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level += 1;

        if (this.level > 5) {
            alert('Студент выучил все технологии!');
        }

        switch (this.level) {
            case 2:
                this.stack.push('CSS');
                break;
            
            case 3:
                this.stack.push('JavaScript');
                break;
            
            case 4:
                this.stack.push('React');
                break;
            
            case 5:
                this.stack.push('NodeJS');
                break;

            default:
                break;
        }

    return this;
    }
};

console.log(student);

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel();

console.log(student.stack);

student.improveLevel();

// --------------------------------------------------
// Задание #2
// --------------------------------------------------

const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
};

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
};

function makeDomestic(isDomestic) {
    this.isDomestic = isDomestic;
    console.log(this);
    return this;
};

makeDomestic.bind(dog, true)(); 

makeDomestic.call(bird, false); 
makeDomestic.apply(bird, [false]); 

// --------------------------------------------------
// Задание #3
// --------------------------------------------------

const footballer = {
   fullName: 'Cristiano Ronaldo',
   attack: function() {
      console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
   },
   scoreGoal(sound) {
      console.log(`${this.fullName} забил гол! Вот это да!`);
      this.celebrate(sound);
   },
   celebrate(sound) {
      console.log(sound);
   },
   goToSubstitution: function(newPlayer) {
      console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
   }
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack();
score.call(footballer, 'Сиииии');
substitute.apply(footballer, ['Paulo Dibala']);
