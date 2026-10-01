---
id: "java-en-function-xmlfilterimpl-resolveentity"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.resolveEntity"
signature: "public InputSource resolveEntity (String publicId, String systemId) throws SAXException, IOException"
title: "XMLFilterImpl.resolveEntity"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.resolveEntity

```java
public InputSource resolveEntity (String publicId, String systemId) throws SAXException, IOException
```

Filter an external entity resolution.

**参数**

- **publicId** — The entity's public identifier, or null.
- **systemId** — The entity's system identifier.

**返回**

- A new InputSource or null for the default.

**异常**

- **org.xml.sax.SAXException** — The client may throw an exception during processing.
- **java.io.IOException** — The client may throw an I/O-related exception while obtaining the new InputSource.
