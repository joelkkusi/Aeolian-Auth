import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <div className="ml-6 mt-6">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
}