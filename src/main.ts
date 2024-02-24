import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {join} from "path";

async function bootstrap() {
    console.log('1')
    console.log(join(process.cwd(), 'src/schema.gql'))
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(process.env.port || 3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();