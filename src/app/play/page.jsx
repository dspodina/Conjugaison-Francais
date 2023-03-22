import TensesInput from "@/components/TensesInput.jsx";
import TensesCheckButton from "@/components/Buttons/CheckButton.jsx";
import TensesNewWord from "@/components/Buttons/NewWord.jsx";
import Finish from "src/components/Buttons/Finish.jsx";
// import Image from "next/image";
// import Link from "next/link";

const Play = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl flex justify-center mt-16 font-caveat">
          Let's learn the verbs!
        </h2>
        <div className="text-2xl flex justify-center mt-16">
          <h3><span className="text-smokypink">Aller</span> en passé composé</h3>
        </div>
        <div className="flex flex-row justify-center min-h-[40px] mt-4">
          <TensesInput />
          <TensesCheckButton />
        </div>
        <div className="flex flex-row justify-center mt-8 mb-24">
          <TensesNewWord />
          <Finish />
        </div>
      </div>
    </div>
  );
};

export default Play;
