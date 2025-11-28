import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server"
import { chain } from "@/middleware/chain"
import { withIntlMiddleware } from "@/middleware/with-Intl-middleware"

// Create a chain function
const baseMiddleware = chain(withIntlMiddleware)

const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()
  const event = {} as NextFetchEvent
  return await baseMiddleware(req, event, res)
}

export default middleware

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|ready).*)"]
}
