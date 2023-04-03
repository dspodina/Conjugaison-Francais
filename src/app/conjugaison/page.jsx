"use client";

import { useGlobalContext } from "../context";

const Conjugaison = () => {
  let { data } = useGlobalContext();
  return (
    data && (
      <div className="container mx-auto mb-36">
        <div className="mx-4">
          <h2 className="flex my-12 lg:my-16 font-alkatra">
            Conjugaison du verbe:{" "}
            <span className="uppercase ml-4 flex items-center">
              {data && data.word}
            </span>
          </h2>
          <div className="bg-beige flex flex-col lg:flex-row justify-between py-4 px-4 uppercase text-lg rounded-lg">
            <p>Infinitive: {data.infinitive.present}</p>
            <p>Le {data.wordVerbGroup}</p>
            <p>{data.wordConjugateWithWhichVerb}</p>
          </div>
          <div>
            <h3 className="mt-16 mb-4 uppercase text-xl">Indicatif</h3>
            <div className="grid gap-4 md:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Présent</h4>
                <p>{data.indicatif.present.indicatifPresentI}</p>
                <p>{data.indicatif.present.indicatifPresentYou}</p>
                <p>{data.indicatif.present.indicatifPresentHeSheIt}</p>
                <p>{data.indicatif.present.indicatifPresentWe}</p>
                <p>{data.indicatif.present.indicatifPresentYouAll}</p>
                <p>{data.indicatif.present.indicatifPresentThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Passé simple</h4>
                <p>{data.indicatif.passeSimple.indicatifPasseSimpleI}</p>
                <p>{data.indicatif.passeSimple.indicatifPasseSimpleYou}</p>
                <p>{data.indicatif.passeSimple.indicatifPasseSimpleHeSheIt}</p>
                <p>{data.indicatif.passeSimple.indicatifPasseSimpleWe}</p>
                <p>{data.indicatif.passeSimple.indicatifPasseSimpleYouAll}</p>
                <p>{data.indicatif.passeSimple.indicatifPasseSimpleThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Imparfait</h4>
                <p>{data.indicatif.imparfait.indicatifImparfaitI}</p>
                <p>{data.indicatif.imparfait.indicatifImparfaitYou}</p>
                <p>{data.indicatif.imparfait.indicatifImparfaitHeSheIt}</p>
                <p>{data.indicatif.imparfait.indicatifImparfaitWe}</p>
                <p>{data.indicatif.imparfait.indicatifImparfaitYouAll}</p>
                <p>{data.indicatif.imparfait.indicatifImparfaitThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Passé composé</h4>
                <p>{data.indicatif.passeCompose.indicatifPasseComposeI}</p>
                <p>{data.indicatif.passeCompose.indicatifPasseComposeYou}</p>
                <p>{data.indicatif.passeCompose.indicatifPasseComposeHeSheIt}</p>
                <p>{data.indicatif.passeCompose.indicatifPasseComposeWe}</p>
                <p>{data.indicatif.passeCompose.indicatifPasseComposeYouAll}</p>
                <p>{data.indicatif.passeCompose.indicatifPasseComposeThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Futur simple</h4>
                <p>{data.indicatif.futurSimple.indicatifFuturSimpleI}</p>
                <p>{data.indicatif.futurSimple.indicatifFuturSimpleYou}</p>
                <p>{data.indicatif.futurSimple.indicatifFuturSimpleHeSheIt}</p>
                <p>{data.indicatif.futurSimple.indicatifFuturSimpleWe}</p>
                <p>{data.indicatif.futurSimple.indicatifFuturSimpleYouAll}</p>
                <p>{data.indicatif.futurSimple.indicatifFuturSimpleThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Plus-que-parfait</h4>
                <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitI}</p>
                <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitYou}</p>
                <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitHeSheIt}</p>
                <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitWe}</p>
                <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitYouAll}</p>
                <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Passé antérieur</h4>
                <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurI}</p>
                <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurYou}</p>
                <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurHeSheIt}</p>
                <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurWe}</p>
                <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurYouAll}</p>
                <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Futur antérieur</h4>
                <p>{data.indicatif.futurAnterieur.indicatifFuturAnterieurI}</p>
                <p>{data.indicatif.futurAnterieur.indicatifFuturAnterieurYou}</p>
                <p>{data.indicatif.futurAnterieur.indicatifFuturAnterieurHeSheIt}</p>
                <p>{data.indicatif.futurAnterieur.indicatifFuturAnterieurWe}</p>
                <p>{data.indicatif.futurAnterieur.indicatifFuturAnterieurYouAll}</p>
                <p> {data.indicatif.futurAnterieur.indicatifFuturAnterieurThey}</p>
              </div>
            </div>
            <h3 className="mt-16 mb-4 uppercase text-xl">Subjonctif</h3>
            <div className="grid gap-4 md:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Présent</h4>
                <p>{data.subjonctif.present.subjonctifPresentI}</p>
                <p>{data.subjonctif.present.subjonctifPresentYou}</p>
                <p>{data.subjonctif.present.subjonctifPresentHeSheIt}</p>
                <p>{data.subjonctif.present.subjonctifPresentWe}</p>
                <p>{data.subjonctif.present.subjonctifPresentYouAll}</p>
                <p>{data.subjonctif.present.subjonctifPresentThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Passé</h4>
                <p>{data.subjonctif.passe.subjonctifPasseI}</p>
                <p>{data.subjonctif.passe.subjonctifPasseYou}</p>
                <p>{data.subjonctif.passe.subjonctifPasseHeSheIt}</p>
                <p>{data.subjonctif.passe.subjonctifPasseWe}</p>
                <p>{data.subjonctif.passe.subjonctifPasseYouAll}</p>
                <p>{data.subjonctif.passe.subjonctifPasseThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Imparfait</h4>
                <p>{data.subjonctif.imparfait.subjonctifImparfaitI}</p>
                <p>{data.subjonctif.imparfait.subjonctifImparfaitYou}</p>
                <p>{data.subjonctif.imparfait.subjonctifImparfaitHeSheIt}</p>
                <p>{data.subjonctif.imparfait.subjonctifImparfaitWe}</p>
                <p>{data.subjonctif.imparfait.subjonctifImparfaitYouAll}</p>
                <p>{data.subjonctif.imparfait.subjonctifImparfaitThey}</p>
              </div>
              <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
                <h4 className="mb-4">Plus-que-parfait</h4>
                <p>{data.subjonctif.plusQueParfait.subjonctifPlusQueParfaitI}</p>
                <p>{data.subjonctif.plusQueParfait.subjonctifPlusQueParfaitYou}</p>
                <p>{data.subjonctif.plusQueParfait.subjonctifPlusQueParfaitHeSheIt}</p>
                <p>{data.subjonctif.plusQueParfait.subjonctifPlusQueParfaitWe}</p>
                <p>{data.subjonctif.plusQueParfait.subjonctifPlusQueParfaitYouAll}</p>
                <p>{data.subjonctif.plusQueParfait.subjonctifPlusQueParfaitThey}</p>
              </div>
            </div>
          </div>
          <h3 className="mt-16 mb-4 uppercase text-xl">Conditionnel</h3>
          <div className="grid gap-4 md:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
              <h4 className="mb-4">Présent</h4>
              <p>{data.conditionnel.present.conditionnelPresentI}</p>
              <p>{data.conditionnel.present.conditionnelPresentYou}</p>
              <p>{data.conditionnel.present.conditionnelPresentHeSheIt}</p>
              <p>{data.conditionnel.present.conditionnelPresentWe}</p>
              <p>{data.conditionnel.present.conditionnelPresentYouAll}</p>
              <p>{data.conditionnel.present.conditionnelPresentThey}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
              <h4 className="mb-4">Passé 1re forme</h4>
              <p>{data.conditionnel.passe1reForme.conditionnelPasse1reFormeI}</p>
              <p>{data.conditionnel.passe1reForme.conditionnelPasse1reFormeYou}</p>
              <p>{data.conditionnel.passe1reForme.conditionnelPasse1reFormeHeSheIt}</p>
              <p>{data.conditionnel.passe1reForme.conditionnelPasse1reFormeWe}</p>
              <p>{data.conditionnel.passe1reForme.conditionnelPasse1reFormeYouAll}</p>
              <p>{data.conditionnel.passe1reForme.conditionnelPasse1reFormeThey}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
              <h4 className="mb-4">Passé 2e forme</h4>
              <p>{data.conditionnel.passe2eForme.conditionnelPasse2eFormeI}</p>
              <p>{data.conditionnel.passe2eForme.conditionnelPasse2eFormeYou}</p>
              <p>{data.conditionnel.passe2eForme.conditionnelPasse2eFormeHeSheIt}</p>
              <p>{data.conditionnel.passe2eForme.conditionnelPasse2eFormeWe}</p>
              <p>{data.conditionnel.passe2eForme.conditionnelPasse2eFormeYouAll}</p>
              <p>{data.conditionnel.passe2eForme.conditionnelPasse2eFormeThey}</p>
            </div>
          </div>
          <h3 className="mt-16 mb-4 uppercase text-xl">Imperatif</h3>
          <div className="grid gap-4 md:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
              <h4 className="mb-4">Présent</h4>
              <p>{data.imperatif.present.imperatifPresentFirst}</p>
              <p>{data.imperatif.present.imperatifPresentSecond}</p>
              <p>{data.imperatif.present.imperatifPresentThird}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
              <h4 className="mb-4">Passé</h4>
              <p>{data.imperatif.passe.imperatifPasseFirst}</p>
              <p>{data.imperatif.passe.imperatifPasseFirst}</p>
              <p>{data.imperatif.passe.imperatifPasseFirst}</p>
            </div>
          </div>
        </div>
      </div>
    )  
    // <h2>The word {data && data.word} not found </h2>
  );
};

export default Conjugaison;
