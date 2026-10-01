---
id: "java-en-function-catalogmanager-catalogresolver"
language: "java"
lang: "en"
category: "function"
name: "CatalogManager.catalogResolver"
signature: "public static CatalogResolver catalogResolver(Catalog catalog)"
title: "CatalogManager.catalogResolver"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/CatalogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatalogManager.catalogResolver

```java
public static CatalogResolver catalogResolver(Catalog catalog)
```

Creates an instance of a `CatalogResolver` using the specified catalog.

 the underlying `catalog`'s RESOLVE property. The `CatalogResolver`
 created by `catalogResolver(Catalog, CatalogResolver.NotFoundAction)
 catalogResover` is based on the
 specified action type when it is unable to resolve a reference.

**参数**

- **catalog** — the catalog instance

**返回**

- an instance of a `CatalogResolver`
