---
id: "python-en-function-pyexpat-xmlparser-entitydeclhandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.EntityDeclHandler"
signature: "xmlparser.EntityDeclHandler(entityName, is_parameter_entity, value, base, systemId, publicId, notationName)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.EntityDeclHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.EntityDeclHandler

Called for all entity declarations.  For parameter and internal entities,
*value* will be a string giving the declared contents of the entity; this will
be `None` for external entities.  The *notationName* parameter will be
`None` for parsed entities, and the name of the notation for unparsed
entities. *is_parameter_entity* will be true if the entity is a parameter entity
or false for general entities (most applications only need to be concerned with
general entities).
