import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name = "amit";
  taskame: String;
  edit: boolean = false;
  tasks = [];
  recover_tasks = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log('it is working')
    this.taskService.getTask().subscribe(tasks => {
      this.tasks = tasks.meta.data;
    });
  }
  addTask() {
    const task = {
      taskname: this.taskame
    }
    this.taskService.addTask(task).subscribe(tasks => {
      this.tasks = tasks.meta.data;
    });

  }
  clickToEdit() {
    this.edit = true;
  }

  updateTask(taskUpdate) {
    const task = {
      taskname: taskUpdate
    }
    this.taskService.updateTask(task, taskUpdate._id).subscribe(tasks => {
      this.tasks = tasks.meta.data;
    });
  }

  deleteTask(task, index) {
    this.taskService.deleteTask(task._id).subscribe(tasks => {
      if(tasks) {
         this.tasks.splice(index, 1);
      }
    });
  }

  getRecoverTask() {
    console.log('it is working');
    this.taskService.getRecoverTask().subscribe(tasks => {
      this.recover_tasks = tasks.meta.data;
    });
  }
  addRecoverTask(task) {
    this.taskService.addTask(task).subscribe(tasks => {
      this.tasks = tasks.meta.data;
    });

  }

}
