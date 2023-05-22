import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="grid place-items-center h-screen">
            <SignUp path="/sign-up" routing="path" signInUrl="/sign-ip" />
        </div>
    );
}