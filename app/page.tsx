//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="ml-6 mt-6">
            <UserButton />
        </div>
    )
}