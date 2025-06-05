let health = prompt('Введите число параметра "здоровье" для персонажа')

console.log('health ', health);
console.log(health <= 0 || !health);
if (health <= 0 || !health) {
    alert('Параметр "здоровье" должен быть больше нуля!')
} else {
    alert(`Параметр "здоровье" равен ${health}`);
}