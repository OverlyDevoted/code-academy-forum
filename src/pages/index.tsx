import { MainPage } from "@/components/MainPage";
import { UserDataProvider } from "@/utils/UserDataContext";

export default function HomePage() {
  return (
    <UserDataProvider>
      <MainPage>HELLO</MainPage>
    </UserDataProvider>
  );
}
