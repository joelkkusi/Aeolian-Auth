import {
    RedirectToSignIn,
    SignedIn,
    SignedOut,
    UserButton,
    UserProfile,
} from "@clerk/nextjs";

export default function Home() {
    return (
        <body className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <div>
                <SignedOut>
                    <RedirectToSignIn />
                </SignedOut>
                <SignedIn>
                    <div className="flex justify-around">
                        <div className="">
                            <UserButton />
                        </div>
                        <div>
                            <UserProfile />
                        </div>
                        <div>
                            <button className="rounded-full ...">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </SignedIn>
            </div>
        </body>
    );
}
