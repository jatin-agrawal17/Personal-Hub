import { Icons } from "@/components/icons";

export const packages = [
  {
    title: "Django Audit Logger",
    href: "https://github.com/your-username/django-audit-logger",
    dates: "2026",
    active: true,
    description:
      "A robust Django package for tracking create, update, and delete operations across models. Provides audit trails, filters, timestamps, and export functionality for compliance and monitoring.",
    technologies: [
      "Django",
      "Python",
      "Audit Logging",
      "Signals",
      "Admin Panel",
      "CSV Export",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/jatin-agrawal17/django-audit-logger",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "PyPI",
        href: "https://pypi.org/project/audit-logger-jatin/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    stats: [
      { label: "Version", value: "0.1.3" },
      // { label: "Issues", value: "0" },
      // { label: "Downloads", value: "100+" },
    ],
    image: "",
    video: "",
  },
];