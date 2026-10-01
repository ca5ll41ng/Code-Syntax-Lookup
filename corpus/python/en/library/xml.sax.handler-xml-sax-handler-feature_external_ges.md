---
id: "python-en-function-xml-sax-handler-feature_external_ges"
language: "python"
lang: "en"
category: "function"
name: "feature_external_ges"
directive: "data"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.feature_external_ges"
license: "PSF"
updated: "2026-10-01"
---

# feature_external_ges

> **Warning**
>
> Enabling opens a vulnerability to
> [external entity attacks](https://en.wikipedia.org/wiki/XML_external_entity_attack)
> if the parser is used with user-provided XML content.
> Please reflect on your [threat model](https://en.wikipedia.org/wiki/Threat_model)
> before enabling this feature.
>

 value: `"http://xml.org/sax/features/external-general-entities"`
 true: Include all external general (text) entities.
 false: Do not include external general entities.
 access: (parsing) read-only; (not parsing) read/write
