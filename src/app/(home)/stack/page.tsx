import { ChevronLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";

type Stack = {
  title: string;
  descriptions: string[];
};

export default function MyStack() {
  const stacks: Stack[] = [
    {
      title: "1. Frameworks (React, Next.js, Nestjs & Spring boot)",
      descriptions: [
        "I've been building and working on web applications with React andNext.js, using TypeScript by default to catch bugs early and keep code maintainable. I follow modern React patterns like hooks, context, and I'm currently exploring Server Components and App Router works.",
        "On the backend side, I've worked with both Java Spring Boot and Node.js (Nestjs) to build RESTful APIs, implement authentication flows, interact with relational databases and how to adopt the best practices for write clean readable code.",
        "I’ve contributed to full-stack projects where I collaborated closely with backend teams, which helped me develop a strong understanding of how frontend and backend should communicate efficiently.",
        "Btw Do you know the best thing? Typescript is cool, I love it. Please change my mind. send me a message and save me.",
      ],
    },
    {
      title: "2. Databases and ORMs (PostgreSQL, MongoDB & Prisma)",
      descriptions: [
        "I have experience working with both SQL and NoSQL databases, including PostgreSQL, MongoDB, and MySQL. I understand the differences between them and when to use each type of database.",
        "Postgres is my go-to database. I've been using Prisma as an ORM to interact with databases in a type-safe and fun way without many struggles.",
        "Despite that I also have expereince using Hibernate and JPA for Java applications.",
      ],
    },
    {
      title: "3. Cloud Services (AWS & Azure)",
      descriptions: [
        "I have experience working on applications on AWS and Azure.",
        "I understand the basics of cloud architecture and how to leverage cloud services for scalability and reliability.",
      ],
    },
    {
      title: "4. Tools (Git, Docker, CI/CD & Testing)",
      descriptions: [
        "I use Git for version control and have experience with branching strategies, pull requests, and code reviews.",
        "I have experience with Docker for containerization, which helps me create consistent development environments and deploy applications easily.",
        "I have experience with CI/CD pipelines to automate testing and deployment processes, ensuring that code changes are integrated smoothly and deployed reliably.",
      ],
    },
    {
      title: "5. Coding Patterns",
      descriptions: [
        "I have experience with design patterns like MVC, Singleton, Factory, and Observer.",
        "I understand the principles of SOLID and how to apply them in real-world projects.",
      ],
    },
  ];
  return (
    <main className="w-full py-16 px-8 md:px-0">
      <Link
        href="/"
        className="font-light text-sm text-neutral-500 hover:text-blue-500"
      >
        <div className="flex items-center">
          <ChevronLeft className="h-4 w-4" />
          navigate back
        </div>
      </Link>
      <h2 className="text-lg font-medium mb-8 tracking-tighter mt-8">
        My Stack
      </h2>
      <h3 className="dark:text-neutral-30 mb-10">
        Here&apos;s where I&apos;m currently most productive:
      </h3>
      {stacks.map((stack, index) => (
        <div key={index} className="mb-16">
          <h3 className="font-medium">{stack.title}</h3>
          <div className="flex flex-col gap-4 mt-4">
            {stack.descriptions.map((description, index) => (
              <div key={index} className="flex items-start justify-start gap-2">
                <div>
                  <ChevronsRight className="h-4 mt-1 opacity-50" />
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 ">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
