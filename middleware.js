import { NextResponse } from 'next/server';

export function middleware(request) {
    // This is a simplified frontend role-based check
    // In a real production app, you would verify the JWT here
    // or use a library like NextAuth.js

    const userCookie = request.cookies.get('user_role')?.value;
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/worker') && userCookie !== 'worker') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (pathname.startsWith('/customer') && userCookie !== 'customer') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (pathname.startsWith('/admin') && userCookie !== 'admin') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/worker/:path*', '/customer/:path*', '/admin/:path*'],
};
