import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    HttpCode,
  } from '@nestjs/common';

  interface Form {
    name: string;
    age: string;
  }

  let formInfo :Form = {
    name: '',
    age: '',
  }

  @Controller('Form')
  export class FormController { 
    constructor() {}

    @Get()
    async index(): Promise<Form> {
      return formInfo;
    }

    @Put()
    async update(@Body() data: Form): Promise<Form> {
      formInfo.name = data.name,
      formInfo.age = data.age
      return data;
    }
  }