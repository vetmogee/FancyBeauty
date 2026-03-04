import Navbar from '../components/sections/navbar';
import Footer from '../components/sections/footer';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AgbContentDe = () => (
    <>
        <p className="mb-2 font-semibold">OBeauty<br />
            Adresse: Wiesenstrasse 12a, 8952 Schlieren<br />
            Tel.: 077 981 17 88<br />
            Fancy by OBeauty<br />
            Adresse: Bleicherweg 20, 8002 Zürich<br />
            Tel.: 078 200 26 99</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">1. Allgemeine Bestimmungen</h2>
        <p className="mb-4">Diese allgemeinen Geschäftsbedingungen regeln die rechtlichen Beziehungen zwischen OBeauty – Fancy und den Kunden, die die Dienstleistungen des Studios in Anspruch nehmen. Wir bieten Dienstleistungen im Bereich Nageldesign und Wimpernverlängerung gemäß den geltenden schweizerischen Gesetzen und mit gültiger Berufserlaubnis an.<br />
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
        <p className="mb-4">Versand von Gutscheinen:<br />
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
        <p className="mb-4">Die Bezahlung der Dienstleistung und Produkte erfolgt unmittelbar nach der Inanspruchnahme.<br />
            Akzeptierte Zahlungsmethoden: Barzahlung, Twint, Kreditkarte oder Gutschein.<br />
            Wird nicht vor Ort bezahlt, erhält der Kunde eine Rechnung.<br />
            Bei Zahlungsverzug nach Mahnung wird ein Inkassoverfahren (Betreibung) eingeleitet.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">7. Persönliche Gegenstände</h2>
        <p className="mb-4">Das Studio übernimmt keine Haftung für persönliche Gegenstände der Kunden während des Aufenthalts.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">8. Preisliste</h2>
        <p className="mb-4">Die offizielle Preisliste ist im Studio und auf der offiziellen Website einsehbar.<br />
            Preise können ohne vorherige Ankündigung geändert werden.<br />
            Bestätigte Preise zum Zeitpunkt der Terminbuchung bleiben für den Kunden verbindlich.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">9. Reparatur- und Entschädigungsrichtlinie</h2>
        <p className="mb-4">Sollte es während der Dienstleistung zu Problemen kommen (z. B. Blutungen, Schmerzen oder Unzufriedenheit mit dem Ergebnis), kann der Kunde dies direkt dem Personal oder der Studioleitung mitteilen.<br />
            Reklamationen müssen innerhalb von 24 Stunden nach der Dienstleistung gemeldet werden, um rechtzeitig geprüft und bearbeitet zu werden.<br />
            Die Studioleitung wird eine angemessene Lösung anbieten – z. B. Nachbesserung, zusätzliche Behandlung oder teilweise Entschädigung – je nach Einzelfall.<br />
            Alle Vereinbarungen werden klar im Termin oder vor der Bezahlung getroffen, um Transparenz und Kundenrechte zu gewährleisten.<br />
            Bei berechtigter Beschwerde wird die Dienstleistung kostenlos wiederholt oder das fehlerhafte Produkt ersetzt. Eine Rückerstattung ist ausgeschlossen.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">10. Garantiebedingungen</h2>
        <ul className="list-disc ml-6 mb-4">
            <li>Für Nageldienstleistungen (Nagelverlängerung / Gel-Lack) gilt eine 7-tägige Garantie bei technischen Mängeln durch das Studio (z. B. Bruch, Ablösung, Absplitterung – nicht durch Eigenverschulden).</li>
            <li>Keine Garantie bei Schäden durch Eigenmanipulation, starke Krafteinwirkung oder bei schwachem Nagelbett / individueller Veranlagung.</li>
            <li>Bei Kunden, die ihre Nägel oder Wimpern von anderen Studios machen lassen, übernimmt OBeauty – Fancy keine Verantwortung für Unverträglichkeiten oder Ablösungen bei Auffüllung oder Weiterbehandlung.</li>
        </ul>

        <h2 className="mt-6 mb-2 font-bold text-lg">11. Gesundheitsangaben der Kunden</h2>
        <p className="mb-4">Kunden sind verpflichtet, vor der Dienstleistung über gesundheitliche Probleme, Allergien, Hautempfindlichkeit oder relevante Krankheitsbilder zu informieren.<br />
            Das Studio übernimmt keine Verantwortung für Zwischenfälle, wenn solche Informationen nicht wahrheitsgemäß mitgeteilt wurden.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">12. Bildaufnahmen</h2>
        <p className="mb-4">Das Studio kann regelmäßig Fotos oder Videos im Studio oder während der Dienstleistung für Marketingzwecke (Social Media, Website, Flyer, Newsletter etc.) aufnehmen.<br />
            Die Bilder werden so bearbeitet, dass das Gesicht der Kunden nicht sichtbar ist – es sei denn, es liegt eine ausdrückliche Zustimmung vor.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">13. Datenschutz</h2>
        <p className="mb-2">OBeauty – Fancy verpflichtet sich zum Schutz der persönlichen Daten der Kunden (Name, Telefonnummer) und verwendet diese ausschließlich für Terminvereinbarungen und Kundenbetreuung.<br />
            Gemäß dem Schweizer Datenschutzgesetz (DSG):</p>
        <ul className="list-disc ml-6 mb-4">
            <li>Kunden haben jederzeit das Recht, ihre persönlichen Daten zu korrigieren oder löschen zu lassen.</li>
            <li>Kunden können der Verwendung ihrer Daten für Marketingzwecke widersprechen – das Studio wird dies umgehend umsetzen.</li>
        </ul>

        <h2 className="mt-6 mb-2 font-bold text-lg">14. Gültigkeit</h2>
        <p className="mb-4">Diese Allgemeinen Geschäftsbedingungen gelten ab dem 01.01.2021 und können ohne vorherige Ankündigung geändert werden. Die aktualisierte Version wird auf der offiziellen Website und an der Rezeption veröffentlicht.</p>

        <p className="mt-6 font-semibold">Vielen Dank für Ihr Vertrauen in OBeauty – Fancy.<br />
            Wir freuen uns, Sie bedienen zu dürfen!</p>
    </>
);

