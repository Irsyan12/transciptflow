import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import prismaClientPkg from "@prisma/client";

const { PrismaClient } = prismaClientPkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

const reporters = [
  {
    name: "Ayu Pratama",
    city: "Jakarta",
    ratePerMinute: 2000,
    isAvailable: true,
  },
  {
    name: "Bima Santoso",
    city: "Bandung",
    ratePerMinute: 2200,
    isAvailable: true,
  },
  {
    name: "Citra Wulandari",
    city: "Jakarta",
    ratePerMinute: 2500,
    isAvailable: false,
  },
];

const editors = [
  {
    name: "Dewi Lestari",
    flatFee: 75000,
    isAvailable: true,
  },
  {
    name: "Eko Saputra",
    flatFee: 85000,
    isAvailable: true,
  },
];

function calculatePayment(
  durationMinutes: number,
  ratePerMinute: number,
  flatFee: number,
) {
  const reporterPayment = durationMinutes * ratePerMinute;
  const editorPayment = flatFee;
  const totalPayment = reporterPayment + editorPayment;

  return {
    reporterPayment,
    editorPayment,
    totalPayment,
  };
}

async function main() {
  await prisma.job.deleteMany();
  await prisma.reporter.deleteMany();
  await prisma.editor.deleteMany();

  const createdReporters = await Promise.all(
    reporters.map((reporter) => prisma.reporter.create({ data: reporter })),
  );

  const createdEditors = await Promise.all(
    editors.map((editor) => prisma.editor.create({ data: editor })),
  );

  const [reporterAyu, reporterBima, reporterCitra] = createdReporters;
  const [editorDewi, editorEko] = createdEditors;

  const jobData = [
    {
      caseName: "State v. Andi Prakoso",
      durationMinutes: 90,
      jobType: "PHYSICAL",
      city: "Jakarta",
      status: "NEW",
    },
    {
      caseName: "PT Sinar Abadi vs Vendor",
      durationMinutes: 120,
      jobType: "REMOTE",
      city: "Bandung",
      status: "ASSIGNED",
      reporterId: reporterBima.id,
    },
    {
      caseName: "Permohonan PK No. 18",
      durationMinutes: 75,
      jobType: "PHYSICAL",
      city: "Jakarta",
      status: "TRANSCRIBED",
      reporterId: reporterAyu.id,
      editorId: editorDewi.id,
    },
    {
      caseName: "Perdata No. 204/2026",
      durationMinutes: 100,
      jobType: "REMOTE",
      city: "Surabaya",
      status: "REVIEWED",
      reporterId: reporterCitra.id,
      editorId: editorEko.id,
    },
    {
      caseName: "Pidana No. 11/2026",
      durationMinutes: 150,
      jobType: "PHYSICAL",
      city: "Jakarta",
      status: "COMPLETED",
      reporterId: reporterAyu.id,
      editorId: editorDewi.id,
    },
  ] as const;

  await Promise.all(
    jobData.map((job) => {
      const reporter =
        job.reporterId === reporterAyu.id
          ? reporterAyu
          : job.reporterId === reporterBima.id
            ? reporterBima
            : job.reporterId === reporterCitra.id
              ? reporterCitra
              : null;

      const editor =
        job.editorId === editorDewi.id
          ? editorDewi
          : job.editorId === editorEko.id
            ? editorEko
            : null;

      const payments =
        reporter && editor
          ? calculatePayment(
              job.durationMinutes,
              reporter.ratePerMinute,
              editor.flatFee,
            )
          : undefined;

      return prisma.job.create({
        data: {
          caseName: job.caseName,
          durationMinutes: job.durationMinutes,
          jobType: job.jobType,
          city: job.city,
          status: job.status,
          reporterId: job.reporterId ?? null,
          editorId: job.editorId ?? null,
          reporterPayment: payments?.reporterPayment ?? 0,
          editorPayment: payments?.editorPayment ?? 0,
          totalPayment: payments?.totalPayment ?? 0,
        },
      });
    }),
  );

  console.log("Seed completed: reporters, editors, and jobs inserted.");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
