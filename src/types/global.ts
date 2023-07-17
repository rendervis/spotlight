export type Person = Readonly<{
  id: number;
  name: string;
  email: string;
  role: string;
  imageUrl: string;
  href: string;
  telephone: string;
  title: string;
  lastSeen?: string | null;
  lastSeenDateTime?: string;
}>;
