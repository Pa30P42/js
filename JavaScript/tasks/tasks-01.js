const register = {
  modules: [
    {
      module1: {
        homeTaskCount: 3,
        doneTasks: 2,
      },
    },
    {
      module2: {
        homeTaskCount: 5,
        doneTasks: 3,
      },
    },
    {
      module3: {
        homeTaskCount: 3,
        doneTasks: 2,
      },
    },
    {
      module4: {
        homeTaskCount: 5,
        doneTasks: 0,
      },
    },
    {
      module5: {
        homeTaskCount: 3,
        doneTasks: 0,
      },
    },
    {
      module6: {
        homeTaskCount: 7,
        doneTasks: 0,
      },
    },
  ],
  currentModule: 3,
  score: 0, //percentages

  getTotalPercentage() {
    let moduleLength = this.modules.length;
    this.score = Math.round((this.currentModule / moduleLength) * 100);
    return `${this.score}%`;
  },
  getStudentDonePercentage() {
    let totalSumTask = 0;
    let totalDoneTask = 0;
    for (const module of this.modules) {
      let values = Object.values(module);
      values = values[0];
      for (const task in values) {
        if (task === "homeTaskCount") {
          totalSumTask += values[task];
        }
        if (task === "doneTasks") {
          totalDoneTask += values[task];
        }
      }
    }
    let donePercentage = `${Math.round((totalDoneTask / totalSumTask) * 100)}%`;
    return donePercentage;
  },
  addNewModule() {
    let result = {};
    let moduleNum = `module${this.modules.length + 1}`;
    result[moduleNum] = {
      homeTaskCount: 0,
      doneTasks: 0,
    };
    return this.modules.push(result);
  },
  removeModule(module) {
    let remove = [];
    for (let element of this.modules) {
      if (Object.keys(element).includes(module)) {
        let spliceIndex = this.modules.indexOf(element);
        remove.push(this.modules.splice(spliceIndex, 1));
      }
    }
    return remove;
  },
  changeTaskInModule(module, task) {
    let newModule = {};
    for (let element of this.modules) {
      if (Object.keys(element).includes(module)) {
        let newValue = Object.values(element);
        newValue = newValue[0];
        newValue.homeTaskCount = task;
        newModule = newValue;
      }
    }
    return newModule;
  },
};

// const register = {
//   modules: [
//     {
//       module1: {
//         homeTaskCount: 3,
//         doneTasks: 2,
//       },
//     },
//     {
//       module2: {
//         homeTaskCount: 5,
//         doneTasks: 3,
//       },
//     },
//     {
//       module3: {
//         homeTaskCount: 3,
//         doneTasks: 2,
//       },
//     },
//     {
//       module4: {
//         homeTaskCount: 5,
//         doneTasks: 0,
//       },
//     },
//     {
//       module5: {
//         homeTaskCount: 3,
//         doneTasks: 0,
//       },
//     },
//     {
//       module6: {
//         homeTaskCount: 7,
//         doneTasks: 0,
//       },
//     },
//   ],
//   currentModule: 3,
//   score: 0, //percentages
//   // посчитать какой процент выполнения курса у студента от общей программы курса,
//   // посчитать текцщий процент выполнения ДЗ студентом исходя из того, что пройдено всего 3 модуля курса
//   // предусмотреть возможность добавления и удаления из/в курс новых модулей
//   // предусмотреть возможность добавления и изменения новых заданий в конкретный модуль
//   getTotalPercentage() {
//     let moduleLength = this.modules.length;

//     this.score = (this.currentModule / moduleLength) * 100;
//     console.log(`${this.score}%`);
//   },
//   getStudentDonePercentage() {
//     let totalSumTask = 0;
//     let totalDoneTask = 0;

//     for (const module of this.modules) {
//       let kays = Object.values(module);

//       kays = kays[0];

//       console.log(kays);

//       for (const task in kays) {
//         if (task === "homeTaskCount") {
//           totalSumTask += kays[task];
//         }

//         if (task === "doneTasks") {
//           totalDoneTask += kays[task];
//         }
//       }
//     }
//     console.log(totalDoneTask);
//     console.log(totalSumTask);

//     let donePercentage = Math.round((totalDoneTask / totalSumTask) * 100);
//     console.log(`${donePercentage}%`);
//   },
//   addNewModule(module) {
//     let result = {};
//     let moduleNum = `module${this.modules.length + 1}`;
//     // console.log(moduleNum);
//     result[moduleNum] = {
//       homeTaskCount: 0,
//       doneTasks: 0,
//     };
//     this.modules.push(result);
//     console.log(result);
//   },
//   removeModule(module) {
//     for (let element of this.modules) {
//       if (Object.keys(element).includes(module)) {
//         let spilceIndex = this.modules.indexOf(element);
//         console.log(spilceIndex);
//         this.modules.splice(spilceIndex, 1);
//         // spilceIndex.splice(element).indexOf(element, 1);
//       }
//     }
//     // this.modules.pop();
//     // console.log(this.modules);
//   },
//   changeTaskInModule(module, task) {
//     for (let element of this.modules) {
//       if (Object.keys(element).includes(module)) {
//         let newValue = Object.values(element);
//         newValue = newValue[0];
//         newValue.homeTaskCount = task;
//       }
//     }
//   },
// };

// register.addNewModule();
// register.addNewModule();
// // register.removeModule();
// register.removeModule("module7");
// register.removeModule("module2");

// // register.getTotalPercentage();
// register.getStudentDonePercentage();
// // сумма всех хомтаскаккоунт
// console.log(register);

// register.changeTaskInModule("module3", 20);
