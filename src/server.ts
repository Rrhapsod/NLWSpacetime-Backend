import Fastify from "fastify";
import cors from "@fastify/cors";

import { memoriesRoutes } from "./routes/memories";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, { origin: true });
fastify.register(memoriesRoutes);

fastify.listen({ port: 3333 }).then(() => {
  console.log("Servidor rodando em: http://localhost:3333");
});
