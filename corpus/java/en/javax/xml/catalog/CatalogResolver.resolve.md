---
id: "java-en-function-catalogresolver-resolve"
language: "java"
lang: "en"
category: "function"
name: "CatalogResolver.resolve"
signature: "public Source resolve(String href, String base)"
title: "CatalogResolver.resolve"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/CatalogResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatalogResolver.resolve

```java
public Source resolve(String href, String base)
```

Implements URIResolver. The method searches through the catalog entries
 in the main and alternative catalogs to attempt to find a match
 with the specified `href` attribute. The `href` attribute will
 be used literally, with no attempt to be made absolute to the `base`.
 

 If the value is a URN, the `href` attribute is recognized as a
 `publicId`, and used to search `public` entries.
 If the value is a URI, it is taken as a `systemId`, and used to
 search both `system` and `uri` entries.

**参数**

- **href** — the href attribute that specifies the URI of a style sheet, which may be relative or absolute
- **base** — The base URI against which the href attribute will be made absolute if the absolute URI is required

**返回**

- a `javax.xml.transform.Source` object if a mapping is found. If no mapping is found, returns an empty `javax.xml.transform.Source` object if the `javax.xml.catalog.resolve` property is set to `ignore`; returns a `javax.xml.transform.Source` object with the original URI (href, or href resolved with base if base is not null) if the `javax.xml.catalog.resolve` property is set to `continue`.

**异常**

- **CatalogException** — if no mapping is found and `javax.xml.catalog.resolve` is specified as `strict`
