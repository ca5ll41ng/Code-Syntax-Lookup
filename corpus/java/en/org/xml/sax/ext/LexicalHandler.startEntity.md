---
id: "java-en-function-lexicalhandler-startentity"
language: "java"
lang: "en"
category: "function"
name: "LexicalHandler.startEntity"
signature: "public abstract void startEntity (String name) throws SAXException"
title: "LexicalHandler.startEntity"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/LexicalHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LexicalHandler.startEntity

```java
public abstract void startEntity (String name) throws SAXException
```

Report the beginning of some internal and external XML entities.

 

The reporting of parameter entities (including
 the external DTD subset) is optional, and SAX2 drivers that
 report LexicalHandler events may not implement it; you can use the
 http://xml.org/sax/features/lexical-handler/parameter-entities
 feature to query or control the reporting of parameter entities.

 

General entities are reported with their regular names,
 parameter entities have '%' prepended to their names, and
 the external DTD subset has the pseudo-entity name "[dtd]".

 

When a SAX2 driver is providing these events, all other
 events must be properly nested within start/end entity
 events.  There is no additional requirement that events from
 `org.xml.sax.ext.DeclHandler DeclHandler` or
 `org.xml.sax.DTDHandler DTDHandler` be properly ordered.

 

Note that skipped entities will be reported through the
 `skippedEntity skippedEntity`
 event, which is part of the ContentHandler interface.

 

Because of the streaming event model that SAX uses, some
 entity boundaries cannot be reported under any
 circumstances:

 
 
- general entities within attribute values
 
- parameter entities within declarations
 

 

These will be silently expanded, with no indication of where
 the original entity boundaries were.

 

Note also that the boundaries of character references (which
 are not really entities anyway) are not reported.

 

All start/endEntity events must be properly nested.

**参数**

- **name** — The name of the entity.  If it is a parameter entity, the name will begin with '%', and if it is the external DTD subset, it will be "[dtd]".

**异常**

- **SAXException** — The application may raise an exception.

**参见**

- #endEntity
- org.xml.sax.ext.DeclHandler#internalEntityDecl
- org.xml.sax.ext.DeclHandler#externalEntityDecl
