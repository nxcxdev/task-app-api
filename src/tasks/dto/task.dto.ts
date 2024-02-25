import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	title: string;
	description: string;
}

export class UpdateTaskDto {
	title?: string;
	description?: string;
	status?: TaskStatus;
}
