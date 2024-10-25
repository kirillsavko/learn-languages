import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';
import { routes } from '@/constants/routes'

export function middleware(req: NextRequest) {
  const cookie = req.headers.get('cookie') || '';
  const { token } = parse(cookie);

  if (!token) {
    return NextResponse.redirect(new URL(routes.login, req.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch (e) {
    return NextResponse.redirect(new URL(routes.login, req.url));
  }
}

export const config = {
  matcher: [],
}
