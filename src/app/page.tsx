import Button from "@/components/ui/primitives/Button";


import Input from "@/components/ui/forms/Input";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 p-6">

      <Button>Get Started</Button>

      <Button variant="outline">
        View Details
      </Button>

      <Input
        label="Email Address"
        placeholder="Enter your email"
        type="email"
      />

      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
        error="Please enter a valid password"
      />

    </main>
  );
}
