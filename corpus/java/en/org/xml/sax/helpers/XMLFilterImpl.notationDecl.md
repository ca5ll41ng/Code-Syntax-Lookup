---
id: "java-en-function-xmlfilterimpl-notationdecl"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.notationDecl"
signature: "public void notationDecl (String name, String publicId, String systemId) throws SAXException"
title: "XMLFilterImpl.notationDecl"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.notationDecl

```java
public void notationDecl (String name, String publicId, String systemId) throws SAXException
```

Filter a notation declaration event.

**参数**

- **name** — The notation name.
- **publicId** — The notation's public identifier, or null.
- **systemId** — The notation's system identifier, or null.

**异常**

- **org.xml.sax.SAXException** — The client may throw an exception during processing.
