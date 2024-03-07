import { MyDataBaseCLassic } from "./db/my-database-classic";

const db1 = MyDataBaseCLassic.getInstance();
db1.add({ name: "Luiz", age: 30 });
db1.add({ name: "Maria", age: 15 });
db1.add({ name: "Paulo", age: 50 });
db1.show();