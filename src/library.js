class addTask {
  constructor() {
    this.taskArr = [];
    this.add = (obj) => {
      this.taskArr.push(obj);
    };
    this.remove = (obj) => {
      this.taskArr.splice(obj, 1);
    };
  }
}

const library = new addTask();
export default library;
