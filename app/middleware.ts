import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: ["/", "/sign-in/[[...index]]", "/sign-up/[[...index]]"],
	secretKey: process.env.CLERK_SECRET_KEY,
});

export const runtime = "nodejs";
