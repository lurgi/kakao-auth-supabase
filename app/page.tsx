import AuthContent from "@/components/AuthContent";
import TextSend from "@/components/TextSend";

export default function Home() {
  return (
    <main className="h-full">
      <div className="font-semibold h-full flex flex-col items-center justify-center">
        <AuthContent />
        <TextSend />
      </div>
    </main>
  );
}
