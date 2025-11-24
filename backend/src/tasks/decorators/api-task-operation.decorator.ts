import {
  applyDecorators,
  HttpStatus,
  NotFoundException,
  Type,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

interface ApiTaskOperationOptions {
  summary: string;
  successDescription: string;
  successStatus: HttpStatus.OK | HttpStatus.NO_CONTENT;
  responseType?: Type<unknown>;
}

/*

This decorator is used to document API operations related to tasks. 
It standardizes the Swagger documentation for common responses and success responses for task-related endpoints. 

*/
export function ApiTaskOperation(options: ApiTaskOperationOptions) {
  const commonResponses = [
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'Task not found.',
      example: new NotFoundException(
        'Task with ID {id} not found.',
      ).getResponse(),
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Invalid UUID format.',
      example: {
        message: 'Validation failed (uuid is expected)',
        error: 'Bad Request',
        statusCode: 400,
      },
    }),
  ];

  const successResponse = ApiResponse({
    status: options.successStatus,
    description: options.successDescription,
    type: options.responseType,
  });

  return applyDecorators(
    ApiOperation({ summary: options.summary }),
    ApiParam({
      name: 'id',
      description: 'UUID of the task',
    }),
    successResponse,
    ...commonResponses,
  );
}
