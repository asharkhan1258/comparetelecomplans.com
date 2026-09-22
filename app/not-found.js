import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-px max-w-content mx-auto py-24 text-center">
      <p className="text-sm text-ink/50 mb-4">404</p>
      <h1 className="font-semibold text-3xl text-ink">Page not found</h1>
      <p className="mt-3 text-ink/65">The page you're looking for doesn't exist or moved.</p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center bg-blue text-white px-6 py-3 text-sm font-medium hover:bg-blue-dark">
        Back to home
      </Link>
    </section>
  );
}
