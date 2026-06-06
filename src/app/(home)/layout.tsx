import { Navbar } from "@/modules/home/ui/components/navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <main className="relative flex min-h-screen flex-col overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 -z-10 h-full w-full bg-background" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.055)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_74%)]" />
            <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_18%_18%,rgba(201,99,66,0.13),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(22,163,130,0.10),transparent_28%)]" />
            <div className="flex flex-1 flex-col px-4 pb-4">
                {children}
            </div>
        </main>
    );
};

export default Layout;
