/*
**Exercise 1:**

เรามี Array `customers` ซึ่งบรรจุรายชื่อสมาชิก ให้ใช้ Bubble Sort Algorithm เพื่อเรียงลำดับสมาชิกตามลำดับตัวอักษร

เช่น ถ้า `customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]`
เมื่อ Algorithm นี้ทำงานจะแสดงผลลัพธ์ออกมาบนหน้าจอเป็น
`[ "Arthit", "Napasorn", "Pimchanok", "Somchai", "Suchada"]`

```jsx
function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
}

// ตอบคำถามตรงนี้จ้า
```

ยังจำได้ไหมว่า Bubble Sort Algorithm มี Big O เป็นเท่าไร เพราะอะไร
ให้เขียนอธิบายใน comment แนบมาข้างใต้โค้ดตรงส่วนที่ระบุว่า **“ตอบคำถามตรงนี้จ้า”**
*/

// [     [ shuffle  -1-i<-|PUSH  ]  -1 ]
// use tmpVar as triangle shuffle

function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1 - i; j++) {
      let tmpVar = "";
      if (customers[j] > customers[j + 1]) {
        tmpVar = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = tmpVar;
      }
    }
  }
  return customers;
}

const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
// `[ "Arthit", "Napasorn", "Pimchanok", "Somchai", "Suchada"]`

// ตอบคำถามตรงนี้จ้า
/*
Big O = n^2
เพราะเป็น nested loop
*/
