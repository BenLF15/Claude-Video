# iPad AR-Look „Hologramm“ – Einrichtung

Für: iPad (A16), iPadOS 27 · Dauer: ca. 5 Minuten

## Dateien
| Datei | Wofür |
|---|---|
| `Hintergrund-Sperrbildschirm.png` | Sperrbildschirm: schwebende Hologramm-Kugel mit Orbitringen, scharf und leuchtend |
| `Hintergrund-Startbildschirm.png` | Startbildschirm: dieselbe Szene, gedimmt und weichgezeichnet, damit die App-Symbole lesbar bleiben |

Beide Bilder sind quadratisch (2732 × 2732). So passen sie im Hoch- und im Querformat, und es bleibt Rand für den 3D-Bewegungseffekt.

## 1. Bilder aufs iPad holen
Öffne die beiden Bilder in der Claude-App, halte jeweils den Finger darauf und tippe auf **In Fotos sichern**.

## 2. Hintergrund setzen
1. *Einstellungen → Hintergrundbild → + Neues Hintergrundbild hinzufügen → Fotos* und dann **Hintergrund-Sperrbildschirm** wählen.
2. Unten rechts auf **„…“** tippen und **Perspektivenzoom** einschalten. Das Bild bewegt sich dann beim Neigen mit (AR-Effekt). Wenn dort **Räumliche Szene** angeboten wird, schalte sie ebenfalls ein. Dann löst sich die Kugel räumlich vom Hintergrund.
3. Oben auf die Uhr tippen und eine schmale, helle Schrift wählen. Als Farbe passt ein helles Türkis oder Weiß.
4. **Hinzufügen** und dann **Startbildschirm anpassen** wählen. Unten auf **Fotos** tippen, **Hintergrund-Startbildschirm** auswählen und die Unschärfe ausgeschaltet lassen, weil das Bild schon weichgezeichnet ist.

## 3. Futuristischer Glas-Look für die Symbole
1. *Einstellungen → Anzeige & Helligkeit* und dort **Dunkel** wählen.
2. Auf dem Startbildschirm lange auf eine freie Stelle drücken und dann *Bearbeiten → Anpassen* wählen.
3. **Klar** wählen und dabei die dunkle Variante nehmen. Die Symbole wirken dann wie Glas über dem Hologramm.
   Alternativ: **Getönt** mit einem Türkiston, passend zu den Ringen.
4. In derselben Ansicht die Symbolgröße auf **Groß** stellen. Das blendet die Namen aus und sieht ruhiger aus.

## 4. Widgets (ruhig und sparsam)
Empfehlung für eine Seite im Querformat:
- **Uhr** (Weltzeit oder Analog), klein, oben links
- **Wetter**, klein
- **Batterien**, klein, zeigt auch den Pencil-Akku
- **Kalender** („Als Nächstes“), mittel

Die übrigen Startbildschirmseiten kannst du ausblenden: lange drücken, auf die Seitenpunkte tippen und die Haken entfernen. Wenige Elemente halten den Look ruhig.

## 5. Bewegung aktiv lassen
*Einstellungen → Bedienungshilfen → Bewegung → Bewegung reduzieren* muss **aus** sein. Sonst funktioniert der 3D-Effekt nicht.

## Hinweis zu Kurzbefehl und Profil
Da du die Apps selbst anordnest, braucht es kein Konfigurationsprofil. Einen fertigen Kurzbefehl zum Importieren kann ich hier nicht erstellen: iPadOS nimmt nur Kurzbefehle an, die auf einem Apple-Gerät signiert wurden. Die Schritte oben ersetzen ihn vollständig.

## Selbst anpassen
`render/scene.html` erzeugt die Bilder. Farben, Größe der Kugel und Ringe stehen am Anfang des Skripts. Neu rendern lässt es sich mit `node render/render.js` (dafür werden Node und Playwright benötigt).
