---
id: "python-en-function-pyexpat-xmlparser-externalentityrefhandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.ExternalEntityRefHandler"
signature: "xmlparser.ExternalEntityRefHandler(context, base, systemId, publicId)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.ExternalEntityRefHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.ExternalEntityRefHandler

> **Warning**
>
> Implementing a handler that accesses local files and/or the network
> may create a vulnerability to
> [external entity attacks](https://en.wikipedia.org/wiki/XML_external_entity_attack)
> if `xmlparser` is used with user-provided XML content.
> Please reflect on your [threat model](https://en.wikipedia.org/wiki/Threat_model)
> before implementing this handler.
>

Called for references to external entities.  *base* is the current base, as set
by a previous call to `SetBase`.  The public and system identifiers,
*systemId* and *publicId*, are strings if given; if the public identifier is not
given, *publicId* will be `None`.  The *context* value is opaque and should
only be used as described below.

For external entities to be parsed, this handler must be implemented. It is
responsible for creating the sub-parser using
`ExternalEntityParserCreate(context)`, initializing it with the appropriate
callbacks, and parsing the entity.  This handler should return an integer; if it
returns `0`, the parser will raise an
`XML_ERROR_EXTERNAL_ENTITY_HANDLING` error, otherwise parsing will
continue.

If this handler is not provided, external entities are reported by the
`DefaultHandler` callback, if provided.
