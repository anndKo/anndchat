import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 👇 ĐÃ SỬA: Đổi BrowserRouter thành HashRouter
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"; 
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import PinLock from "./pages/PinLock";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* 👇 ĐÃ SỬA: Dùng HashRouter thay cho BrowserRouter */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/pin-lock" element={<PinLock />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;