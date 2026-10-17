/*
 * Thema: Expertenstandard Ernährungsmanagement zur Sicherung und Förderung der oralen Ernährung in der Pflege
 * Quelle: murimed-Lernheft Expertenstandard Ernährungsmanagement, Modul II (Seitenangaben beziehen sich auf das Heft).
 * Inhalte übernommen aus "Zusammenfassung_Expertenstandard_Ernaehrungsmanagement.pdf" und
 * "Lernkarten_Expertenstandard_Ernaehrungsmanagement.pdf".
 *
 * Quiz-Format: bei "o" (Optionen) steht die RICHTIGE Antwort immer an erster
 * Stelle; die App mischt die Reihenfolge beim Anzeigen.
 * "h: true" = Inhalt stammt (teilweise) nur aus handschriftlichen Notizen im Heft.
 * Das Heft enthält keine handschriftlichen Notizen oder Prüfungsmarkierungen,
 * daher hier weder "h: true" noch ★.
 */
Lernapp.thema({
  id: "ernaehrung",
  titel: "Expertenstandard Ernährungsmanagement",
  kurz: "Ernährung",
  quelle: "murimed-Lernheft Expertenstandard Ernährungsmanagement, Modul II",
  hinweis:
    "Quelle ist ausschließlich das Lernheft; Seitenzahlen in Klammern. Das Heft enthält keine handschriftlichen Notizen oder Prüfungsmarkierungen, daher keine ★. Die im Heft zitierten Primärquellen (v. a. DNQP 2017) wurden nicht separat geprüft.",

  karten: [
    { k: "Grundlagen", f: "Warum ist Ernährung ein Grundbedürfnis?",
      a: "Bedürfnis = körperlicher oder geistiger Mangelzustand. Nahrung und Trinken gehören zu den primären Bedürfnissen (Selbst- und Arterhaltung). Im Bedürfnis-„Turm“ sind Hunger und Durst das Fundament – ohne sie keine höheren Stufen.", s: "S. 2", sp: ["ernaehrung: Basiswissen zur Ernährung"] },
    { k: "Grundlagen", f: "Warum gibt es den Expertenstandard Ernährungsmanagement?",
      a: "Kranke und pflegebedürftige Menschen, die sich nicht selbst angemessen ernähren können, unterstützen; bei Risikopatienten führt fehlende Unterstützung schnell zu drastischen, existenzbedrohlichen Folgen. Erstellt, veröffentlicht und 2017 aktualisiert.", s: "S. 2–3" },
    { k: "Grundlagen", f: "Wie ist Mangelernährung definiert?",
      a: "In Anlehnung an die DGEM: ein anhaltendes Defizit an Energie und/oder Nährstoffen im Sinne einer negativen Bilanz zwischen Aufnahme und Bedarf, mit Konsequenzen für Ernährungszustand, physiologische Funktion und Gesundheitszustand. „Nahrung“ = Essen und Trinken.", s: "S. 4", sp: ["ernaehrung: Basiswissen zur Ernährung"] },
    { k: "Grundlagen", f: "Ist jede Nahrungskarenz oder Gewichtsabnahme eine Mangelernährung?",
      a: "Nein. „Anhaltend“ bedeutet: nicht jede Nahrungskarenz führt zu Mangelernährung. Auch eine Gewichtsabnahme ist nicht grundlegend als Mangelernährung zu verstehen und nicht Teil der Definition.", s: "S. 4", sp: ["ernaehrung: Basiswissen zur Ernährung"] },
    { k: "Grundlagen", f: "Welches Ziel verfolgt der Expertenstandard?",
      a: "Bei jedem Menschen mit pflegerischem Unterstützungsbedarf ist eine orale Nahrungsaufnahme entsprechend seinen Bedürfnissen und seinem Bedarf gesichert, und einer drohenden oder bestehenden Mangelernährung wird entgegengewirkt.", s: "S. 4", sp: ["ernaehrung: Ziel"] },
    { k: "Grundlagen", f: "Welche Rolle hat die Pflege bei enteraler/parenteraler Ernährung?",
      a: "Auch dann ist es Aufgabe der Pflege, eine orale Nahrungsaufnahme zu unterstützen, sofern dadurch kein Schaden entsteht. Reicht die orale Zufuhr nicht, ernährungstherapeutische Beratung/Behandlung durch Ernährungsfachkräfte/Ärzte.", s: "S. 4" },
    { k: "Grundlagen", f: "Für wen gilt der Expertenstandard – und für wen nicht?",
      a: "Zielgruppe: erwachsene pflegebedürftige Menschen, die ganz oder teilweise oral Nahrung/Flüssigkeit aufnehmen können; Angehörige (Information, Beratung, Anleitung).\nNicht: Säuglinge, Kleinkinder, Jugendliche; spezielles Ernährungsmanagement z. B. bei Diabetes oder Anorexia nervosa.", s: "S. 4–5", sp: ["ernaehrung: Zielgruppe"] },
    { k: "Grundlagen", f: "An wen richtet sich der Standard? Welche Rolle hat die Pflege?",
      a: "An Pflegefachkräfte in Krankenhaus, stationärer Rehabilitation/Altenhilfe und ambulanter Versorgung. Pflegefachkräfte haben die Schlüsselrolle im multidisziplinären Team (Nähe zu den Betroffenen, Einblick in Risiken und Ressourcen).", s: "S. 5", sp: ["ernaehrung: Anwender:innen"] },
    { k: "Grundlagen", f: "Welche Umsetzungsvoraussetzungen nennt der Standard?",
      a: "Unzureichende Unterstützung beruht v. a. auf Zeitmangel, Mangel an qualifiziertem Personal und häufigem Personalwechsel → angemessene Personal- und Zeitplanung; personenorientierte Organisation (z. B. Primary Nursing) für Kontinuität.", s: "S. 5" },
    { k: "Grundlagen", f: "Wer gehört zum interdisziplinären Team?",
      a: "Küchenpersonal, Ernährungsfachkräfte (Diätassistenten), Ärzte oder Zahnärzte, Logopäden, Ergotherapeuten, hauswirtschaftliche Fachkräfte. Zuständigkeiten zu Beginn in einer multiprofessionell geltenden Verfahrensregelung festlegen.", s: "S. 5–6" },
    { k: "Aufbau", f: "Nenne die sechs Phasen des Expertenstandards.",
      a: "1. Einschätzung des Ernährungszustandes\n2. Kooperation mit anderen Berufsgruppen\n3. Maßnahmenplanung\n4. umfassende, fachgerechte Unterstützung\n5. Information, Beratung und Anleitung\n6. Evaluation", s: "S. 6", sp: ["ernaehrung: Aufbau des Expertenstandards", "ernaehrung: Phasen"] },
    { k: "Aufbau", f: "Struktur-, Prozess- und Ergebniskriterien?",
      a: "Struktur (S): notwendige Voraussetzungen – Was muss die Einrichtung vorhalten, was muss die Pflegefachkraft wissen/können?\nProzess (P): notwendige Handlungen – Was muss wann wie getan werden?\nErgebnis (E): Was muss vorliegen, um die Phase abzuschließen?", s: "S. 6", sp: ["ernaehrung: Struktur"] },
    { k: "Phase 1", f: "Was fordern S1a, S1b, P1 und E1?",
      a: "S1a: Kompetenz zu Screening und vertieftem Assessment · S1b: Einrichtung stellt Instrumente/Hilfsmittel zur Einschätzung und Dokumentation · P1: Screening zu Beginn, bei akuten Veränderungen, in festzulegenden Abständen; bei Anzeichen vertieftes Assessment · E1: aktuelles Screening für alle, Assessment bei Anzeichen.", s: "S. 7–8", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 1", f: "Screening vs. vertieftes Assessment?",
      a: "1. Screening: kurze, leicht durchführbare Erhebung zur frühzeitigen Identifikation gefährdeter/betroffener Menschen.\n2. Vertieftes Assessment: tiefergehende Einschätzung der Ernährungssituation und beeinflussender Faktoren, um Maßnahmen zu planen.", s: "S. 8–9", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 1", f: "Wann wird gescreent, wann ein Assessment durchgeführt?",
      a: "Screening: zu Beginn des pflegerischen Auftrags, bei akuten Veränderungen, in individuell festzulegenden Abständen – in der Langzeitpflege ohne Anzeichen mind. alle drei Monate.\nAssessment: nach jedem auffälligen Screening.", s: "S. 9, 14", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 1", f: "Welches Assessmentinstrument empfiehlt die Expertengruppe?",
      a: "Derzeit keines. Der erste Teil des PEMU (Pflegerische Erfassung von Mangelernährung und deren Ursachen) enthält hilfreiche, in der Langzeitpflege praxistaugliche Kriterien. Screening sollte in die Pflegeanamnese passen (keine Doppeldokumentation).", s: "S. 9" },
    { k: "Phase 1", f: "Welche Hilfsmittel und Besonderheiten gelten beim Wiegen?",
      a: "Hilfsmittel zur Bestimmung von Gewicht und Körpergröße vorhalten; ambulant Beratung intensivieren, mitgebrachte Waagen hygienisch einsetzen, Genauigkeit beachten. Auf Wiegen verzichten, wenn es für die Person eine zu große Belastung ist – dann andere Anzeichen beachten.", s: "S. 9" },
    { k: "Phase 1", f: "Wie aussagekräftig sind BMI und Gewicht?",
      a: "Einzeldaten nicht überbewerten, immer in Relation sehen. Auch bei hohem BMI oder Übergewicht kann Mangelernährung drohen oder bestehen. Ein Gewichtsverlauf ist meist aussagekräftiger als eine bloße BMI-Berechnung.", s: "S. 10" },
    { k: "Phase 1", f: "Worauf prüft das Screening?",
      a: "Hinweise auf\n• möglichen Nahrungs- und Flüssigkeitsmangel,\n• auffällig geringe Ess- und Trinkmengen,\n• erhöhten Energie-, Nährstoff- und Flüssigkeitsbedarf bzw. entsprechende Verluste.", s: "S. 10", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 1", f: "Anzeichen für Nahrungs- und Flüssigkeitsmangel?",
      a: "Unbeabsichtigter Gewichtsverlust (z. B. 5 % in 1–3 Monaten oder 10 % in 6 Monaten), subjektiver Eindruck; weit gewordene Kleidung, tief liegende Augen, plötzliche Verwirrtheit, konzentrierter Urin.", s: "S. 10" },
    { k: "Phase 1", f: "Ab welchem BMI ist ein Nahrungsmangel wahrscheinlich?",
      a: "Über 64-Jährige: BMI < 20 kg/m² → Nahrungsmangel wahrscheinlich.\nUnter 65-Jährige: erst ab BMI 18,5 kg/m² wird Mangelernährung angenommen.", s: "S. 10" },
    { k: "Phase 1", f: "Was gilt als auffällig geringe Ess- und Trinkmenge?",
      a: "Hinweise von Betroffenen/Angehörigen: Speisen/Getränke über mehrere Tage nicht oder nicht vollständig verzehrt; auffällig große Essensreste oder weniger als 100 ml der angebotenen Getränke am Tag. Ursachen: krankheits-, therapie-, altersbedingt, psychosozial, umgebungsbedingt.", s: "S. 10" },
    { k: "Phase 1", f: "Wann ist der Bedarf erhöht?",
      a: "Schwere akute/chronische Erkrankungen, Fieber, offene Wunden (Dekubitus, Ulcus cruris), verstärkte Mobilität/Hyperaktivität (Demenz, Stress). Flüssigkeit zusätzlich: stark geheizte Räume, Sommerhitze, unzweckmäßige Kleidung. Absorptions-/Digestionsstörung, starker Blutverlust.", s: "S. 11" },
    { k: "Phase 1", f: "Besondere Risiken in der ambulanten Pflege?",
      a: "Mangelnde Unterstützung im Haushalt/Alltag; eingeschränkte Lebensmittelversorgung (Finanzen, wenig Einkaufsmöglichkeiten, Kostformen); eingeschränkte selbstständige Lebensführung (Besorgung, Zubereitung); Einschränkungen beim Essen und Trinken; soziale Isolation, Einsamkeit, Depression.", s: "S. 11" },
    { k: "Phase 1", f: "Besondere Anzeichen in der stationären Versorgung?",
      a: "Umgebung (Unruhe bei den Mahlzeiten, störende Bewohner); nicht geäußerte Bedürfnisse oder Gewohnheiten; Zurückhaltung beim Einfordern von Unterstützung oder bei der Ablehnung der Gemeinschaftsverpflegung.", s: "S. 11" },
    { k: "Phase 1", f: "Welche Instrumente helfen im vertieften Assessment?",
      a: "Einfache Ess- und Trinkprotokolle (Datum, Uhrzeit, Art der Mahlzeit, angebotene und verzehrte Menge, Art der Getränke); grobe Mengenerfassung mit Tellerdiagrammen (alles, Hälfte, Viertel, nichts); Erfassung über mehrere Tage (ca. 3–5).", s: "S. 12", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 1", f: "Körperlich und kognitiv bedingte Beeinträchtigungen (Assessment)?",
      a: "Kognitive Überforderung (z. B. Demenz), Funktionseinschränkung von Händen/Armen, schlechter Mundzustand, Zahnprobleme/Kauen, Schluckstörungen, Müdigkeit beim Essen (z. B. Medikamente), Seh- und Hörbeeinträchtigung.", s: "S. 12" },
    { k: "Phase 1", f: "Ursachen für fehlende Lust und Appetitlosigkeit?",
      a: "Psychische Belastung (Einsamkeit, Heimweh), akute Krankheit, Schmerzen, Bewegungsmangel, Wunsch nach verringerter Ausscheidung, reduziertes Hunger-/Durstgefühl, Medikamentennebenwirkungen, reduzierter Geruchs-/Geschmackssinn, fehlende Information, kulturelle/religiöse Gründe, Abneigungen, Angst vor Unverträglichkeit.", s: "S. 12–13" },
    { k: "Phase 1", f: "Welche Faktoren aus Umgebung und Angebot prüft das Assessment?",
      a: "Umgebung: unangenehme Ess-Situation (Geräusche, Gerüche, Tischnachbarn), inadäquate Essenszeiten, Hilfsmittel, Beziehung zu Versorgungspersonen.\nAngebot: Unzufriedenheit, unangemessene Konsistenz, nicht akzeptierte oder inadäquate Diät, Speisenplanung.", s: "S. 13" },
    { k: "Phase 1", f: "Gründe für erhöhten Bedarf bzw. Verlust (Assessment)?",
      a: "Energie/Nährstoffe: Krankheiten (Fieber, Infektionen, Tumor, offene Wunden, Dekubitus, Stress, Blutverlust, Erbrechen, Durchfälle), Hyperaktivität (ständiges Umherlaufen).\nFlüssigkeit: Krankheit, starkes Schwitzen, übermäßige Hitze.", s: "S. 13–14" },
    { k: "Phase 1", f: "Was folgt aus dem vertieften Assessment?",
      a: "Problembereiche so präzisieren, dass unter Berücksichtigung von Ressourcen Maßnahmen planbar sind; ggf. andere Berufsgruppen hinzuziehen (z. B. Kauen/Schlucken, Unverträglichkeiten). Auch Ergebnis „keine Mangelernährung“ möglich, z. B. bei medizinisch gewünschter Gewichtsreduktion.", s: "S. 14", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 2", f: "Was fordern S2a, S2b, P2 und E2?",
      a: "S2a: Fachwissen zur Steuerung berufsgruppenübergreifender Maßnahmen und Kompetenz bei ethisch komplexen Fragen · S2b: multiprofessionelle Verfahrensregelung · P2: Koordination in enger Kooperation · E2: Maßnahmen koordiniert und ggf. ethisch begründet.", s: "S. 15", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 2", f: "Wie geht man mit ethisch komplexen Fragen um?",
      a: "Z. B. Nahrungsverweigerung, künstliche Ernährung: Patientenverfügung, Vorsorgevollmacht kennen; Fallbesprechungen mit Betroffenen, Angehörigen/Betreuern, Berufsgruppen; Wille bzw. mutmaßlicher Wille berücksichtigen; ggf. Ethikkommission/Ethikexperte.", s: "S. 15–16", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 2", f: "Was regelt die Verfahrensregelung Ernährungsmanagement?",
      a: "Zuständigkeiten (wer erfasst, führt durch, entscheidet über Experten, koordiniert) · Abläufe (Bereitstellung, Verabreichung, Trinknahrung, Anreicherung, Mahlzeitengestaltung, Unterstützung) · Autorisierung der Pflegefachkraft zur Initiierung und Koordination.", s: "S. 16", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 2", f: "Wann sind welche Berufsgruppen hinzuzuziehen?",
      a: "Zahn-/Kieferprobleme: Zahnmediziner verpflichtend. Schluckstörungen: Logopäden (Schluckakt, Schlucktraining, Konsistenz). Selbstständige Nahrungsaufnahme üben: Ergotherapeuten. Beispiel Chorea Huntington: pürierte Kost, Logopädie, Abstimmung mit der Küche.", s: "S. 17", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 2", f: "Was muss in Phase 2 dokumentiert werden?",
      a: "Maßnahmen nachvollziehbar; auch notwendige, aber abgelehnte Maßnahmen; Maßnahmen anderer Berufsgruppen; worauf nach ethischer Fallbesprechung verzichtet wurde – jeweils mit Begründung.", s: "S. 17", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 3", f: "Was fordern S3a, S3b, P3 und E3?",
      a: "S3a: Kompetenz zur Planung individueller Mahlzeiten- und Interaktionsgestaltung · S3b: Konzept zur Ernährungsversorgung · P3: gemeinsame Planung mit Betroffenen/Angehörigen · E3: individueller Maßnahmenplan liegt vor.", s: "S. 18–19", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 3", f: "Grundlage der individuellen Planung?",
      a: "Verknüpfung von Biographiearbeit, aktuellen Ernährungsgewohnheiten und Erkenntnissen aus dem vertieften Assessment; Vorlieben, Abneigungen, Ressourcen; Aushandlungsprozess mit Betroffenen/Angehörigen. Ambulant: Verpflegung sichern (z. B. Essen auf Rädern).", s: "S. 18", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 3", f: "Was gehört in das Konzept zur Ernährungsversorgung?",
      a: "Kost- und Darreichungsformen, Verpflegungszeiten, Menübestellsystem, Tisch- und Esskultur, Essensverteilung; ungestörte Mahlzeiten; über drei Hauptmahlzeiten hinaus Zwischen- und Spätmahlzeiten sowie Getränke; kleinere Portionen als Ersatz prüfen.", s: "S. 18–19", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 4", f: "Was fordern S4a, S4b, P4 und E4?",
      a: "S4a: Kompetenz zur Unterstützung inkl. Risikosituationen (z. B. Aspiration) · S4b: Personalausstattung und geeignete Räume · P4: Selbstbestimmung/Eigenaktivität fördern, motivierende Gestaltung · E4: umfassende Unterstützung, auch außerhalb der Essenszeiten.", s: "S. 19–20", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 4", f: "Welcher Grundsatz gilt für die Unterstützung beim Essen?",
      a: "Eine selbstständigkeitserhaltende und selbstständigkeitsfördernde Unterstützung sollte immer das Ziel sein – nicht vollständige Übernahme, sondern Eigenständigkeit und Autonomie ermöglichen. Laienhelfer nur vertraut und angeleitet.", s: "S. 20", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 4", f: "Was bedeutet „geschützte Essenszeiten“?",
      a: "Mahlzeiten so planen, dass vermeidbare Unterbrechungen und Störungen ausbleiben und keine sonstigen pflegerischen oder therapeutischen Maßnahmen stattfinden; dazu helle Räume, überschaubare Essplätze, Ambiente gegen Reizüberflutung, Platz für Gehhilfen.", s: "S. 20", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 4", f: "Welche pflegerischen Unterstützungsmaßnahmen gibt es?",
      a: "Mundgerechte Zubereitung, Bereitstellung, Anleitung zu Hilfsmitteln, Impulse zum Beginnen/Weiteressen, Anleiten, Anreichen bis vollständiges Anreichen; Essen warmhalten; Mahlzeitendauer > 45 Minuten kann die Verzehrmenge steigern; Tischsitten und Rituale.", s: "S. 20–21", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 5", f: "Was fordern S5, P5 und E5?",
      a: "S5: Informations-, Beratungs-, Anleitungskompetenz · P5: Information/Beratung zu Entstehung und Folgen der Mangelernährung und zu Möglichkeiten, ggf. Anleitung · E5: Betroffene/Angehörige informiert, beraten, ggf. angeleitet; Inhalte dokumentiert.", s: "S. 21–22", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 5", f: "Warum ist Beratung ambulant besonders wichtig?",
      a: "Kein vollumfänglicher Pflegevertrag, Pflegefachkräfte nur zeitweise anwesend → Eigenverantwortung fördern; nachweisliche Information, Beratung und Schulung. Bei Bedarf differenzierte Ernährungsberatung durch Ernährungsfachkraft.", s: "S. 21–22", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 6", f: "Was fordern S6, P6 und E6?",
      a: "S6: Kompetenz, Angemessenheit und Wirksamkeit zu beurteilen · P6: gemeinsame Überprüfung von Erfolg und Akzeptanz, ggf. Neueinschätzung · E6: keine Anzeichen für Mangelernährung, soweit durch orale Nahrungsaufnahme möglich.", s: "S. 22", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 6", f: "Wovon hängt der Erfolg der Maßnahmen ab?",
      a: "Verzehrmengen werden beeinflusst durch angebotene Speisen, Tischgemeinschaft, aktuelle Ereignisse im Umfeld, nicht ausreichend behandelte Schmerzen, notwendige Medikation. Danach: weiterführen, neu einschätzen oder anpassen.", s: "S. 23", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Phase 6", f: "Welcher Grundsatz gilt bei Ablehnung von Nahrung?",
      a: "Selbstbestimmung und Autonomie haben stets Vorrang vor Bedarfszielsetzung. Z. B. palliativ: Ablehnung akzeptieren, Ruhe und Symptomlinderung haben Priorität. Grenzen der oralen Ernährung erkennen, ggf. enterale/parenterale Zufuhr anregen.", s: "S. 22–23", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Zusammenfassung", f: "Was ist die Kernaussage der Zusammenfassung?",
      a: "Nur wenn die Pflegekraft die Ursachen für Verhalten und Wünsche kennt, kann sie Maßnahmen so gestalten, dass die Versorgung als bedarfsgerecht und angenehm empfunden wird. Druck und Zeitdruck beim Essen können zu Gewalt in der Pflege führen.", s: "S. 24" },
    { k: "Zusammenfassung", f: "Wie wird der Standard in der Einrichtung eingeführt?",
      a: "Auseinandersetzung auf Managementebene · Verständnis der Zielsetzung · Reflexion von Ressourcen und Maßnahmen · Anpassung an die Einrichtung (Qualitätszirkel) · Implementierungsschritte mit Terminen · Information und Schulung der Mitarbeitenden.", s: "S. 24–25" },
    { k: "Prozess", f: "Beschreibe den Prozessablauf Ernährungsmanagement.",
      a: "Versorgungsbeginn/akute Veränderung → Screening → Anzeichen? (nein: keine weiteren Maßnahmen) → vertiefendes Assessment → Anzeichen? → Planung/Koordination → Umsetzung inkl. Beratung → Evaluation → erfolgreich? (nein: Anpassung) → fortführen oder Abschluss.", s: "S. 26", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { k: "Glossar", f: "Enterale vs. parenterale Ernährung?",
      a: "Enteral: Zufuhr per Sonde oder Enterostoma über den Magen-Darm-Trakt; physiologisch, sicher, ökonomisch – der parenteralen vorzuziehen.\nParenteral: Wasser, Nährstoffe, Vitamine, Mineralstoffe, Spurenelemente intravenös; parallel oder abwechselnd mit enteraler möglich.", s: "S. 27", sp: ["ernaehrung: Basiswissen zur Ernährung"] },
    { k: "Glossar", f: "Was sind Expertenstandards und Assessments?",
      a: "Expertenstandards: Instrumente zur Sicherung und Weiterentwicklung der Pflegequalität; verbindlich für alle stationären Einrichtungen und ambulanten Dienste (Heft zitiert § 113 Abs. 1 SGB XI); regelmäßig angepasst.\nAssessment: standardisierte Verfahren und Instrumente für medizinische, funktionale, psychosoziale Fragen.", s: "S. 27" }
  ],

  quiz: [
    { f: "Wie ist Mangelernährung im Lernheft (in Anlehnung an die DGEM) definiert?",
      o: ["Anhaltendes Defizit an Energie und/oder Nährstoffen im Sinne einer negativen Bilanz zwischen Aufnahme und Bedarf", "Jede Nahrungskarenz von mehr als einem Tag", "Ein BMI unter 25 kg/m²", "Jede Gewichtsabnahme, unabhängig von der Ursache"],
      e: "Mangelernährung = anhaltendes Defizit an Energie und/oder Nährstoffen (negative Bilanz zwischen Aufnahme und Bedarf) mit Konsequenzen für Ernährungszustand, physiologische Funktion und Gesundheitszustand.", s: "S. 4", sp: ["ernaehrung: Basiswissen zur Ernährung"] },
    { f: "Welche Aussagen zur Definition der Mangelernährung treffen laut Heft zu?",
      o: ["Nicht jede Nahrungskarenz führt zu Mangelernährung", "„Nahrung“ meint Essen und Trinken", "Eine Gewichtsabnahme ist zentraler Bestandteil der Definition", "„Nahrung“ meint nur feste Speisen"],
      r: 2,
      e: "„Anhaltend“ bedeutet: nicht jede Nahrungskarenz ist Mangelernährung. „Nahrung“ = Essen und Trinken. Eine Gewichtsabnahme ist nicht Teil der Definition.", s: "S. 4", sp: ["ernaehrung: Basiswissen zur Ernährung"] },
    { f: "Welches Ziel verfolgt der Expertenstandard Ernährungsmanagement?",
      o: ["Bei jedem Menschen mit pflegerischem Unterstützungsbedarf ist eine orale Nahrungsaufnahme entsprechend Bedürfnissen und Bedarf gesichert und einer Mangelernährung wird entgegengewirkt", "Alle Risikopatienten erhalten frühzeitig eine Sondenernährung", "Alle pflegebedürftigen Menschen erreichen einen BMI über 25 kg/m²", "Die Ernährung wird vollständig von Ernährungsfachkräften übernommen"],
      e: "Ziel: orale Nahrungsaufnahme entsprechend Bedürfnissen und Bedarf sichern, drohender oder bestehender Mangelernährung entgegenwirken.", s: "S. 4", sp: ["ernaehrung: Ziel"] },
    { f: "Welche Rolle hat die Pflege, wenn ein Mensch enteral oder parenteral ernährt wird?",
      o: ["Sie unterstützt weiterhin die orale Nahrungsaufnahme, sofern dadurch kein Schaden entsteht", "Die orale Nahrungsaufnahme wird grundsätzlich eingestellt", "Die Pflege ist dann für die Ernährung nicht mehr zuständig", "Sie darf nur noch Getränke, aber keine Speisen anbieten"],
      e: "Auch bei enteraler/parenteraler Ernährung ist es Aufgabe der Pflege, eine orale Nahrungsaufnahme zu unterstützen, sofern dadurch kein Schaden entsteht.", s: "S. 4" },
    { f: "Für wen gilt der Expertenstandard laut Heft NICHT?",
      o: ["Säuglinge, Kleinkinder und Jugendliche", "Spezielles Ernährungsmanagement, z. B. bei Anorexia nervosa", "Erwachsene pflegebedürftige Menschen, die teilweise oral Nahrung aufnehmen können", "Angehörige (Information, Beratung, Anleitung)"],
      r: 2,
      e: "Zielgruppe: erwachsene pflegebedürftige Menschen, die ganz oder teilweise oral Nahrung/Flüssigkeit aufnehmen können, sowie Angehörige. Nicht: Säuglinge, Kleinkinder, Jugendliche; spezielles Ernährungsmanagement z. B. bei Diabetes mellitus oder Anorexia nervosa.", s: "S. 4–5", sp: ["ernaehrung: Zielgruppe"] },
    { f: "Wer hat laut Heft die Schlüsselrolle im multidisziplinären Team?",
      o: ["Pflegefachkräfte", "Küchenpersonal", "Diätassistenten", "Hauswirtschaftliche Fachkräfte"],
      e: "Pflegefachkräfte haben die Schlüsselrolle im multidisziplinären Team – wegen ihrer Nähe zu den Betroffenen und ihres Einblicks in Risiken und Ressourcen.", s: "S. 5", sp: ["ernaehrung: Anwender:innen"] },
    { f: "Worauf beruht unzureichende Unterstützung bei der Ernährung laut Heft vor allem?",
      o: ["Zeitmangel", "Mangel an qualifiziertem Personal", "Häufiger Personalwechsel", "Zu lange geschützte Essenszeiten"],
      r: 3,
      e: "Unzureichende Unterstützung v. a. durch Zeitmangel, Mangel an qualifiziertem Personal und häufigen Personalwechsel → angemessene Personal- und Zeitplanung; personenorientierte Organisation (z. B. Primary Nursing).", s: "S. 5" },
    { f: "Welche Phase folgt im Expertenstandard direkt auf die Einschätzung des Ernährungszustandes (Phase 1)?",
      o: ["Kooperation mit anderen Berufsgruppen", "Maßnahmenplanung", "Information, Beratung und Anleitung", "Evaluation"],
      e: "1 Einschätzung · 2 Kooperation mit anderen Berufsgruppen · 3 Maßnahmenplanung · 4 umfassende, fachgerechte Unterstützung · 5 Information, Beratung, Anleitung · 6 Evaluation.", s: "S. 6", sp: ["ernaehrung: Aufbau des Expertenstandards", "ernaehrung: Phasen"] },
    { f: "Was beschreiben die Prozesskriterien (P) des Expertenstandards?",
      o: ["Notwendige Handlungen: Was muss wann wie getan werden?", "Voraussetzungen: Was muss die Einrichtung vorhalten, was muss die Pflegefachkraft können?", "Was muss vorliegen, um die Phase abzuschließen?", "Die Kosten der Ernährungsversorgung"],
      e: "Struktur = Voraussetzungen · Prozess = Handlungen (Was muss wann wie getan werden?) · Ergebnis = Was muss vorliegen, um die Phase abzuschließen?", s: "S. 6", sp: ["ernaehrung: Struktur"] },
    { f: "Wann ist laut Heft ein Screening durchzuführen?",
      o: ["Zu Beginn des pflegerischen Auftrags", "Bei akuten Veränderungen", "In individuell festzulegenden Abständen", "Nur auf ärztliche Anordnung"],
      r: 3,
      e: "Screening zu Beginn des pflegerischen Auftrags, bei akuten Veränderungen und in individuell festzulegenden Abständen.", s: "S. 9, 14", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Wie oft wird in der Langzeitpflege ohne Anzeichen einer Mangelernährung mindestens gescreent?",
      o: ["Mindestens alle drei Monate", "Einmal jährlich", "Nur einmal bei Aufnahme", "Alle sechs Monate"],
      e: "Langzeitpflege ohne Anzeichen: Screening mindestens alle drei Monate.", s: "S. 14" },
    { f: "Wann wird ein vertieftes Assessment durchgeführt?",
      o: ["Nach jedem auffälligen Screening", "Nur nach mindestens 10 % Gewichtsverlust", "Routinemäßig bei allen statt eines Screenings", "Erst wenn ein Arzt es verordnet"],
      e: "Vertieftes Assessment: nach jedem auffälligen Screening; tiefergehende Einschätzung der Ernährungssituation und beeinflussender Faktoren, um Maßnahmen zu planen.", s: "S. 9, 14", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Welches Assessmentinstrument empfiehlt die Expertengruppe derzeit?",
      o: ["Keines – Teil 1 des PEMU enthält aber hilfreiche, in der Langzeitpflege praxistaugliche Kriterien", "Den BMI als alleiniges Instrument", "Ein verbindlich vorgeschriebenes Instrument der DGEM", "Das Tellerdiagramm als alleiniges Screening"],
      e: "Derzeit empfiehlt die Expertengruppe kein Assessmentinstrument; der erste Teil des PEMU (Pflegerische Erfassung von Mangelernährung und deren Ursachen) ist hilfreich. Screening in die Pflegeanamnese integrieren (keine Doppeldokumentation).", s: "S. 9" },
    { f: "Was gilt, wenn das Wiegen für die Person eine zu große Belastung ist?",
      o: ["Auf das Wiegen verzichten und andere Anzeichen beachten", "Trotzdem wiegen, weil das Gewicht unverzichtbar ist", "Das Screening entfällt dann vollständig", "Eine Mangelernährung ist dann automatisch ausgeschlossen"],
      e: "Auf Wiegen verzichten, wenn es für die Person eine zu große Belastung ist – dann andere Anzeichen beachten.", s: "S. 9" },
    { f: "Welche Aussagen zu BMI und Gewicht treffen laut Heft zu?",
      o: ["Ein Gewichtsverlauf ist meist aussagekräftiger als eine bloße BMI-Berechnung", "Auch bei hohem BMI oder Übergewicht kann eine Mangelernährung drohen oder bestehen", "Ein hoher BMI schließt Mangelernährung aus", "Ein einzelner BMI-Wert reicht zur sicheren Einschätzung"],
      r: 2,
      e: "Einzeldaten nicht überbewerten, immer in Relation sehen; auch bei hohem BMI/Übergewicht Mangelernährung möglich; Gewichtsverlauf meist aussagekräftiger als BMI.", s: "S. 10" },
    { f: "Welcher unbeabsichtigte Gewichtsverlust wird im Heft als Beispiel für ein Anzeichen von Nahrungsmangel genannt?",
      o: ["5 % in 1–3 Monaten oder 10 % in 6 Monaten", "1 % in 6 Monaten", "2 % in 12 Monaten", "10 % in 5 Jahren"],
      e: "Anzeichen: unbeabsichtigter Gewichtsverlust (z. B. 5 % in 1–3 Monaten oder 10 % in 6 Monaten), subjektiver Eindruck, weit gewordene Kleidung u. a.", s: "S. 10" },
    { f: "Ab welchem BMI ist bei über 64-Jährigen ein Nahrungsmangel wahrscheinlich?",
      o: ["BMI < 20 kg/m²", "BMI < 25 kg/m²", "BMI < 30 kg/m²", "BMI < 16 kg/m²"],
      e: "Über 64-Jährige: BMI < 20 kg/m² → Nahrungsmangel wahrscheinlich. Unter 65-Jährige: erst ab BMI 18,5 kg/m².", s: "S. 10" },
    { f: "Welche Beobachtungen sind laut Heft Anzeichen für Nahrungs- und Flüssigkeitsmangel?",
      o: ["Tief liegende Augen", "Konzentrierter Urin", "Eng gewordene Kleidung", "Heller, stark verdünnter Urin"],
      r: 2,
      e: "Anzeichen: unbeabsichtigter Gewichtsverlust, subjektiver Eindruck, weit gewordene Kleidung, tief liegende Augen, plötzliche Verwirrtheit, konzentrierter Urin.", s: "S. 10" },
    { f: "Welche Trinkmenge gilt laut Heft als auffällig gering?",
      o: ["Weniger als 100 ml der angebotenen Getränke am Tag", "Weniger als 2000 ml am Tag", "Weniger als 1500 ml am Tag", "Weniger als 1000 ml am Tag"],
      e: "Auffällig geringe Ess-/Trinkmengen: Speisen/Getränke über mehrere Tage nicht oder unvollständig verzehrt, auffällig große Essensreste oder weniger als 100 ml der angebotenen Getränke am Tag.", s: "S. 10" },
    { f: "Was erhöht laut Heft den Bedarf an Energie, Nährstoffen bzw. Flüssigkeit?",
      o: ["Offene Wunden (z. B. Dekubitus, Ulcus cruris)", "Fieber", "Medizinisch gewünschte Gewichtsreduktion", "Kleinere Portionen"],
      r: 2,
      e: "Erhöhter Bedarf: schwere akute/chronische Erkrankungen, Fieber, offene Wunden (Dekubitus, Ulcus cruris), Hyperaktivität (Demenz, Stress); Flüssigkeit zusätzlich: geheizte Räume, Sommerhitze, Kleidung; Absorptions-/Digestionsstörung, starker Blutverlust.", s: "S. 11" },
    { f: "Über welchen Zeitraum werden Ess- und Trinkprotokolle im vertieften Assessment etwa geführt?",
      o: ["Über mehrere Tage (ca. 3–5)", "Nur während einer Mahlzeit", "Über drei Monate", "Über ein Jahr"],
      e: "Einfache Ess- und Trinkprotokolle (Datum, Uhrzeit, Art der Mahlzeit, angebotene/verzehrte Menge, Getränke), grobe Mengenerfassung per Tellerdiagramm, über ca. 3–5 Tage.", s: "S. 12" },
    { f: "Wie wird die verzehrte Menge mit einem Tellerdiagramm erfasst?",
      o: ["Grob: alles · Hälfte · Viertel · nichts", "Grammgenau mit einer Küchenwaage", "In Kilokalorien pro Mahlzeit", "Nur als „gegessen“ oder „nicht gegessen“ pro Tag"],
      e: "Grobe Mengenerfassung mit Tellerdiagrammen: alles, Hälfte, Viertel, nichts.", s: "S. 12" },
    { f: "Zu welcher Faktorengruppe des vertieften Assessments gehört eine unangenehme Ess-Situation (Geräusche, Gerüche, Tischnachbarn)?",
      o: ["Umgebung", "Angebot", "Körperlich/kognitiv bedingte Beeinträchtigungen", "Erhöhter Bedarf/Verlust"],
      e: "Umgebung: unangenehme Ess-Situation (Geräusche, Gerüche, Tischnachbarn), inadäquate Essenszeiten, Hilfsmittelangebot, Beziehung zu Versorgungspersonen. Angebot: Unzufriedenheit, Konsistenz, Diät, Speisenplanung.", s: "S. 13" },
    { f: "Kann das vertiefte Assessment trotz auffälligen Screenings „keine Mangelernährung“ ergeben?",
      o: ["Ja, z. B. bei medizinisch gewünschter Gewichtsreduktion", "Nein, ein auffälliges Screening beweist eine Mangelernährung", "Nein, das Assessment dient nur der Bestätigung", "Nur wenn der BMI über 30 kg/m² liegt"],
      e: "Das Assessment kann trotz auffälligen Screenings „keine Mangelernährung“ ergeben, z. B. bei medizinisch gewünschter Gewichtsreduktion.", s: "S. 14" },
    { f: "Welche Zuordnungen von Problem und Berufsgruppe nennt das Heft?",
      o: ["Zahn-/Kieferprobleme → Zahnmediziner (verpflichtend)", "Schluckstörungen → Logopäden", "Selbstständige Nahrungsaufnahme üben → Zahnmediziner", "Schluckstörungen → allein das Küchenpersonal"],
      r: 2,
      e: "Zahn-/Kieferprobleme: Zahnmediziner verpflichtend; Schluckstörungen: Logopäden (Schluckakt, Schlucktraining, Konsistenz); selbstständige Nahrungsaufnahme üben: Ergotherapeuten.", s: "S. 17", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Was gehört laut Heft zum Umgang mit ethisch komplexen Fragen (z. B. Nahrungsverweigerung, künstliche Ernährung)?",
      o: ["Fallbesprechungen mit Betroffenen, Angehörigen/Betreuern und Berufsgruppen", "Den Willen bzw. mutmaßlichen Willen berücksichtigen", "Die Pflegefachkraft entscheidet allein, ohne Angehörige einzubeziehen", "Patientenverfügungen bleiben unberücksichtigt"],
      r: 2,
      e: "Patientenverfügung und Vorsorgevollmacht kennen; Fallbesprechungen mit Betroffenen, Angehörigen/Betreuern, Berufsgruppen; Wille bzw. mutmaßlicher Wille; ggf. Ethikkommission/-experte.", s: "S. 15–16", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Was muss in Phase 2 laut Heft nachvollziehbar dokumentiert werden?",
      o: ["Auch notwendige, aber abgelehnte Maßnahmen – mit Begründung", "Nur die tatsächlich durchgeführten Maßnahmen", "Nur Maßnahmen der Pflege, nicht die anderer Berufsgruppen", "Ein Verzicht nach ethischer Fallbesprechung wird nicht dokumentiert"],
      e: "Maßnahmen nachvollziehbar dokumentieren – auch abgelehnte Maßnahmen, Maßnahmen anderer Berufsgruppen und Verzicht nach Fallbesprechung, jeweils mit Begründung.", s: "S. 17", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Was verknüpft die individuelle Maßnahmenplanung (Phase 3)?",
      o: ["Biographiearbeit, aktuelle Ernährungsgewohnheiten und Erkenntnisse aus dem vertieften Assessment", "Ausschließlich den Standardspeiseplan der Küche", "Nur den aktuellen BMI", "Nur die ärztliche Anordnung, ohne Betroffene einzubeziehen"],
      e: "Planung verknüpft Biographiearbeit, aktuelle Ernährungsgewohnheiten und Assessment-Erkenntnisse; Vorlieben, Abneigungen, Ressourcen; Aushandlungsprozess mit Betroffenen/Angehörigen.", s: "S. 18", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Was gehört laut Heft zum Konzept zur Ernährungsversorgung (S3b)?",
      o: ["Über drei Hauptmahlzeiten hinaus Zwischen- und Spätmahlzeiten sowie Getränke", "Kleinere/halbe Portionen als Ersatz prüfen", "Mahlzeiten grundsätzlich auf die drei Hauptmahlzeiten beschränken", "Getränke nur zu den Hauptmahlzeiten anbieten"],
      r: 2,
      e: "Konzept: Kost- und Darreichungsformen, Verpflegungszeiten, Menübestellsystem, Tisch- und Esskultur, Essensverteilung; ungestörte Mahlzeiten; über drei Hauptmahlzeiten hinaus Zwischen- und Spätmahlzeiten sowie Getränke; kleinere/halbe Portionen als Ersatz prüfen.", s: "S. 18–19", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Welcher Grundsatz gilt laut Heft für die Unterstützung beim Essen?",
      o: ["Selbstständigkeitserhaltende und selbstständigkeitsfördernde Unterstützung ist immer das Ziel", "Vollständige Übernahme, um Zeit zu sparen", "Unterstützung nur durch ungeschulte Laienhelfer", "Unterstützung nur während der Hauptmahlzeiten"],
      e: "Eine selbstständigkeitserhaltende und selbstständigkeitsfördernde Unterstützung sollte immer das Ziel aller pflegerischen Bestrebungen sein; Laienhelfer nur vertraut und angeleitet.", s: "S. 20", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Was bedeutet „geschützte Essenszeiten“?",
      o: ["Keine vermeidbaren Unterbrechungen und keine sonstigen pflegerischen oder therapeutischen Maßnahmen während der Mahlzeiten", "Visiten und Therapien gezielt in die Mahlzeiten legen", "Möglichst viele Reize zur Anregung des Appetits schaffen", "Essen nur zu fest vorgegebenen, für alle gleichen Zeiten ohne Ausnahme"],
      e: "Mahlzeiten so planen, dass vermeidbare Unterbrechungen/Störungen ausbleiben und keine sonstigen pflegerischen oder therapeutischen Maßnahmen stattfinden; helle Räume, überschaubare Essplätze, Ambiente gegen Reizüberflutung.", s: "S. 20", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Welche Mahlzeitendauer kann laut Heft die Verzehrmenge steigern?",
      o: ["Mehr als 45 Minuten", "Höchstens 10 Minuten", "Höchstens 20 Minuten", "Die Dauer hat keinen Einfluss"],
      e: "Mahlzeitendauer > 45 Minuten kann die Verzehrmenge steigern; Essen warmhalten.", s: "S. 20–21" },
    { f: "Warum ist Information und Beratung in der ambulanten Pflege besonders wichtig?",
      o: ["Kein vollumfänglicher Pflegevertrag, Pflegefachkräfte nur zeitweise anwesend – Eigenverantwortung fördern", "Weil ambulant keine Mangelernährung vorkommt", "Weil ambulant ausschließlich Ernährungsfachkräfte beraten dürfen", "Weil dort keine Dokumentation nötig ist"],
      e: "Ambulant: kein vollumfänglicher Pflegevertrag, nur zeitweise Präsenz → Eigenverantwortung fördern; Inhalte, Verlauf, Ergebnisse dokumentieren.", s: "S. 21–22", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Was ist das Ergebniskriterium E6 (Evaluation)?",
      o: ["Keine Anzeichen für Mangelernährung, soweit durch orale Nahrungsaufnahme möglich", "Ein BMI über 25 kg/m²", "Eine Gewichtszunahme von mindestens 5 %", "Umstellung aller Betroffenen auf Trinknahrung"],
      e: "E6: keine Anzeichen für Mangelernährung, soweit durch orale Ernährung möglich; wird das Ziel wegen der Bedürfnisse der Person nicht erreicht, wird dies dokumentiert.", s: "S. 22–23", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Ein Mensch in einer palliativen Situation lehnt Nahrung ab. Was gilt laut Heft?",
      o: ["Selbstbestimmung und Autonomie haben Vorrang vor der Bedarfszielsetzung – Ablehnung akzeptieren", "Der Bedarf hat Vorrang – weiter anreichen, bis der Teller leer ist", "Sofort ohne Absprache eine Sonde legen lassen", "Die Ablehnung wird nicht dokumentiert"],
      e: "Selbstbestimmung und Autonomie haben stets Vorrang vor Bedarfszielsetzung – z. B. Ablehnung von Nahrung in palliativen Situationen akzeptieren; Ruhe und Symptomlinderung haben Priorität.", s: "S. 22–23", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Wovor warnt das Heft bei Versorgung beim Essen unter Zeitdruck oder Drängen?",
      o: ["Gewalt in der Pflege und Probleme in der Pflegebeziehung", "Zu hohe Verzehrmengen", "Zu langsame Gewichtszunahme", "Überforderung der Küche"],
      e: "Versorgung unter Zeitdruck oder Drängen kann zu Gewalt in der Pflege und Problemen in der Pflegebeziehung führen; gewahrte Autonomie fördert Akzeptanz.", s: "S. 24" },
    { f: "Was folgt laut Prozessablauf, wenn das Screening keine Anzeichen ergibt?",
      o: ["Keine weiteren Maßnahmen; Überprüfung in individuell festgelegten Abständen und bei akuten Veränderungen", "Trotzdem immer ein vertieftes Assessment", "Sofortige Gabe von Trinknahrung", "Sofortige Umstellung auf enterale Ernährung"],
      e: "Prozessablauf: Screening → Anzeichen? (nein → keine weiteren Maßnahmen) → … Überprüfung in individuell festgelegten Abständen und bei akuten Veränderungen.", s: "S. 26", sp: ["ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen"] },
    { f: "Welche Aussage zu enteraler und parenteraler Ernährung trifft laut Glossar zu?",
      o: ["Enterale Ernährung ist physiologisch, sicher, ökonomisch und der parenteralen vorzuziehen", "Parenterale Ernährung ist der enteralen grundsätzlich vorzuziehen", "Enterale Ernährung bedeutet Zufuhr über die Vene", "Enterale und parenterale Ernährung dürfen nie kombiniert werden"],
      e: "Enteral: Zufuhr per Sonde oder Enterostoma über den Gastrointestinaltrakt; physiologisch, sicher, ökonomisch – der parenteralen vorzuziehen. Parenteral: intravenös; parallel oder abwechselnd mit enteraler möglich.", s: "S. 27", sp: ["ernaehrung: Basiswissen zur Ernährung"] }
  ],

  zusammenfassung: `
<h3>1. Hintergrund, Definition und Ziel <span class="seite">S. 2–4</span></h3>
<ul>
  <li><span class="sp" data-sp="ernaehrung: Basiswissen zur Ernährung">Schwerpunkt</span><b>Grundbedürfnis:</b> Bedürfnis = körperlicher oder geistiger Mangelzustand. Primäre Bedürfnisse (Sauerstoff, Schlaf, Sexualität, Wärme, v. a. Nahrung und Trinken) dienen der Selbst- und Arterhaltung. Im Bedürfnis-„Turm“ sind Hunger und Durst das Fundament (S. 2).</li>
  <li>Mangelernährung führt zu gesundheitlichen Risiken, verhindert/verzögert Heilung und kann Pflegebedürftigkeit verstärken; bei Risikopatienten drohen schnell existenzbedrohliche Folgen (S. 2).</li>
  <li>Expertenstandard erstellt, veröffentlicht und <b>2017 aktualisiert</b>; beschreibt frühzeitige Erfassung/Bewertung, Ursachen und Planung einer bedürfnisorientierten, bedarfsgerechten Ernährung als strukturierten Ablauf (S. 3).</li>
</ul>
<p class="merke"><span class="sp" data-sp="ernaehrung: Basiswissen zur Ernährung">Schwerpunkt</span><b>Mangelernährung</b> (in Anlehnung an die DGEM): ein <b>anhaltendes Defizit an Energie und/oder Nährstoffen</b> im Sinne einer negativen Bilanz zwischen Aufnahme und Bedarf – mit Konsequenzen und Einbußen für Ernährungszustand, physiologische Funktion und Gesundheitszustand. „Nahrung“ = Essen und Trinken. Nicht jede Nahrungskarenz ist Mangelernährung; eine Gewichtsabnahme ist nicht Teil der Definition (S. 4).</p>
<p class="merke"><span class="sp" data-sp="ernaehrung: Ziel">Schwerpunkt</span><b>Ziel:</b> Bei jedem Menschen mit pflegerischem Unterstützungsbedarf ist eine orale Nahrungsaufnahme entsprechend seinen <b>Bedürfnissen und seinem Bedarf</b> gesichert, und einer drohenden oder bestehenden Mangelernährung wird entgegengewirkt (S. 4).</p>
<ul>
  <li>Essen und Trinken sind wichtig für Lebensqualität sowie soziale und kulturelle Identität. Reicht die orale Zufuhr nicht: ernährungstherapeutische Beratung/Behandlung durch Ernährungsfachkräfte/Ärzte. Auch bei enteraler/parenteraler Ernährung unterstützt die Pflege die <b>orale</b> Nahrungsaufnahme, sofern kein Schaden entsteht (S. 4).</li>
</ul>

<h3>2. Zielgruppe, Anwender, Voraussetzungen <span class="seite">S. 4–6</span></h3>
<div class="tabelle"><table>
  <thead><tr><th></th><th>Inhalt (Heft)</th></tr></thead>
  <tbody>
    <tr><td><span class="sp" data-sp="ernaehrung: Zielgruppe">Schwerpunkt</span>Zielgruppe</td><td>erwachsene Menschen mit Pflegebedürftigkeit, die ganz oder teilweise oral Nahrung und Flüssigkeit aufnehmen können; Angehörige (Anamnese, Umsetzung, Information/Beratung/Anleitung). <b>Nicht:</b> Säuglinge, Kleinkinder, Jugendliche; spezielles Ernährungsmanagement z. B. bei Diabetes mellitus oder Anorexia nervosa</td></tr>
    <tr><td><span class="sp" data-sp="ernaehrung: Anwender:innen">Schwerpunkt</span>Anwender</td><td>Pflegefachkräfte in Krankenhaus, stationärer Rehabilitation und Altenhilfe, ambulanter Versorgung; Wissen über Fort-/Weiterbildung vertiefen. Pflegefachkräfte haben die <b>Schlüsselrolle</b> im multidisziplinären Team (Nähe zu Betroffenen)</td></tr>
    <tr><td>Umsetzung</td><td>Pflegekräfte beeinflussen das Ernährungsverhalten stark (Umgebungs- und Beziehungsgestaltung). Unzureichende Unterstützung v. a. durch Zeitmangel, Mangel an qualifiziertem Personal, häufigen Personalwechsel → Personal-/Zeitplanung; personenorientierte Organisation, z. B. <b>Primary Nursing</b></td></tr>
    <tr><td>Team</td><td>Küchenpersonal, Ernährungsfachkräfte (Diätassistenten), Ärzte/Zahnärzte, Logopäden, Ergotherapeuten, hauswirtschaftliche Fachkräfte; Funktionen in multiprofessioneller Verfahrensregelung festlegen</td></tr>
  </tbody>
</table></div>

<h3>3. Aufbau: sechs Phasen mit S-, P-, E-Kriterien <span class="sp" data-sp="ernaehrung: Aufbau des Expertenstandards|ernaehrung: Phasen">Schwerpunkt</span> <span class="seite">S. 6–7</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Phase</th><th>Struktur (S)</th><th>Prozess (P)</th><th>Ergebnis (E)</th></tr></thead>
  <tbody>
    <tr><td>1 Einschätzung des Ernährungszustandes</td><td>S1a Kompetenz zu Screening und vertieftem Assessment · S1b Instrumente/Hilfsmittel zur Einschätzung und Dokumentation</td><td>Screening zu Beginn, bei akuten Veränderungen, in festzulegenden Abständen; bei Anzeichen vertieftes Assessment</td><td>aktuelles Screening für alle; bei Anzeichen vertieftes Assessment erfolgt</td></tr>
    <tr><td>2 Kooperation mit anderen Berufsgruppen</td><td>S2a Fachwissen zur Steuerung berufsgruppenübergreifender Maßnahmen, Kompetenz bei ethisch komplexen Fragen · S2b multiprofessionelle Verfahrensregelung</td><td>Koordination auf Grundlage der Verfahrensregelung in enger Kooperation</td><td>Maßnahmen koordiniert und ggf. ethisch begründet</td></tr>
    <tr><td>3 Maßnahmenplanung</td><td>S3a Kompetenz zur Planung individueller Mahlzeiten- und Interaktionsgestaltung · S3b Konzept zur Ernährungsversorgung</td><td>gemeinsame Planung mit Betroffenen/Angehörigen (Umgebung, Speisen, Getränke, Darreichungsformen), ggf. weitere Berufsgruppen</td><td>individueller Maßnahmenplan liegt vor</td></tr>
    <tr><td>4 umfassende, fachgerechte Unterstützung</td><td>S4a Kompetenz zur Unterstützung inkl. Risikosituationen · S4b Personalausstattung, geeignete Räume</td><td>Selbstbestimmung/Eigenaktivität fördern, motivierende Interaktions-/Umgebungsgestaltung; besondere Gesundheitsprobleme berücksichtigen</td><td>umfassende Unterstützung während und außerhalb der Essenszeiten; Umgebung bedürfnis-/bedarfsgerecht</td></tr>
    <tr><td>5 Information, Beratung, Anleitung</td><td>S5 Informations-, Beratungs-, Anleitungskompetenz</td><td>Information/Beratung zu Entstehung, Folgen, Möglichkeiten; ggf. Anleitung</td><td>Betroffene/Angehörige informiert, beraten, ggf. angeleitet</td></tr>
    <tr><td>6 Evaluation</td><td>S6 Kompetenz, Angemessenheit und Wirksamkeit zu beurteilen</td><td>gemeinsame Überprüfung von Erfolg und Akzeptanz; ggf. Neueinschätzung, Planänderung</td><td>keine Anzeichen für Mangelernährung, soweit durch orale Nahrungsaufnahme möglich</td></tr>
  </tbody>
</table></div>
<p><span class="sp" data-sp="ernaehrung: Struktur">Schwerpunkt</span><b>Struktur</b> = Voraussetzungen (Was muss die Einrichtung vorhalten, was muss die Pflegefachkraft wissen/können?) · <b>Prozess</b> = Handlungen (Was muss wann wie getan werden?) · <b>Ergebnis</b> = Was muss vorliegen, um die Phase abzuschließen? (S. 6)</p>

<h3>4. Phase 1 – Einschätzung des Ernährungszustandes <span class="sp" data-sp="ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen">Schwerpunkt</span> <span class="seite">S. 8–14</span></h3>
<div class="tabelle"><table>
  <thead><tr><th>Schritt</th><th>Instrument / Ziel</th><th>Zeitpunkt</th></tr></thead>
  <tbody>
    <tr><td>1 Screening</td><td>kurze, leicht durchführbare Erhebung zur frühzeitigen Identifikation gefährdeter oder betroffener Menschen; systematische Ermittlung von Anzeichen</td><td>zu Beginn des pflegerischen Auftrags · bei akuten Veränderungen · in individuell festzulegenden Abständen; Langzeitpflege ohne Anzeichen mind. <b>alle 3 Monate</b> (S. 14)</td></tr>
    <tr><td>2 vertieftes Assessment</td><td>tiefergehende Einschätzung der Ernährungssituation und beeinflussender Faktoren, um Maßnahmen zu planen; Ursachen erfassen</td><td>nach jedem auffälligen Screening</td></tr>
  </tbody>
</table></div>
<ul>
  <li><b>Instrumente (S1b):</b> derzeit empfiehlt die Expertengruppe <b>kein</b> Assessmentinstrument; Teil 1 des <b>PEMU</b> (Pflegerische Erfassung von Mangelernährung und deren Ursachen) bewährt in der Langzeitpflege. Screening in die Pflegeanamnese integrieren (keine Doppeldokumentation). Hilfsmittel für Gewicht und Größe vorhalten; ambulant mitgebrachte Waagen hygienisch und genau; auf Wiegen verzichten, wenn es zu belastend ist (S. 9).</li>
  <li><b>BMI/Gewicht:</b> Einzeldaten nicht überbewerten; auch bei hohem BMI/Übergewicht Mangelernährung möglich; <b>Gewichtsverlauf</b> meist aussagekräftiger als BMI (S. 10).</li>
  <li><b>Screening prüft:</b> möglichen Nahrungs-/Flüssigkeitsmangel · auffällig geringe Ess- und Trinkmengen · erhöhten Bedarf bzw. Verluste (S. 10).</li>
</ul>
<div class="tabelle"><table>
  <thead><tr><th>Screening-Bereich</th><th>Anzeichen (Heft)</th></tr></thead>
  <tbody>
    <tr><td>Nahrungs-/Flüssigkeitsmangel</td><td>unbeabsichtigter Gewichtsverlust (z. B. <b>5 % in 1–3 Monaten</b> oder <b>10 % in 6 Monaten</b>), subjektiver Eindruck; weit gewordene Kleidung, tief liegende Augen, plötzliche Verwirrtheit, konzentrierter Urin. BMI <b>&lt; 20 kg/m²</b> bei über 64-Jährigen → Mangel wahrscheinlich; unter 65 Jahren erst ab <b>18,5 kg/m²</b></td></tr>
    <tr><td>geringe Ess-/Trinkmenge</td><td>Speisen/Getränke über mehrere Tage nicht oder unvollständig verzehrt; große Essensreste; weniger als <b>100 ml</b> der angebotenen Getränke pro Tag; Ursachen krankheits-, therapie-, altersbedingt, psychosozial, umgebungsbedingt</td></tr>
    <tr><td>erhöhter Bedarf</td><td>schwere akute/chronische Erkrankungen, Fieber, offene Wunden (Dekubitus, Ulcus cruris), Hyperaktivität (Demenz, Stress); Flüssigkeit: geheizte Räume, Sommerhitze, Kleidung; Absorptions-/Digestionsstörung, starker Blutverlust</td></tr>
    <tr><td>ambulant zusätzlich</td><td>fehlende Unterstützung im Haushalt; eingeschränkte Lebensmittelversorgung (Finanzen, Einkauf, Kostformen) und Lebensführung (Besorgung, Zubereitung); Einschränkungen beim Essen/Trinken; soziale Isolation, Einsamkeit, Depression</td></tr>
    <tr><td>stationär zusätzlich</td><td>Unruhe bei Mahlzeiten, störende Bewohner; nicht geäußerte Bedürfnisse/Gewohnheiten; Zurückhaltung beim Einfordern von Unterstützung oder bei Ablehnung der Gemeinschaftsverpflegung</td></tr>
  </tbody>
</table></div>
<p><b>Vertieftes Assessment</b> (S. 12–14): <b>Ess- und Trinkprotokolle</b> (Datum, Uhrzeit, Art der Mahlzeit, angebotene/verzehrte Menge, Getränke), grobe Mengenerfassung per <b>Tellerdiagramm</b> (alles · Hälfte · Viertel · nichts), über ca. <b>3–5 Tage</b>. Ursachenanalyse:</p>
<div class="tabelle"><table>
  <thead><tr><th>Faktorengruppe</th><th>Beispiele (Heft)</th></tr></thead>
  <tbody>
    <tr><td>körperlich/kognitiv</td><td>kognitive Überforderung (Demenz), Funktionseinschränkung Hände/Arme, schlechter Mundzustand, Zahnprobleme/Kauen, Schluckstörungen, Müdigkeit (Medikamente, Schlaf-Wach-Rhythmus), Seh-/Hörbeeinträchtigung</td></tr>
    <tr><td>fehlende Lust, kein Appetit, Ablehnung</td><td>psychische Belastung (Einsamkeit, Heimweh), akute Krankheit, Schmerzen, Immobilität, Wunsch nach verringerter Ausscheidung, reduziertes Hunger-/Durstgefühl, Medikamentennebenwirkungen, reduzierter Geruchs-/Geschmackssinn, fehlende Information, kulturelle/religiöse Gründe, Abneigungen, Angst vor Unverträglichkeiten</td></tr>
    <tr><td>Umgebung</td><td>unangenehme Ess-Situation (Geräusche, Gerüche, Tischnachbarn), inadäquate Essenszeiten, Hilfsmittelangebot, Beziehung zu Versorgungspersonen</td></tr>
    <tr><td>Angebot</td><td>Unzufriedenheit mit dem Angebot, unangemessene Konsistenz, nicht akzeptierte oder inadäquate Diät, Speisenplanung</td></tr>
    <tr><td>erhöhter Bedarf/Verlust</td><td>Energie/Nährstoffe: Fieber, Infektionen, Tumor, offene Wunden, Dekubitus, Stress, Blutverlust, Erbrechen, Durchfälle, Hyperaktivität · Flüssigkeit: Krankheit, starkes Schwitzen, Hitze</td></tr>
  </tbody>
</table></div>
<p>Problembereiche so präzisieren, dass Maßnahmen unter Berücksichtigung von Ressourcen planbar sind; bei Bedarf andere Berufsgruppen (z. B. Kauen/Schlucken, Unverträglichkeiten). Das Assessment kann trotz auffälligen Screenings „keine Mangelernährung“ ergeben, z. B. bei medizinisch gewünschter Gewichtsreduktion (S. 14).</p>

<h3>5. Phase 2 – Kooperation mit anderen Berufsgruppen <span class="sp" data-sp="ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen">Schwerpunkt</span> <span class="seite">S. 15–17</span></h3>
<ul>
  <li>Pflegefachkraft trägt große Verantwortung für Koordination und Planung; biographische, religiöse, kulturelle Einflüsse beachten; Zwiespalt zwischen objektivem Bedarf und Befugnissen der Betroffenen sensibel aushandeln; leitet ernährungsmedizinische, diagnostische, therapeutische Maßnahmen rechtzeitig ein (S. 15).</li>
  <li><b>Ethisch komplexe Fragen</b> (Nahrungsverweigerung, künstliche Ernährung): Patientenverfügung, Vorsorgevollmacht kennen; <b>Fallbesprechungen</b> mit Betroffenen, Angehörigen/Betreuern, Berufsgruppen; Wille bzw. <b>mutmaßlicher Wille</b> (z. B. fortgeschrittene Demenz, Koma); ggf. Ethikkommission/-experte – in der Altenhilfe extrem selten (S. 15–16).</li>
  <li><b>Verfahrensregelung (S2b)</b> (S. 16): <b>Zuständigkeiten</b> (wer erfasst/bewertet, führt durch, entscheidet über Ernährungsexperten, koordiniert) · <b>Abläufe</b> (Bereitstellung, Lieferung, Angebot/Verabreichung von Speisen, Getränken, Trinknahrung, Anreicherung, Mahlzeitengestaltung, Unterstützung) · <b>Autorisierung</b> der Pflegefachkraft zur Initiierung und Koordination (Experten, Fallbesprechungen, Hilfskräfte).</li>
  <li><b>Berufsgruppen</b> (S. 17): Zahn-/Kieferprobleme → Zahnmediziner <b>verpflichtend</b>; Schluckstörungen → Logopäden (Schluckakt, Schlucktraining, Konsistenz); selbstständige Nahrungsaufnahme üben → Ergotherapeuten. <i>Beispiel:</i> Patientin mit Chorea Huntington, pürierte Kost, wöchentliche Logopädie – Küche stellt am Therapietag passende Kostform, Koordination durch Pflege.</li>
  <li><b>E2/Dokumentation</b> (S. 17): bei ethisch schwierigen Situationen ggf. formale Entscheidungshilfe für/gegen künstliche Ernährung; Maßnahmen nachvollziehbar dokumentieren – auch <b>abgelehnte</b> Maßnahmen, Maßnahmen anderer Berufsgruppen und Verzicht nach Fallbesprechung, jeweils mit Begründung.</li>
</ul>

<h3>6. Phase 3 – Maßnahmenplanung <span class="sp" data-sp="ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen">Schwerpunkt</span> <span class="seite">S. 18–19</span></h3>
<ul>
  <li><b>S3a:</b> Planung verknüpft <b>Biographiearbeit</b>, aktuelle Ernährungsgewohnheiten und Assessment-Erkenntnisse; Vorlieben, Abneigungen, Ressourcen; Aushandlungsprozess mit Betroffenen/Angehörigen. Ambulant: Verpflegung sicherstellen/organisieren (z. B. Essen auf Rädern, Haushaltshilfe), Kontakt zu Anbietern (S. 18).</li>
  <li><b>S3b – Konzept zur Ernährungsversorgung:</b> Kost- und Darreichungsformen, Verpflegungszeiten, Menübestellsystem, Tisch- und Esskultur, Essensverteilung; ungestörte Mahlzeiten; über <b>drei Hauptmahlzeiten hinaus</b> Zwischen- und Spätmahlzeiten sowie Getränke; Demenz: Tischgemeinschaft, angepasstes Geschirr/Besteck ausprobieren; Anforderungen an Catering; kleinere/halbe Portionen als Ersatz prüfen (S. 18–19).</li>
  <li><b>P3/E3:</b> individueller Maßnahmenplan gemeinsam mit den Betroffenen; erkennen, ob Anpassung nötig ist (Energie-/Eiweißanreicherung, Konsistenzveränderung) und welche Berufsgruppen (z. B. Ärzte für Zusatznahrung) einzubeziehen sind (S. 19).</li>
</ul>

<h3>7. Phase 4 – Umfassende, fachgerechte Unterstützung <span class="sp" data-sp="ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen">Schwerpunkt</span> <span class="seite">S. 19–21</span></h3>
<ul>
  <li><b>S4a:</b> appetitfördernde/-erhaltende Strategien; Methoden bei kognitiven Beeinträchtigungen, eingeschränkter Arm-/Handfunktion, Schluckstörungen; Umgang mit Gefahren wie <b>Aspiration</b> (S. 19–20).</li>
  <li><b>S4b:</b> angemessene Personalausstattung (auch angeleitete ehrenamtliche Laienhelfer); Menschen mit Einschränkungen brauchen oft mehr Zeit (S. 20).</li>
</ul>
<p class="merke"><b>Eine selbstständigkeitserhaltende und selbstständigkeitsfördernde Unterstützung sollte immer das Ziel aller pflegerischen Bestrebungen sein</b> (S. 20).</p>
<ul>
  <li><b>Geschützte Essenszeiten:</b> vermeidbare Unterbrechungen/Störungen vermeiden, keine sonstigen pflegerischen oder therapeutischen Maßnahmen; helle Räume, überschaubare Essplätze, Ambiente gegen Reizüberflutung (Demenz), Abstellplätze für Gehhilfen/Rollstühle, flexible Tischgemeinschaften; ambulant: Beratung zur Umgebung (S. 20).</li>
  <li><b>Maßnahmen:</b> mundgerechte Zubereitung, Bereitstellung, Anleitung zu Hilfsmitteln, Impulse zum Beginnen/Weiteressen, Anleiten, Anreichen bis vollständiges Anreichen; Essen warmhalten; Mahlzeitendauer <b>&gt; 45 Minuten</b> kann Verzehrmenge steigern; Tischsitten und Rituale nach Gewohnheit (S. 20–21).</li>
</ul>

<h3>8. Phase 5 – Information, Beratung, Anleitung <span class="sp" data-sp="ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen">Schwerpunkt</span> <span class="seite">S. 21–22</span></h3>
<p>Pflegefachkraft informiert und berät zu Entstehung und Folgen von Mangelernährung und Flüssigkeitsmangel sowie Möglichkeiten einer angemessenen Ernährung, leitet ggf. an. Ambulant besonders wichtig (kein vollumfänglicher Pflegevertrag, nur zeitweise Präsenz → Eigenverantwortung fördern). Inhalte, Verlauf, Ergebnisse (z. B. Zielvereinbarungen) dokumentieren; bei Bedarf Ernährungsfachkraft für differenzierte Beratung.</p>

<h3>9. Phase 6 – Evaluation <span class="sp" data-sp="ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen">Schwerpunkt</span> <span class="seite">S. 22–23</span></h3>
<ul>
  <li><b>S6:</b> Erfolg, Angemessenheit, Wirksamkeit beurteilen; Grenzen der oralen Nahrungsaufnahme erkennen und ggf. enterale/parenterale Zufuhr in Absprache anregen; palliativ ethische Entscheidungen (Beendigung/Fortsetzung oraler Ernährung, künstliche Ernährung) (S. 22).</li>
  <li><b>P6:</b> gemeinsam in individuellen Abständen überprüfen (z. B. Gewichtsverlauf, wiederholte Erfassung der Ess-/Trinkgewohnheiten). Verzehrmengen beeinflusst durch angebotene Speisen, Tischgemeinschaft, Geschehnisse im Umfeld, unzureichend behandelte Schmerzen, Medikation → weiterführen, neu einschätzen oder anpassen (S. 22–23).</li>
  <li><b>E6:</b> keine Anzeichen für Mangelernährung, soweit durch orale Ernährung möglich; wird das Ziel wegen der Bedürfnisse der Person nicht erreicht, wird dies dokumentiert (S. 23).</li>
</ul>
<p class="merke"><b>Selbstbestimmung und Autonomie des Menschen haben stets Vorrang vor Bedarfszielsetzung</b> – z. B. Ablehnung von Nahrung in palliativen Situationen akzeptieren (S. 23).</p>

<h3>10. Zusammenfassung, Einführung, Prozessablauf <span class="seite">S. 24–26</span></h3>
<p class="merke"><b>Nur wenn die Pflegekraft die Ursachen für das Verhalten und/oder die Wünsche des betroffenen Menschen kennt, kann sie die Maßnahmen so gestalten, dass die Versorgung als bedarfsgerecht und angenehm empfunden wird</b> (S. 24).</p>
<ul>
  <li>Versorgung unter Zeitdruck oder Drängen kann zu Gewalt in der Pflege und Problemen in der Pflegebeziehung führen; Abhängigkeit beim Essen kann abwehrendes Verhalten auslösen; gewahrte Autonomie fördert Akzeptanz (S. 24).</li>
  <li><b>Einführung</b> (S. 24–25): Auseinandersetzung auf Managementebene (PDL/QB) · Verständnis der Zielsetzung · Reflexion von Ressourcen und Maßnahmen · Anpassung an die Einrichtung (Qualitätszirkel) · Implementierungsschritte mit verbindlicher Terminierung · Information/Schulung der Mitarbeitenden · interne/externe Schulungen.</li>
  <li><span class="sp" data-sp="ernaehrung: Phasen – Allgemeines inhaltliches Wissen zu den Phasen">Schwerpunkt</span><b>Prozessablauf</b> (S. 26): Versorgungsbeginn/akute Veränderung → Screening → Anzeichen? (nein → keine weiteren Maßnahmen) → vertiefendes Assessment (Ess-/Trinkprotokolle) → Anzeichen? → Planung/Koordination (Maßnahmenplan) → Umsetzung inkl. Information, Beratung, Schulung → Evaluation → erfolgreich? (nein → Anpassung) → fortführen? (ja → erneute Evaluation; nein → keine Anzeichen). Überprüfung in individuell festgelegten Abständen und bei akuten Veränderungen.</li>
</ul>

<h3>Glossar <span class="seite">S. 27</span></h3>
<div class="tabelle"><table>
  <tbody>
    <tr><td><span class="sp" data-sp="ernaehrung: Basiswissen zur Ernährung">Schwerpunkt</span>Enterale Ernährung</td><td>Zufuhr per Sonde oder Enterostoma über den Gastrointestinaltrakt; physiologisch, sicher, ökonomisch – der parenteralen vorzuziehen</td></tr>
    <tr><td><span class="sp" data-sp="ernaehrung: Basiswissen zur Ernährung">Schwerpunkt</span>Parenterale Ernährung</td><td>Wasser, Nährstoffe, Vitamine, Mineralstoffe, Spurenelemente intravenös; parallel oder abwechselnd mit enteraler möglich</td></tr>
    <tr><td>Assessment</td><td>standardisierte Verfahren, Methoden, Instrumente für medizinische, funktionale, psychosoziale Fragen</td></tr>
    <tr><td>Expertenstandards</td><td>Instrumente zur Sicherung und Weiterentwicklung der Pflegequalität; verbindlich für alle stationären Einrichtungen und ambulanten Dienste; regelmäßig angepasst (Heft zitiert § 113 Abs. 1 SGB XI)</td></tr>
    <tr><td>Chorea Huntington</td><td>neurodegenerative Erkrankung, meist Manifestation zwischen 30. und 50. Lebensjahr; Bewegungsstörungen, psychische Veränderungen, zunehmender Abbau intellektueller Fähigkeiten</td></tr>
  </tbody>
</table></div>
`
});
