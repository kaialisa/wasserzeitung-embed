# WASSERZEITUNG – Artikel-Embed

Dieses Repository enthält **zwei Einbindungs-Methoden** für einen redaktionell ausgewählten Artikel:

---

## Option 1: iFrame

```html
<iframe
  src="https://kaialisa.github.io/wasserzeitung-embed/iframe-widget.html"
  width="320"
  height="450"
  style="border:none;max-width:100%;"
  title="WASSERZEITUNG Artikel">
</iframe>
```

---

## Option 2: JavaScript-Widget

### Mit unserem Styling:

```html
<div id="wasserzeitung-widget"></div>
<script src="https://kaialisa.github.io/wasserzeitung-embed/wasserzeitung-widget.js"></script>
```

### Ohne Styling (für eigenes Design):

```html
<div id="wasserzeitung-widget"></div>
<script src="https://kaialisa.github.io/wasserzeitung-embed/wasserzeitung-widget-unstyled.js"></script>
```

Bei der unstyled-Version können Sie folgende CSS-Klassen stylen:
- `.wz-newsItem` – Container-Link
- `.wz-imgWrap` – Bild-Container  
- `.wz-caption` – Bildunterschrift
- `.wz-info` – Text-Container
- `.wz-title` – Überschrift
- `.wz-excerpt` – Beschreibungstext
- `.wz-iconMore` – Pfeil-Icon

---

## Artikel aktualisieren

Den angezeigten Artikel ändern Sie in der Datei `featured-article.json`. Beide Methoden aktualisieren sich automatisch.

---

**Hinweis:** Beide Lösungen sind DSGVO-konform (keine Cookies, keine Tracker).