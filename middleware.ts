import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // Return true if user is authenticated
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
