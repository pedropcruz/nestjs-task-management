import { IsEnum, IsString } from 'class-validator'
import { TaskStatus } from '../task.model'

export class GetTasksFilterDto {
  @IsEnum(TaskStatus)
  status?: TaskStatus

  @IsString()
  search?: string
}
