---
id: "java-en-function-xmlfilterimpl-unparsedentitydecl"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.unparsedEntityDecl"
signature: "public void unparsedEntityDecl (String name, String publicId, String systemId, String notationName) throws SAXException"
title: "XMLFilterImpl.unparsedEntityDecl"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.unparsedEntityDecl

```java
public void unparsedEntityDecl (String name, String publicId, String systemId, String notationName) throws SAXException
```

Filter an unparsed entity declaration event.

**参数**

- **name** — The entity name.
- **publicId** — The entity's public identifier, or null.
- **systemId** — The entity's system identifier, or null.
- **notationName** — The name of the associated notation.

**异常**

- **org.xml.sax.SAXException** — The client may throw an exception during processing.
