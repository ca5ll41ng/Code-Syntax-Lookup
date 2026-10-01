---
id: "java-en-function-declhandler-externalentitydecl"
language: "java"
lang: "en"
category: "function"
name: "DeclHandler.externalEntityDecl"
signature: "public abstract void externalEntityDecl (String name, String publicId, String systemId) throws SAXException"
title: "DeclHandler.externalEntityDecl"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/DeclHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeclHandler.externalEntityDecl

```java
public abstract void externalEntityDecl (String name, String publicId, String systemId) throws SAXException
```

Report a parsed external entity declaration.

 

Only the effective (first) declaration for each entity
 will be reported.

 

If the system identifier is a URL, the parser must resolve it
 fully before passing it to the application.

**参数**

- **name** — The name of the entity.  If it is a parameter entity, the name will begin with '%'.
- **publicId** — The entity's public identifier, or null if none was given.
- **systemId** — The entity's system identifier.

**异常**

- **SAXException** — The application may raise an exception.

**参见**

- #internalEntityDecl
- org.xml.sax.DTDHandler#unparsedEntityDecl
