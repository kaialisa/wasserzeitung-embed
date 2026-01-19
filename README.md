# WASSERZEITUNG – Artikel-Embed

Dieses Repository enthält ein selbstständiges HTML-Embed zur Einbindung
eines redaktionell ausgewählten Artikels (E-Paper) auf externen Websites.
Die Einbindung erfolgt per iframe.

Das Embed ist bewusst schlank gehalten und unabhängig von WordPress,
Tracking-Skripten oder Drittanbieter-Diensten.

## Einbindung

    <iframe
      src="https://kaialisa.github.io/wasserzeitung-embed/lwg-embed.html"
      style="width:100%;border:0;overflow:hidden;display:block;"
      height="360"
      loading="lazy"
      title="WASSERZEITUNG Artikel">
    </iframe>

## Technische Hinweise

- Das Embed besteht ausschließlich aus HTML und CSS.
- Es werden keine keine Tracking-Skripte geladen.
- Cookie-frei, da es von einer separaten statischen Origin ausgeliefert wird.
- HTTPS ist erforderlich.
- Die Höhe des iframes kann bei Bedarf angepasst werden.

## Hinweis zur Ziel-URL (SSL)

Langfristig ist vorgesehen, das Embed unter  
`https://embed.wasserzeitung.info/` bereitzustellen.

Dafür ist ein SSL-Zertifikat erforderlich, das Subdomains abdeckt
(z. B. Wildcard- oder Multi-Domain-SSL).  
Das aktuell eingesetzte SSL-Zertifikat sichert ausschließlich die Hauptdomain
und kann nicht für Subdomains verwendet werden.

Sobald ein entsprechendes SSL-Zertifikat vorhanden ist,
kann die Einbindung ohne technische Änderungen am Embed
auf die Domain `embed.wasserzeitung.info` umgestellt werden.