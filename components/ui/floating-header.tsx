'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Grid2x2PlusIcon, MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

export function FloatingHeader() {
    const [open, setOpen] = React.useState(false);
    const { isDark } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/#home' },
        { label: 'Features', href: '/#features' },
        { label: 'Testimonials', href: '/#testimonials' },
        { label: 'Pricing', href: '/#pricing' },
    ];

    return (
        <header
            className={cn(
                'sticky top-5 z-50',
                'mx-auto w-full max-w-5xl rounded-lg border shadow',
                'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
            )}
        >
            <nav className="mx-auto flex items-center justify-between p-1.5">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src={
                            mounted
                                ? isDark
                                    ? '/assets/resumeai_logo_white.webp'
                                    : '/assets/resumeai_logo_black.webp'
                                : '/assets/resumeai_logo_white.webp'
                        }
                        alt="Resume AI"
                        width={120}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <div className="hidden sm:flex items-center gap-2">
                        <Button size="sm" variant="ghost" asChild>
                            <Link href="https://app.cvai.dev/dashboard">Log In</Link>
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-accent to-[#ff8533] border-accent text-white shadow-[0_4px_14px_rgba(255,102,0,0.25)] hover:opacity-90">
                            <Link href="https://app.cvai.dev/dashboard">Get Started</Link>
                        </Button>
                    </div>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => setOpen(!open)}
                            className="lg:hidden"
                        >
                            <MenuIcon className="size-4" />
                        </Button>
                        <SheetContent
                            className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
                            showClose={false}
                            side="left"
                        >
                            {/* Mobile Logo */}
                            <div className="flex items-center gap-2 px-4 pt-12 pb-4">
                                <Image
                                    src={
                                        mounted
                                            ? isDark
                                                ? '/assets/resumeai_logo_white.webp'
                                                : '/assets/resumeai_logo_black.webp'
                                            : '/assets/resumeai_logo_white.webp'
                                    }
                                    alt="Resume AI"
                                    width={100}
                                    height={33}
                                    className="object-contain"
                                />
                            </div>

                            <div className="grid gap-y-2 overflow-y-auto px-4 py-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: 'justify-start',
                                        })}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <SheetFooter className="gap-2 px-4 pb-6">
                                <Button variant="outline" className="w-full" asChild>
                                    <Link href="https://app.cvai.dev/dashboard">Log In</Link>
                                </Button>
                                <Button className="w-full bg-gradient-to-r from-accent to-[#ff8533] border-accent text-white hover:opacity-90" asChild>
                                    <Link href="https://app.cvai.dev/dashboard">Get Started</Link>
                                </Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
