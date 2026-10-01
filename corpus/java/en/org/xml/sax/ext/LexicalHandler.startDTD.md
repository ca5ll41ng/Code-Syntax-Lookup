---
id: "java-en-function-lexicalhandler-startdtd"
language: "java"
lang: "en"
category: "function"
name: "LexicalHandler.startDTD"
signature: "public abstract void startDTD (String name, String publicId, String systemId) throws SAXException"
title: "LexicalHandler.startDTD"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/LexicalHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LexicalHandler.startDTD

```java
public abstract void startDTD (String name, String publicId, String systemId) throws SAXException
```

Report the start of DTD declarations, if any.

 

This method is intended to report the beginning of the
 DOCTYPE declaration; if the document has no DOCTYPE declaration,
 this method will not be invoked.

 

All declarations reported through
 `org.xml.sax.DTDHandler DTDHandler` or
 `org.xml.sax.ext.DeclHandler DeclHandler` events must appear
 between the startDTD and `endDTD endDTD` events.
 Declarations are assumed to belong to the internal DTD subset
 unless they appear between `startEntity startEntity`
 and `endEntity endEntity` events.  Comments and
 processing instructions from the DTD should also be reported
 between the startDTD and endDTD events, in their original
 order of (logical) occurrence; they are not required to
 appear in their correct locations relative to DTDHandler
 or DeclHandler events, however.

 

Note that the start/endDTD events will appear within
 the start/endDocument events from ContentHandler and
 before the first
 `startElement startElement`
 event.

**参数**

- **name** — The document type name.
- **publicId** — The declared public identifier for the external DTD subset, or null if none was declared.
- **systemId** — The declared system identifier for the external DTD subset, or null if none was declared. (Note that this is not resolved against the document base URI.)

**异常**

- **SAXException** — The application may raise an exception.

**参见**

- #endDTD
- #startEntity
