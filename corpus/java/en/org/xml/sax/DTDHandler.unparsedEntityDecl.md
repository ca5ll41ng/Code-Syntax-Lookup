---
id: "java-en-function-dtdhandler-unparsedentitydecl"
language: "java"
lang: "en"
category: "function"
name: "DTDHandler.unparsedEntityDecl"
signature: "public abstract void unparsedEntityDecl (String name, String publicId, String systemId, String notationName) throws SAXException"
title: "DTDHandler.unparsedEntityDecl"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DTDHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DTDHandler.unparsedEntityDecl

```java
public abstract void unparsedEntityDecl (String name, String publicId, String systemId, String notationName) throws SAXException
```

Receive notification of an unparsed entity declaration event.

 

Note that the notation name corresponds to a notation
 reported by the `notationDecl notationDecl` event.
 It is up to the application to record the entity for later
 reference, if necessary;
 unparsed entities may appear as attribute values.
 

 

If the system identifier is a URL, the parser must resolve it
 fully before passing it to the application.

**参数**

- **name** — The unparsed entity's name.
- **publicId** — The entity's public identifier, or null if none was given.
- **systemId** — The entity's system identifier.
- **notationName** — The name of the associated notation.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- #notationDecl
- org.xml.sax.Attributes
