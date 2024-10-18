import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");

  return (
    <div className="p-6 flex flex-col gap-8 items-center min-h-[100svh]">
      <p>Page Not Found... {domain}</p>
      <Link href="/" className="py-2 px-10 rounded-lg border border-white">
        Return
      </Link>
    </div>
  );
}
