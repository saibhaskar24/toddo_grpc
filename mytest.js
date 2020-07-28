const a = [
    { id: 1, text: 'adas', iscompleted: false },
    { id: 2, text: 'adas', iscompleted: false },
    { id: 3, text: 'adas', iscompleted: false }
  ]

var k = a.findIndex(p => p.id == 3)
console.log(k)

delete a[k];

console.log(a)