---
id: "java-en-function-entityresolver2-resolveentity"
language: "java"
lang: "en"
category: "function"
name: "EntityResolver2.resolveEntity"
signature: "public InputSource resolveEntity ( String name, String publicId, String baseURI, String systemId ) throws SAXException, IOException"
title: "EntityResolver2.resolveEntity"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/EntityResolver2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EntityResolver2.resolveEntity

```java
public InputSource resolveEntity ( String name, String publicId, String baseURI, String systemId ) throws SAXException, IOException
```

Allows applications to map references to external entities into input
 sources, or tell the parser it should use conventional URI resolution.
 This method is only called for external entities which have been
 properly declared.
 This method provides more flexibility than the `EntityResolver`
 interface, supporting implementations of more complex catalogue
 schemes such as the one defined by the OASIS XML Catalogs specification.

 

Parsers configured to use this resolver method will call it
 to determine the input source to use for any external entity
 being included because of a reference in the XML text.
 That excludes the document entity, and any external entity returned
 by `getExternalSubset getExternalSubset`.
 When a (non-validating) processor is configured not to include
 a class of entities (parameter or general) through use of feature
 flags, this method is not invoked for such entities.

 

Note that the entity naming scheme used here is the same one
 used in the `LexicalHandler`, or in the `skippedEntity
   ContentHandler.skippedEntity`
 method.

**参数**

- **name** — Identifies the external entity being resolved. Either "[dtd]" for the external subset, or a name starting with "%" to indicate a parameter entity, or else the name of a general entity.  This is never null when invoked by a SAX2 parser.
- **publicId** — The public identifier of the external entity being referenced (normalized as required by the XML specification), or null if none was supplied.
- **baseURI** — The URI with respect to which relative systemIDs are interpreted.  This is always an absolute URI, unless it is null (likely because the XMLReader was given an InputSource without one).  This URI is defined by the XML specification to be the one associated with the "<" starting the relevant declaration.
- **systemId** — The system identifier of the external entity being referenced; either a relative or absolute URI. This is never null when invoked by a SAX2 parser; only declared entities, and any external subset, are resolved by such parsers.

**返回**

- An InputSource object describing the new input source to be used by the parser.  Returning null directs the parser to resolve the system ID against the base URI and open a connection to resulting URI.

**异常**

- **SAXException** — Any SAX exception, possibly wrapping another exception.
- **IOException** — Probably indicating a failure to create a new InputStream or Reader, or an illegal URL.
