---
id: "python-en-function-pyexpat-xmlparser-skippedentityhandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.SkippedEntityHandler"
signature: "xmlparser.SkippedEntityHandler(entityName, is_parameter_entity)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.SkippedEntityHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.SkippedEntityHandler

Called for entity references which are not expanded,
because the parser did not read the declaration of the entity.
This happens when the external DTD subset or an external parameter entity
is not parsed.
*is_parameter_entity* is true for a parameter entity
and false for a general entity.
