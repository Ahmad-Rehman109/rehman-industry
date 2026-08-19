// TEMPORARY diagnostic route — used once to determine which protocol header
// Cloudflare passes to the Worker. Delete after the https redirect is in place.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const h = request.headers;
  return Response.json({
    url: request.url,
    "x-forwarded-proto": h.get("x-forwarded-proto"),
    "cf-visitor": h.get("cf-visitor"),
    "x-forwarded-host": h.get("x-forwarded-host"),
    host: h.get("host"),
  });
}
