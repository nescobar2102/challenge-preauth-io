import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Challenge-preauth-io Norbelys') 
    .setDescription('API to find subsets that sum to a target')
    .setVersion('1.0') 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-challenge', app, document);


  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
