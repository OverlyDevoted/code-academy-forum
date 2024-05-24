import { QuestionList } from "@/components/QuestionsList";
import { MainLayout } from "@/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <QuestionList />
    </MainLayout>
  );
}
