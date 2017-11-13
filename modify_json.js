const fs = require('fs');

const obj = JSON.parse(fs.readFileSync('./teacherData.json', 'utf8'));
for (let o of obj) {
  o.id = Math.random()
    .toString(36)
    .substr(7);
}
console.log(obj);

fs.writeFileSync('output.json', JSON.stringify(obj));
