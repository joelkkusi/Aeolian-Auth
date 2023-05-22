import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {

    return (
        <body className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <div>
                <SignedOut>
                    <RedirectToSignIn />
                </SignedOut>
                <SignedIn>
                    <div className="ml-6 mt-6">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </SignedIn>
            </div>
        </body>

    );
}