---
id: "java-en-function-catalog-catalogs"
language: "java"
lang: "en"
category: "function"
name: "Catalog.catalogs"
signature: "public Stream<Catalog> catalogs()"
title: "Catalog.catalogs"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/Catalog.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Catalog.catalogs

```java
public Stream<Catalog> catalogs()
```

Returns a sequential Stream of alternative Catalogs specified using the
 `nextCatalog` entries in the current catalog, and as the input of
 catalog files excluding the current catalog (that is, the first in the
 input list) when the Catalog object is created by the `CatalogManager`.
 

 The order of Catalogs in the returned stream is the same as the order
 in which the corresponding `nextCatalog` entries appear in the
 current catalog. The alternative catalogs from the input file list are
 appended to the end of the stream in the order they are entered.

**返回**

- a sequential Stream of Catalogs
