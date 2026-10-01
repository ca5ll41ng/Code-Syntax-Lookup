---
id: "java-en-function-handlerbase-unparsedentitydecl"
language: "java"
lang: "en"
category: "function"
name: "HandlerBase.unparsedEntityDecl"
signature: "public void unparsedEntityDecl (String name, String publicId, String systemId, String notationName)"
title: "HandlerBase.unparsedEntityDecl"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/HandlerBase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandlerBase.unparsedEntityDecl

```java
public void unparsedEntityDecl (String name, String publicId, String systemId, String notationName)
```

Receive notification of an unparsed entity declaration.

 

By default, do nothing.  Application writers may override this
 method in a subclass to keep track of the unparsed entities
 declared in a document.

**参数**

- **name** — The entity name.
- **publicId** — The entity public identifier, or null if not available.
- **systemId** — The entity system identifier.
- **notationName** — The name of the associated notation.

**参见**

- org.xml.sax.DTDHandler#unparsedEntityDecl
