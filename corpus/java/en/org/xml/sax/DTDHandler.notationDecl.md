---
id: "java-en-function-dtdhandler-notationdecl"
language: "java"
lang: "en"
category: "function"
name: "DTDHandler.notationDecl"
signature: "public abstract void notationDecl (String name, String publicId, String systemId) throws SAXException"
title: "DTDHandler.notationDecl"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DTDHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DTDHandler.notationDecl

```java
public abstract void notationDecl (String name, String publicId, String systemId) throws SAXException
```

Receive notification of a notation declaration event.

 

It is up to the application to record the notation for later
 reference, if necessary;
 notations may appear as attribute values and in unparsed entity
 declarations, and are sometime used with processing instruction
 target names.

 

At least one of publicId and systemId must be non-null.
 If a system identifier is present, and it is a URL, the SAX
 parser must resolve it fully before passing it to the
 application through this event.

 

There is no guarantee that the notation declaration will be
 reported before any unparsed entities that use it.

**参数**

- **name** — The notation name.
- **publicId** — The notation's public identifier, or null if none was given.
- **systemId** — The notation's system identifier, or null if none was given.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.

**参见**

- #unparsedEntityDecl
- org.xml.sax.Attributes
