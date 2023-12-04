import Heading from "@/components/Heading";

export default function NewOutingLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative h-full flex flex-col items-center">
            <Heading label="New Outing" href="/dashboard" />
            {children}
        </main>
    )
}