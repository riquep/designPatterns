import { MyDataBaseCLassic } from "./db/my-database-classic";
import "./module_a";

const db1 = MyDataBaseCLassic.instance;
db1.add({ name: "Ana", age: 30 });
db1.add({ name: "Jorge", age: 15 });
db1.add({ name: "Oto", age: 50 });
db1.show();
