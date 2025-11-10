import Header from "../../Header";
import PetHero from "./PetHero";
import PetInfo from "./PetInfo";
import AdoptButton from "./AdoptButton";

export default function DetailsPage() {
  return (
    <div className="min-h-dvh bg-white flex justify-center">
      <div className="w-full max-w-[430px] px-4 pb-8">
        <Header />
        <PetHero
          image="/dummypiccat.jpeg"
          avatar="/dummypiccat.jpeg"
          location="Baton Rouge"
        />
        <PetInfo />
        <AdoptButton name="Samojed Willie" />
      </div>
    </div>
  );
}
