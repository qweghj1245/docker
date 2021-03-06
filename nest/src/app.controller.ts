import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/post')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res) {
    res.send({ msg: 123456 });
  }
}
