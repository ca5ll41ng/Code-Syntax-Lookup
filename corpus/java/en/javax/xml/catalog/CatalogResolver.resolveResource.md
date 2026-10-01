---
id: "java-en-function-catalogresolver-resolveresource"
language: "java"
lang: "en"
category: "function"
name: "CatalogResolver.resolveResource"
signature: "public LSInput resolveResource(String type, String namespaceUri, String publicId, String systemId, String baseUri)"
title: "CatalogResolver.resolveResource"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/CatalogResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatalogResolver.resolveResource

```java
public LSInput resolveResource(String type, String namespaceUri, String publicId, String systemId, String baseUri)
```

Implements `org.w3c.dom.ls.LSResourceResolver`. For the purpose of
 resolving `publicId` and `systemId`, this method is equivalent
 to `resolveEntity(java.lang.String, java.lang.String)`.
 

 The `systemId` will be used literally, with no attempt to be made
 absolute to the `baseUri`. The `baseUri`, `namespaceUri`
 and `type` are not used in the search for a match in a catalog.
 However, a relative `systemId` in a source may have been made absolute
 by the parser with the `baseURI`, thus making it unable to find a
 `system` entry. In such a case, a `systemSuffix` entry is
 recommended over a `system` entry.

**参数**

- **type** — the type of the resource being resolved, not used by the CatalogResolver
- **namespaceUri** — the namespace of the resource being resolved, not used by the CatalogResolver
- **publicId** — the public identifier of the external entity being referenced, or `null` if no public identifier was supplied or if the resource is not an entity.
- **systemId** — the system identifier, a URI reference of the external resource being referenced
- **baseUri** — the absolute base URI, not used by the CatalogResolver

**返回**

- a `org.w3c.dom.ls.LSInput` object if a mapping is found; null if no mapping is found and the `javax.xml.catalog.resolve` property is set to `continue` or `ignore`. Note that for `org.w3c.dom.ls.LSResourceResolver`, it is not possible to ignore a reference, `ignore` is therefore treated the same as `continue`.

**异常**

- **CatalogException** — if no mapping is found and `javax.xml.catalog.resolve` is specified as `strict`
