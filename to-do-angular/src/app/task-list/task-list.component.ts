import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    new Task('Mua Iphone 15'),
    new Task('Mua xe Bentley'),
    new Task('Gui 500tr cho Bo'),
    new Task('Du Lich Chau Au'),
    new Task('Nhan Offer $100K')
  ];

  @ViewChild('newTaskInput') newTaskInput : any;

  ngOnInit() : void {}
  getNewTaskInput() : string {
    return this.newTaskInput.nativeElement.value;
  }
  clearNewTaskInput() : void {
    this.newTaskInput.nativeElement.value = '';
  }

  addTask() : void {
    // confirm(`Do you want to add task: ${newTaskName}`);

    this.tasks.push(new Task(this.getNewTaskInput()));

    this.clearNewTaskInput();
  }

  removeTask(taskNameToRemove : string) : void
  {
    // confirm(`Do you want to remove task: ${taskNameToRemove}`);

    this.tasks = this.tasks.filter(element => element.name !== taskNameToRemove)
  }

  toggleTaskDoneStatus(taskToMark : Task) : void {
    // alert(`Task ${taskToMark.name} is Done!`);

    taskToMark.isDone = !taskToMark.isDone;
  }
}

class Task {
  public name : string;
  public isDone : boolean = false;

  constructor(taskName : string) {
    this.name = taskName;
  }
}
