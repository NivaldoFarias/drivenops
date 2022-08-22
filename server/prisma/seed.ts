import prisma from '../src/database.js';

async function main() {
  console.log('Running Seed...');

  const students = [
    { name: 'Diego Pinho' },
    { name: 'Bruna Hamori' },
    { name: 'Maria Fernanda' },
  ];

  await prisma.student.createMany({
    data: students,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
