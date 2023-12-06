export default function NewOutingLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="fixed pt-14 w-full h-full flex flex-col items-center">
            {children}
        </main>
    )
}