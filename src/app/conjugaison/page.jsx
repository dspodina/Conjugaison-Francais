"use client";

import { useGlobalContext } from "../context";

const Conjugaison = () => {
  let { data } = useGlobalContext();
  return (
    data && (
      <div className="container mx-auto">
        <h2 className="text-4xl flex my-12 font-caveat">
          Conjugaison du verbe:{" "}
          <span className="uppercase"> {data && data.word}</span>
        </h2>
        {/* <p>{data.wordConjugateWithWhichVerb}</p> */}
        <div>
          <h3 className="text-3xl mt-16 mb-4">Indicatif</h3>
          <div className="grid gap-10 rid-cols-3 md:grid-cols-4 py-2">
            <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
              <h4 className="text-xl mb-4">Présent</h4>
              <p>{data.indicatif.present.indicatifPresentI}</p>
              <p>{data.indicatif.present.indicatifPresentYou}</p>
              <p>{data.indicatif.present.indicatifPresentHeSheIt}</p>
              <p>{data.indicatif.present.indicatifPresentWe}</p>
              <p>{data.indicatif.present.indicatifPresentYouAll}</p>
              <p>{data.indicatif.present.indicatifPresentThey}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
              <h4 className="text-xl mb-4">Passé simple</h4>
              <p>{data.indicatif.passeSimple.indicatifPasseSimpleI}</p>
              <p>{data.indicatif.passeSimple.indicatifPasseSimpleYou}</p>
              <p>{data.indicatif.passeSimple.indicatifPasseSimpleHeSheIt}</p>
              <p>{data.indicatif.passeSimple.indicatifPasseSimpleWe}</p>
              <p>{data.indicatif.passeSimple.indicatifPasseSimpleYouAll}</p>
              <p>{data.indicatif.passeSimple.indicatifPasseSimpleThey}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
              <h4 className="text-xl mb-4">Imparfait</h4>
              <p>{data.indicatif.imparfait.indicatifImparfaitI}</p>
              <p>{data.indicatif.imparfait.indicatifImparfaitYou}</p>
              <p>{data.indicatif.imparfait.indicatifImparfaitHeSheIt}</p>
              <p>{data.indicatif.imparfait.indicatifImparfaitWe}</p>
              <p>{data.indicatif.imparfait.indicatifImparfaitYouAll}</p>
              <p>{data.indicatif.imparfait.indicatifImparfaitThey}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
              <h4 className="text-xl mb-4">Passé composé</h4>
              <p>{data.indicatif.passeCompose.indicatifPasseComposeI}</p>
              <p>{data.indicatif.passeCompose.indicatifPasseComposeYou}</p>
              <p>{data.indicatif.passeCompose.indicatifPasseComposeHeSheIt}</p>
              <p>{data.indicatif.passeCompose.indicatifPasseComposeWe}</p>
              <p>{data.indicatif.passeCompose.indicatifPasseComposeYouAll}</p>
              <p>{data.indicatif.passeCompose.indicatifPasseComposeThey}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
              <h4 className="text-xl mb-4">Futur simple</h4>
              <p>{data.indicatif.futurSimple.indicatifFuturSimpleI}</p>
              <p>{data.indicatif.futurSimple.indicatifFuturSimpleYou}</p>
              <p>{data.indicatif.futurSimple.indicatifFuturSimpleHeSheIt}</p>
              <p>{data.indicatif.futurSimple.indicatifFuturSimpleWe}</p>
              <p>{data.indicatif.futurSimple.indicatifFuturSimpleYouAll}</p>
              <p>{data.indicatif.futurSimple.indicatifFuturSimpleThey}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
              <h4 className="text-xl mb-4">Plus-que-parfait</h4>
              <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitI}</p>
              <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitYou}</p>
              <p>
                {data.indicatif.plusQueParfait.indicatifPlusQueParfaitHeSheIt}
              </p>
              <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitWe}</p>
              <p>
                {data.indicatif.plusQueParfait.indicatifPlusQueParfaitYouAll}
              </p>
              <p>{data.indicatif.plusQueParfait.indicatifPlusQueParfaitThey}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
              <h4 className="text-xl mb-4">Passé antérieur</h4>
              <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurI}</p>
              <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurYou}</p>
              <p>
                {data.indicatif.passeAnterieur.indicatifPasseAnterieurHeSheIt}
              </p>
              <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurWe}</p>
              <p>
                {data.indicatif.passeAnterieur.indicatifPasseAnterieurYouAll}
              </p>
              <p>{data.indicatif.passeAnterieur.indicatifPasseAnterieurThey}</p>
            </div>
            <div className="bg-white p-6 max-w-sm rounded overflow-hidden shadow-lg">
              <h4 className="text-xl mb-4">Futur antérieur</h4>
              <p>{data.indicatif.futurAnterieur.indicatifFuturAnterieurI}</p>
              <p>{data.indicatif.futurAnterieur.indicatifFuturAnterieurYou}</p>
              <p>
                {data.indicatif.futurAnterieur.indicatifFuturAnterieurHeSheIt}
              </p>
              <p>{data.indicatif.futurAnterieur.indicatifFuturAnterieurWe}</p>
              <p>
                {data.indicatif.futurAnterieur.indicatifFuturAnterieurYouAll}
              </p>
              <p>{data.indicatif.futurAnterieur.indicatifFuturAnterieurThey}</p>
            </div>
          </div>
        </div>
        <h3 className="text-3xl mt-16 mb-4">Subjonctif</h3>
        <div className="grid gap-8 grid-cols-4 py-2">
          <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
            <h4 className="text-xl mb-4">Présent</h4>
            <p>{data.indicatif.present.indicatifPresentI}</p>
            <p>{data.indicatif.present.indicatifPresentYou}</p>
            <p>{data.indicatif.present.indicatifPresentHeSheIt}</p>
            <p>{data.indicatif.present.indicatifPresentWe}</p>
            <p>{data.indicatif.present.indicatifPresentYouAll}</p>
            <p>{data.indicatif.present.indicatifPresentThey}</p>
          </div>
          <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
            <h4 className="text-xl mb-4">Passé simple</h4>
            <p>{data.indicatif.passeSimple.indicatifPasseSimpleI}</p>
            <p>{data.indicatif.passeSimple.indicatifPasseSimpleYou}</p>
            <p>{data.indicatif.passeSimple.indicatifPasseSimpleHeSheIt}</p>
            <p>{data.indicatif.passeSimple.indicatifPasseSimpleWe}</p>
            <p>{data.indicatif.passeSimple.indicatifPasseSimpleYouAll}</p>
            <p>{data.indicatif.passeSimple.indicatifPasseSimpleThey}</p>
          </div>
          <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
            <h4 className="text-xl mb-4">Imparfait</h4>
            <p>{data.indicatif.imparfait.indicatifImparfaitI}</p>
            <p>{data.indicatif.imparfait.indicatifImparfaitYou}</p>
            <p>{data.indicatif.imparfait.indicatifImparfaitHeSheIt}</p>
            <p>{data.indicatif.imparfait.indicatifImparfaitWe}</p>
            <p>{data.indicatif.imparfait.indicatifImparfaitYouAll}</p>
            <p>{data.indicatif.imparfait.indicatifImparfaitThey}</p>
          </div>
          <div className="bg-white p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
            <h4 className="text-xl mb-4">Passé composé</h4>
            <p>{data.indicatif.passeCompose.indicatifPasseComposeI}</p>
            <p>{data.indicatif.passeCompose.indicatifPasseComposeYou}</p>
            <p>{data.indicatif.passeCompose.indicatifPasseComposeHeSheIt}</p>
            <p>{data.indicatif.passeCompose.indicatifPasseComposeWe}</p>
            <p>{data.indicatif.passeCompose.indicatifPasseComposeYouAll}</p>
            <p>{data.indicatif.passeCompose.indicatifPasseComposeThey}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Conjugaison;
