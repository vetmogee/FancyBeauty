import Navbar from '../components/sections/navbar';
import Footer from '../components/sections/footer';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const AbgPage = () => {
  const navigate = useNavigate();

  // Dummy handlers to pass to Navbar/Footer, all route to home
  const goHome = () => navigate('/');
  const noop = () => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navbar with all buttons routing to home */}
      <Navbar
        activeSection={''}
        scrollToSection={goHome}
        handlePriceListSectionClick={goHome}
        activePriceList={'schlieren'}
        handlePriceListClick={goHome}
      />
      <div className="pt-24 pb-16 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-4 text-pink-700">ALLGEMEINE GESCHÄFTSBEDINGUNGEN (AGB)</h1>
        <div className="max-w-2xl text-left text-gray-800 bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
          <p className="mb-2 font-semibold">OBeauty<br/>
          Adresse: Wiesenstrasse 12a, 8952 Schlieren<br/>
          Tel.: 077 981 17 88<br/>
          Fancy by OBeauty<br/>
          Adresse: Bleicherweg 20, 8002 Zürich<br/>
          Tel.: 078 200 26 99</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">1. Allgemeine Bestimmungen</h2>
          <p className="mb-4">Diese allgemeinen Geschäftsbedingungen regeln die rechtlichen Beziehungen zwischen OBeauty – Fancy und den Kunden, die die Dienstleistungen des Studios in Anspruch nehmen. Wir bieten Dienstleistungen im Bereich Nageldesign und Wimpernverlängerung gemäß den geltenden schweizerischen Gesetzen und mit gültiger Berufserlaubnis an.<br/>
          Mit der Terminvereinbarung oder dem Kauf eines Gutscheins (persönlich, telefonisch, per Nachricht oder über soziale Netzwerke wie Instagram / WhatsApp) akzeptiert der Kunde die AGB von OBeauty – Fancy.</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">2. Terminvereinbarung und Stornierungsrichtlinien</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Termine können direkt im Studio, telefonisch, per Nachricht oder über offizielle Online-Plattformen von OBeauty – Fancy gebucht werden.</li>
            <li>Ein bestätiger Termin gilt als verbindlich.</li>
            <li>Wenn der Kunde einen Termin nicht einhalten kann, ist dies mindestens 24 Stunden im Voraus mitzuteilen.</li>
            <li>Bei Nichterscheinen oder Stornierung innerhalb von 24 Stunden:</li>
            <ul className="list-disc ml-6">
              <li>Erstes Mal: Erinnerung</li>
              <li>Zweites Mal: Stornogebühr von 30 % des Servicepreises möglich</li>
              <li>Ab dem dritten Mal: Terminverweigerung möglich</li>
            </ul>
            <li>Bei Verspätung wird die Behandlungszeit verkürzt, um den Zeitplan für nachfolgende Kunden einzuhalten und die Servicequalität zu gewährleisten.</li>
          </ul>

          <h2 className="mt-6 mb-2 font-bold text-lg">3. Gutscheine</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Gutscheine gelten für alle Dienstleistungen bei OBeauty – Fancy.</li>
            <li>Gutscheine sind bis zum auf dem Gutschein angegebenen Datum gültig und können nach Ablauf nicht verlängert werden.</li>
            <li>Eine Barauszahlung oder Rückerstattung des Restbetrags ist ausgeschlossen.</li>
            <li>Bei Verlust oder Diebstahl übernehmen wir keine Haftung.</li>
            <li>Nicht kombinierbar mit anderen Rabattaktionen.</li>
          </ul>
          <p className="mb-4">Versand von Gutscheinen:<br/>
          Gutscheine können auf Wunsch an eine Adresse gesendet werden. Die Versandkosten trägt der Käufer. Der Versand erfolgt erst nach Zahlungseingang. Um den Prozess zu beschleunigen, kann der Zahlungsnachweis per E-Mail / WhatsApp / Instagram gesendet werden. Gutscheine sind auch direkt im Studio erhältlich.</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">4. Verlust von Gutscheinen, Servicekarten oder Bonuskarten</h2>
          <p className="mb-4">Bei Verlust oder Diebstahl übernimmt das Studio keine Haftung für den Ersatz der Gutscheine oder Karten.</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">5. Recht auf Dienstleistungsverweigerung</h2>
          <p className="mb-2">Das Studio behält sich das Recht vor, Dienstleistungen abzulehnen, wenn:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Der Kunde gesundheitliche Kontraindikationen aufweist (z. B. Hautkrankheiten, Infektionen, Nagelentzündungen etc.)</li>
            <li>Der Kunde alkoholisiert oder unter dem Einfluss von Drogen steht</li>
            <li>Der Kunde respektloses Verhalten zeigt oder die persönliche Hygiene nicht einhält</li>
          </ul>

          <h2 className="mt-6 mb-2 font-bold text-lg">6. Zahlung</h2>
          <p className="mb-4">Die Bezahlung der Dienstleistung und Produkte erfolgt unmittelbar nach der Inanspruchnahme.<br/>
          Akzeptierte Zahlungsmethoden: Barzahlung, Twint, Kreditkarte oder Gutschein.<br/>
          Wird nicht vor Ort bezahlt, erhält der Kunde eine Rechnung.<br/>
          Bei Zahlungsverzug nach Mahnung wird ein Inkassoverfahren (Betreibung) eingeleitet.</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">7. Persönliche Gegenstände</h2>
          <p className="mb-4">Das Studio übernimmt keine Haftung für persönliche Gegenstände der Kunden während des Aufenthalts.</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">8. Preisliste</h2>
          <p className="mb-4">Die offizielle Preisliste ist im Studio und auf der offiziellen Website einsehbar.<br/>
          Preise können ohne vorherige Ankündigung geändert werden.<br/>
          Bestätigte Preise zum Zeitpunkt der Terminbuchung bleiben für den Kunden verbindlich.</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">9. Reparatur- und Entschädigungsrichtlinie</h2>
          <p className="mb-4">Sollte es während der Dienstleistung zu Problemen kommen (z. B. Blutungen, Schmerzen oder Unzufriedenheit mit dem Ergebnis), kann der Kunde dies direkt dem Personal oder der Studioleitung mitteilen.<br/>
          Reklamationen müssen innerhalb von 24 Stunden nach der Dienstleistung gemeldet werden, um rechtzeitig geprüft und bearbeitet zu werden.<br/>
          Die Studioleitung wird eine angemessene Lösung anbieten – z. B. Nachbesserung, zusätzliche Behandlung oder teilweise Entschädigung – je nach Einzelfall.<br/>
          Alle Vereinbarungen werden klar im Termin oder vor der Bezahlung getroffen, um Transparenz und Kundenrechte zu gewährleisten.<br/>
          Bei berechtigter Beschwerde wird die Dienstleistung kostenlos wiederholt oder das fehlerhafte Produkt ersetzt. Eine Rückerstattung ist ausgeschlossen.</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">10. Garantiebedingungen</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Für Nageldienstleistungen (Nagelverlängerung / Gel-Lack) gilt eine 7-tägige Garantie bei technischen Mängeln durch das Studio (z. B. Bruch, Ablösung, Absplitterung – nicht durch Eigenverschulden).</li>
            <li>Keine Garantie bei Schäden durch Eigenmanipulation, starke Krafteinwirkung oder bei schwachem Nagelbett / individueller Veranlagung.</li>
            <li>Bei Kunden, die ihre Nägel oder Wimpern von anderen Studios machen lassen, übernimmt OBeauty – Fancy keine Verantwortung für Unverträglichkeiten oder Ablösungen bei Auffüllung oder Weiterbehandlung.</li>
          </ul>

          <h2 className="mt-6 mb-2 font-bold text-lg">11. Gesundheitsangaben der Kunden</h2>
          <p className="mb-4">Kunden sind verpflichtet, vor der Dienstleistung über gesundheitliche Probleme, Allergien, Hautempfindlichkeit oder relevante Krankheitsbilder zu informieren.<br/>
          Das Studio übernimmt keine Verantwortung für Zwischenfälle, wenn solche Informationen nicht wahrheitsgemäß mitgeteilt wurden.</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">12. Bildaufnahmen</h2>
          <p className="mb-4">Das Studio kann regelmäßig Fotos oder Videos im Studio oder während der Dienstleistung für Marketingzwecke (Social Media, Website, Flyer, Newsletter etc.) aufnehmen.<br/>
          Die Bilder werden so bearbeitet, dass das Gesicht der Kunden nicht sichtbar ist – es sei denn, es liegt eine ausdrückliche Zustimmung vor.</p>

          <h2 className="mt-6 mb-2 font-bold text-lg">13. Datenschutz</h2>
          <p className="mb-2">OBeauty – Fancy verpflichtet sich zum Schutz der persönlichen Daten der Kunden (Name, Telefonnummer) und verwendet diese ausschließlich für Terminvereinbarungen und Kundenbetreuung.<br/>
          Gemäß dem Schweizer Datenschutzgesetz (DSG):</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Kunden haben jederzeit das Recht, ihre persönlichen Daten zu korrigieren oder löschen zu lassen.</li>
            <li>Kunden können der Verwendung ihrer Daten für Marketingzwecke widersprechen – das Studio wird dies umgehend umsetzen.</li>
          </ul>

          <h2 className="mt-6 mb-2 font-bold text-lg">14. Gültigkeit</h2>
          <p className="mb-4">Diese Allgemeinen Geschäftsbedingungen gelten ab dem 01.01.2021 und können ohne vorherige Ankündigung geändert werden. Die aktualisierte Version wird auf der offiziellen Website und an der Rezeption veröffentlicht.</p>

          <p className="mt-6 font-semibold">Vielen Dank für Ihr Vertrauen in OBeauty – Fancy.<br/>
          Wir freuen uns, Sie bedienen zu dürfen!</p>
        </div>
        <button
          className="px-6 py-3 mt-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-300 text-white font-semibold shadow-md hover:scale-105 transition-all"
          onClick={goHome}
        >
          Go to Home
        </button>
      </div>
      {/* Footer with all buttons routing to home */}
      <Footer scrollToSection={goHome} />
    </div>
  );
};

export default AbgPage;
