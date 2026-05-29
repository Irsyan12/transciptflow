import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import prismaClientPkg from "@prisma/client";
import { Pool } from "pg";

const { PrismaClient } = prismaClientPkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

async function disconnectPrisma() {
  await prisma.$disconnect();
  await pool.end();
}

export { prisma, disconnectPrisma };
