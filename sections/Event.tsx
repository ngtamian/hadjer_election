"use client";

export function Event() {
  const events = [
    { date: "Samedi 9 Mai 2026", desc: "Hotel Le Meridien Chari" },
    { date: "Samedi 16 Mai 2026", desc: "Cafe Hermopolis | N'Djamena", link: true },
    { date: "Samedi 23 Mai 2026", desc: "Institut français du TCHAD - N'Djamena" },
    { date: "Dimanche le 24 Mai mai 2026", desc: "RDV à l’Union Française" },
  ];

  return (
    <section id="event" className="py-28 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Bloc gauche : titre */}
          <div className="relative">
           <div className="bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] rounded-3xl p-12 flex items-center justify-center shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-center leading-tight tracking-wide text-white">
               ÉVÈNEMENTS <br />
              CALENDRIER
              </h2>
            </div>
          </div>

          {/* Bloc droit : liste des événements */}
          <div className="space-y-10">
            <h3 className="font-semibold tracking-widest uppercase text-sm text-gray-500">
              N'Djamèna - Tchad
            </h3>

            {events.map((event, index) => (
              <div
                key={index}
                className="group border-b border-gray-200 pb-6 transition hover:border-gray-400"
              >
                <p className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition underline underline-offset-4 decoration-gray-300">
                  {event.date}
                </p>
                <p
                  className={`mt-2 text-sm ${
                    event.link
                      ? "text-gray-500 underline hover:text-gray-900 cursor-pointer"
                      : "text-gray-600"
                  }`}
                >
                  {event.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}