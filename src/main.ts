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

  console.log("DEBUG - process.env.PORT =", process.env.PORT)
  const port = process.env.PORT || 3000

  await app.listen(port, "0.0.0.0")
  console.log(`🚀 Server running on port ${port}`)
}
bootstrap()