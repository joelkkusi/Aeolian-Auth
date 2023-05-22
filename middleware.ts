import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: ["/", "/sign-in", "/sign-up"],
	secretKey: process.env.CLERK_SECRET_KEY,
});

export const runtime = "nodejs";

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
