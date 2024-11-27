import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {getUserLogged} from './services/userService';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('cookieKey')?.value;

  if (request.nextUrl.pathname.startsWith('/admin')) {
    const user = await getUserLogged({token: token as string});
    if (token === undefined) {
      return {user: undefined};
    }
    if (!user.isAdmin) {
      return NextResponse.redirect(new URL('/profil', request.url));
    }
    return NextResponse.next();
  }
  if (
    request.nextUrl.pathname.startsWith('/prise-de-rdv') &&
    token === undefined
  ) {
    return NextResponse.redirect(new URL('/connexion', request.url));
  }
}
