import { User } from "../model/user";

export class MyDataBaseCLassic {
  private static _instance: MyDataBaseCLassic | null = null;
  private _users: Userer[] = [];

  private constructor() {}

  public static get instance(): MyDataBaseCLassic {
    if (MyDataBaseCLassic._instance === null) {
      MyDataBaseCLassic._instance = new MyDataBaseCLassic();
    }

    return MyDataBaseCLassic.instance;
  }

  add(user: User) {
    this._users.push(user);
  }

  remove(index: number) {
    this._users.splice(index, 1);
  }

  show() {
    for (const user of this._users) {
      console.log(user);
    }
  }
}
