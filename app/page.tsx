import {
    RedirectToSignIn,
    SignedIn,
    SignedOut,
    UserButton,
    UserProfile,
} from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
            <SignedIn>
                <div className="ml-6 mt-6">
                    <UserButton />
                </div>
            </SignedIn>
        </div>
    );
}
