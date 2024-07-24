/*
**Exercise 2:** 

1. เรามี Array `students` ซึ่งบรรจุข้อมูลนักเรียน ให้เขียน Algorithm เพื่อเรียงลำดับนักเรียนตามคะแนนสอบ 
โดยเรียงจากคนที่สอบได้คะแนนสูงสุดไปยังคนที่สอบได้คะแนนต่ำสุด เช่น
    
    ```jsx
    [
        { id: "S001", name: "Anan", score: 85 },
        { id: "S002", name: "Boon", score: 92 },
        { id: "S003", name: "Chai", score: 78 },
        { id: "S004", name: "Dao", score: 95 },
        { id: "S005", name: "Ek", score: 88 },
        { id: "S006", name: "Fah", score: 80 }
    ];
    ```
    
    เมื่อ Algorithm นี้ทำงานจะเห็นผลลัพธ์ดังนี้
    
    ```jsx
    [
        { id: "S004", name: "Dao", score: 95 },
        { id: "S002", name: "Boon", score: 92 },
        { id: "S005", name: "Ek", score: 88 },
        { id: "S001", name: "Anan", score: 85 },
        { id: "S006", name: "Fah", score: 80 },
        { id: "S003", name: "Chai", score: 78 }
    ]
    ```
    
    ```jsx
    function sortStudentsByScore(students) {
      // เริ่มเขียนโค้ดตรงนี้จ้า
    };
    ```
    
    - Hint
        
        เราสามารถใช้ Bubble Sort Algorithm ในการแก้ปัญหาข้อนี้ได้ 
        เพิ่มแค่การเข้าถึงข้อมูลที่อยู่ในรูปแบบ Key-Value Pair เท่านั้น
*/

// [     [ shuffle  -1-i<-|PUSH  ]  -1 ]
// use tmpVar as triangle shuffle

function sortStudentsByScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < students.length - 1; i++) {
    for (let j = 0; j < students.length - 1 - i; j++) {
      let tmpVar = null;
      if (students[j].score < students[j + 1].score) {
        tmpVar = students[j];
        students[j] = students[j + 1];
        students[j + 1] = tmpVar;
      }
    }
  }
  return students;
}

const students = [
  { id: "S001", name: "Anan", score: 85 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S003", name: "Chai", score: 78 },
  { id: "S004", name: "Dao", score: 95 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S006", name: "Fah", score: 80 },
];

console.log(sortStudentsByScore(students));

// [
//     { id: "S004", name: "Dao", score: 95 },
//     { id: "S002", name: "Boon", score: 92 },
//     { id: "S005", name: "Ek", score: 88 },
//     { id: "S001", name: "Anan", score: 85 },
//     { id: "S006", name: "Fah", score: 80 },
//     { id: "S003", name: "Chai", score: 78 }
// ]