const AgbContentEn = () => (
    <>
        <p className="mb-2 font-semibold">OBeauty<br />
            Address: Wiesenstrasse 12a, 8952 Schlieren<br />
            Tel.: 077 981 17 88<br />
            Fancy by OBeauty<br />
            Address: Bleicherweg 20, 8002 Zürich<br />
            Tel.: 078 200 26 99</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">1. General Provisions</h2>
        <p className="mb-4">These general terms and conditions govern the legal relations between OBeauty – Fancy and the customers who use the services of the studio. We offer nail design and eyelash extension services in accordance with valid Swiss laws and occupational licenses.<br />
            By booking an appointment or purchasing a voucher (in person, by phone, message, or via social networks such as Instagram / WhatsApp), the customer accepts the terms and conditions of OBeauty – Fancy.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">2. Appointment Booking and Cancellation Policy</h2>
        <ul className="list-disc ml-6 mb-4">
            <li>Appointments can be booked directly in the studio, by phone, message, or via official online platforms of OBeauty – Fancy.</li>
            <li>A confirmed appointment is considered binding.</li>
            <li>If the customer cannot keep an appointment, this must be communicated at least 24 hours in advance.</li>
            <li>In case of a no-show or cancellation within 24 hours:</li>
            <ul className="list-disc ml-6">
                <li>First time: Reminder</li>
                <li>Second time: Cancellation fee of 30% of the service price possible</li>
                <li>From the third time: Refusal of appointment possible</li>
            </ul>
            <li>In the event of a delay, the treatment time will be shortened to maintain the schedule for subsequent customers and ensure service quality.</li>
        </ul>

        <h2 className="mt-6 mb-2 font-bold text-lg">3. Vouchers</h2>
        <ul className="list-disc ml-6 mb-4">
            <li>Vouchers are valid for all services at OBeauty – Fancy.</li>
            <li>Vouchers are valid until the date stated on the voucher and cannot be extended after expiration.</li>
            <li>Cash payout or refund of the remaining amount is excluded.</li>
            <li>We accept no liability for loss or theft.</li>
            <li>Cannot be combined with other discount promotions.</li>
        </ul>
        <p className="mb-4">Shipping of vouchers:<br />
            Vouchers can be sent to an address upon request. The buyer bears the shipping costs. Shipping takes place only after receipt of payment. To speed up the process, proof of payment can be sent via email / WhatsApp / Instagram. Vouchers are also available directly in the studio.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">4. Loss of Vouchers, Service Cards, or Bonus Cards</h2>
        <p className="mb-4">In the event of loss or theft, the studio accepts no liability for the replacement of vouchers or cards.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">5. Right to Refuse Service</h2>
        <p className="mb-2">The studio reserves the right to refuse services if:</p>
        <ul className="list-disc ml-6 mb-4">
            <li>The customer has health contraindications (e.g., skin diseases, infections, nail inflammations, etc.)</li>
            <li>The customer is intoxicated or under the influence of drugs</li>
            <li>The customer shows disrespectful behavior or fails to maintain personal hygiene</li>
        </ul>

        <h2 className="mt-6 mb-2 font-bold text-lg">6. Payment</h2>
        <p className="mb-4">Payment for the service and products is made immediately after use.<br />
            Accepted payment methods: Cash, Twint, Credit card, or Voucher.<br />
            If not paid on-site, the customer will receive an invoice.<br />
            In case of late payment after a reminder, a debt collection procedure (Betreibung) will be initiated.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">7. Personal Belongings</h2>
        <p className="mb-4">The studio assumes no liability for customers' personal belongings during their stay.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">8. Price List</h2>
        <p className="mb-4">The official price list can be viewed in the studio and on the official website.<br />
            Prices are subject to change without prior notice.<br />
            Confirmed prices at the time of appointment booking remain binding for the customer.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">9. Repair and Compensation Policy</h2>
        <p className="mb-4">If problems arise during the service (e.g., bleeding, pain, or dissatisfaction with the result), the customer can report this directly to the staff or the studio management.<br />
            Complaints must be reported within 24 hours of the service to be reviewed and processed in a timely manner.<br />
            The studio management will offer a suitable solution – e.g., touch-up, additional treatment, or partial compensation – depending on the individual case.<br />
            All agreements will be made clearly during the appointment or before payment to ensure transparency and customer rights.<br />
            In the case of a justified complaint, the service will be repeated free of charge or the defective product replaced. A refund is excluded.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">10. Warranty Conditions</h2>
        <ul className="list-disc ml-6 mb-4">
            <li>For nail services (nail extensions / gel polish), a 7-day warranty applies in case of technical defects caused by the studio (e.g., breakage, detachment, chipping – not caused by the customer).</li>
            <li>No warranty applies for damages caused by personal manipulation, strong force, or weak nail beds / individual predisposition.</li>
            <li>For customers who have their nails or eyelashes done by other studios, OBeauty – Fancy assumes no liability for incompatibilities or detachments during refills or further treatments.</li>
        </ul>

        <h2 className="mt-6 mb-2 font-bold text-lg">11. Health Information of Customers</h2>
        <p className="mb-4">Customers are obliged to inform about health problems, allergies, skin sensitivity, or relevant clinical pictures before the service.<br />
            The studio assumes no responsibility for incidents if such information is not communicated truthfully.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">12. Photography</h2>
        <p className="mb-4">The studio may periodically take photos or videos in the studio or during the service for marketing purposes (social media, website, flyers, newsletter, etc.).<br />
            The images will be edited so that the customer's face is not visible – unless explicit consent is given.</p>

        <h2 className="mt-6 mb-2 font-bold text-lg">13. Data Protection</h2>
        <p className="mb-2">OBeauty – Fancy is committed to protecting the personal data of its customers (name, phone number) and uses this solely for appointment bookings and customer care.<br />
            According to the Swiss Data Protection Act (FADP):</p>
        <ul className="list-disc ml-6 mb-4">
            <li>Customers have the right at any time to have their personal data corrected or deleted.</li>
            <li>Customers can object to the use of their data for marketing purposes – the studio will implement this immediately.</li>
        </ul>

        <h2 className="mt-6 mb-2 font-bold text-lg">14. Validity</h2>
        <p className="mb-4">These general terms and conditions are valid from 01.01.2021 and can be changed without prior notice. The updated version will be published on the official website and at the reception.</p>

        <p className="mt-6 font-semibold">Thank you for your trust in OBeauty – Fancy.<br />
            We look forward to serving you!</p>
    </>
);

const AbgPage = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    // Dummy handlers to pass to Navbar/Footer, all route to home
    const goHome = () => navigate('/');
    const noop = () => { };

    const isEnglish = i18n.language.startsWith('en');

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
                <h1 className="text-4xl font-bold mb-4 text-pink-700 text-center max-w-4xl">{t('abg_title')}</h1>
                <div className="max-w-2xl text-left text-gray-800 bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                    {isEnglish ? <AgbContentEn /> : <AgbContentDe />}
                </div>
                <button
                    className="px-6 py-3 mt-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-300 text-white font-semibold shadow-md hover:scale-105 transition-all"
                    onClick={goHome}
                >
                    {t('abg_go_home')}
                </button>
            </div>
            {/* Footer with all buttons routing to home */}
            <Footer scrollToSection={goHome} />
        </div>
    );
};

export default AbgPage;
