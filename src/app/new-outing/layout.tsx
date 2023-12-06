export default function NewOutingLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="fixed pt-[4.125rem] w-full h-full flex flex-col items-center">
            {children}
        </main>
    )
}