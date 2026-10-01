---
id: "python-en-function-xml-sax-handler-contenthandler-skippedentity"
language: "python"
lang: "en"
category: "function"
name: "ContentHandler.skippedEntity"
signature: "ContentHandler.skippedEntity(name)"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.ContentHandler.skippedEntity"
license: "PSF"
updated: "2026-10-01"
---

# ContentHandler.skippedEntity

Receive notification of a skipped entity.

The Parser will invoke this method once for each entity skipped. Non-validating
processors may skip entities if they have not seen the declarations (because,
for example, the entity was declared in an external DTD subset). All processors
may skip external entities, depending on the values of the
`feature_external_ges` and the `feature_external_pes` properties.
