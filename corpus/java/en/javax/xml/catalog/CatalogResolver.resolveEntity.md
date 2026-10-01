---
id: "java-en-function-catalogresolver-resolveentity"
language: "java"
lang: "en"
category: "function"
name: "CatalogResolver.resolveEntity"
signature: "public InputSource resolveEntity(String publicId, String systemId)"
title: "CatalogResolver.resolveEntity"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/CatalogResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatalogResolver.resolveEntity

```java
public InputSource resolveEntity(String publicId, String systemId)
```

Implements `org.xml.sax.EntityResolver`. The method searches through
 the catalog entries in the main and alternative catalogs to attempt to find
 a match with the specified `publicId` or systemId.

**参数**

- **publicId** — the public identifier of the external entity being referenced, or null if none was supplied
- **systemId** — the system identifier of the external entity being referenced. A system identifier is required on all external entities. XML requires a system identifier on all external entities, so this value is always specified.

**返回**

- a `org.xml.sax.InputSource` object if a mapping is found. If no mapping is found, returns a `org.xml.sax.InputSource` object containing an empty `java.io.Reader` if the `javax.xml.catalog.resolve` property is set to `ignore`; returns null if the `javax.xml.catalog.resolve` property is set to `continue`.

**异常**

- **CatalogException** — if no mapping is found and `javax.xml.catalog.resolve` is specified as `strict`
