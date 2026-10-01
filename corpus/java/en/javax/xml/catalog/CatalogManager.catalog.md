---
id: "java-en-function-catalogmanager-catalog"
language: "java"
lang: "en"
category: "function"
name: "CatalogManager.catalog"
signature: "public static Catalog catalog(CatalogFeatures features, URI... uris)"
title: "CatalogManager.catalog"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/CatalogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatalogManager.catalog

```java
public static Catalog catalog(CatalogFeatures features, URI... uris)
```

Creates a `Catalog` object using the specified feature settings and
 uri(s) to one or more catalog files.
 

 If `uris` is empty, system property `javax.xml.catalog.files`,
 as defined in `CatalogFeatures`, will be read to locate the initial
 list of catalog files.
 

 If multiple catalog files are specified through the `uris` argument or
 `javax.xml.catalog.files` property, the first entry is considered
 the main catalog, while others are treated as alternative catalogs after
 those referenced by the `nextCatalog` elements in the main catalog.
 

 As specified in
 
 XML Catalogs, OASIS Standard V1.1, if a catalog entry is invalid, it
 is ignored. In case all entries are invalid, the resulting Catalog object
 will contain no Catalog elements. Any matching operation using the Catalog
 will return null.

**参数**

- **features** — the catalog features
- **uris** — uri(s) to one or more catalogs.

**返回**

- an instance of a `Catalog`

**异常**

- **IllegalArgumentException** — if either the URIs are not absolute or do not have a URL protocol handler for the URI scheme
- **CatalogException** — If an error occurs while parsing the catalog
