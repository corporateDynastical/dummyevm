"use client";
import { useRef, useState } from "react";

// 👉 converts 1 → १ , 2 → २ ... 9 → ९
const toMarathi = (num: number) =>
  num
    .toString()
    .replace(/[0-9]/g, (d) => "०१२३४५६७८९"[parseInt(d)]);

const SoundCheck = () => {
  const buttonSoundRef = useRef<HTMLAudioElement | null>(null);
  const otherButtonSoundRef = useRef<HTMLAudioElement | null>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const playButtonSound = (index: number) => {
    buttonSoundRef.current?.play();
    setActiveRow(index);
  };

  const playOtherButtonSound = (index: number) => {
    otherButtonSoundRef.current?.play();
    setActiveRow(index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 px-4 md:px-24 py-6 text-black dark:text-white">
      <h1 className="text-center text-xl font-bold mb-4 pt-2">
        छत्रपती संभाजीनगर महानगरपालिका सार्वत्रिक निवडणूक - डमी मतदान यंत्र
      </h1>

      <div className="text-center mb-4 pt-2">
        <span className="bg-blue-700 font-bold text-white px-4 py-2 inline-block rounded-full">
          डेमो मतदानासाठी घड्याळ निशाणी समोरील निळे बटन दबावे
        </span>
      </div>

      <div className="text-center mb-4 pt-2">
        <span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded dark:bg-yellow-300">
          प्रभाग क्र. १० (अ) चे अधिकृत उमेदवार
        </span>
      </div>

      <div className="overflow-x-hidden">
        <table className="w-full border-2 border-gray-400 dark:border-gray-600 table-fixed">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border-2 px-1 py-1 text-center text-xs font-bold">क्रमांक</th>
              <th className="border-2 px-1 py-1 text-center text-xs font-bold">नाव</th>
              <th className="border-2 px-1 py-1 text-center text-xs font-bold">फोटो</th>
              <th className="border-2 px-1 py-1 text-center text-xs font-bold">निशाणी</th>
              <th className="border-2 px-1 py-1 text-center text-xs font-bold">बत्ती</th>
              <th className="border-2 px-1 py-1 text-center text-xs font-bold">बटन</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(9)].map((_, index) => (
              <tr key={index} className="bg-blue-300 dark:bg-gray-800">
                {/* क्रमांक */}
                <td className="border-2 text-center font-bold text-sm">
                  {toMarathi(index + 1)}
                </td>

                {/* नाव */}
                <td className="border-2 text-center font-bold text-sm">
                  {index === 0 ? "सौ. अंबिका लक्ष्मण पखाले" : index === 8 ? "नोटा" : ""}
                </td>

                {/* फोटो */}
                <td className="border-2 text-center">
                  {index === 0 ? (
                    <img src="/user.png" className="w-12 h-12 mx-auto object-cover" />
                  ) : (
                    <div className="w-10 h-10 mx-auto" />
                  )}
                </td>

                {/* निशाणी */}
                <td className="border-2 text-center">
                  {index === 0 ? (
                    <img src="/symbol-bartan.png" className="w-10 h-10 mx-auto object-contain" />
                  ) : (
                    <div className="w-10 h-10 mx-auto" />
                  )}
                </td>

                {/* बत्ती */}
                <td className="border-2 text-center bg-white dark:bg-gray-800">
                  <div
                    className={`w-5 h-5 rounded-full mx-auto ${
                      activeRow === index ? "bg-red-600" : "bg-gray-300 dark:bg-gray-500"
                    }`}
                  ></div>
                </td>

                {/* बटन */}
                <td className="border-2 text-center bg-white dark:bg-gray-800">
                  <button
                    onClick={() =>
                      index === 0 ? playButtonSound(index) : playOtherButtonSound(index)
                    }
                    className={`rounded-full w-10 h-6 md:w-14 md:h-7 ${
                      index === 0 ? "bg-green-500" : "bg-blue-700"
                    }`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-center text-xl font-bold mb-4 mt-6">
        <span className="text-red-600">घड्याळ</span> या निशाणी समोरील बटन दाबून{" "}
        <span className="text-red-600">सौ. अंबिका लक्ष्मण पखाले </span> यांना प्रचंड बहुमतांनी विजय करा.
      </h1>

      <div className="text-center mb-4 pt-2">
        <span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded">
          मतदान - गुरुवार, दि. १५ जानेवारी २०२६ रोजी सकाळी ७ ते सायं ६ वाजे पर्यंत.
        </span>
      </div>

      <audio ref={buttonSoundRef} src="/sound1.mp3" />
      <audio ref={otherButtonSoundRef} src="/sound2.mp3" />
    </section>
  );
};

export default SoundCheck;
