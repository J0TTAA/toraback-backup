import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })

  app.setGlobalPrefix("api")

  const port = process.env.PORT || 3000
  await app.listen(port, "0.0.0.0", () => {
    console.log(`Application is running on: http://localhost:${port}/api`)
  })
}
bootstrap()