import { Button, Container } from "@/components/ui";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <LogoMark className="h-14 w-14" />
        <p className="mt-6 text-6xl font-bold tracking-tight text-brand-300">
          404
        </p>
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="white" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="whatsapp" size="lg">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
