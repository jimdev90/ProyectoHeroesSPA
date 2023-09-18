import { AuthProvider } from "./auth/index.js";
import {AppRouter} from "./router/AppRouter.jsx";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
