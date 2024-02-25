import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
	private tasks: Task[] = [
		{
			id: '2ef9ac10-b0fc-4db5-8cfd-02223ea4a288',
			title: 'first task',
			description: 'some task',
			status: TaskStatus.IN_PROGRESS,
		},
	];
	getAllTasks() {
		return this.tasks;
	}
	createTask(title: string, description: string) {
		const task = {
			id: v4(),
			title,
			description,
			status: TaskStatus.PENDING,
		};
		this.tasks.push(task);
		return task;
	}

	getTaskById(id: string): Task {
		return this.tasks.find((task) => task.id === id);
	}

	updateTask(id: string, updatedFields: UpdateTaskDto): Task {
		const task = this.getTaskById(id);
		const updatedTask = Object.assign(task, updatedFields);
		this.tasks = this.tasks.map((task) =>
			task.id === id ? updatedTask : task,
		);
		return updatedTask;
	}
	deleteTask(id: string) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}
}
