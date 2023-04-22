import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "About Us" }];
};

export default function About() {
  return (
    <main className="p-8">
      <h1>About Our App</h1>
      <p>This is a completely separate page from the homepage.</p>
    </main>
  );
}
