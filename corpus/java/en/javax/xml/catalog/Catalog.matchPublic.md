---
id: "java-en-function-catalog-matchpublic"
language: "java"
lang: "en"
category: "function"
name: "Catalog.matchPublic"
signature: "public String matchPublic(String publicId)"
title: "Catalog.matchPublic"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/Catalog.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Catalog.matchPublic

```java
public String matchPublic(String publicId)
```

Attempts to find a matching entry in the catalog by publicId. The method
 searches through the public-type entries, including `public,
 delegatePublic`, and `group` entries in the current catalog in order to find
 a match.
 

 Refer to the description about 
 Feature PREFER in the table Catalog Features in class
 `CatalogFeatures`. Public entries are only considered if the
 `prefer` is `public` and `system` entries are not found.
 

 Resolution follows the steps listed below: 

 
 
- If a matching `public` entry is found, it is returned immediately.
 
- If more than one `delegatePublic` entry matches, the matching entry
 with the longest matching `publicIdStartString` value is returned.

**参数**

- **publicId** — the public identifier of the entity to be matched

**返回**

- a URI string if a mapping is found, or null otherwise

**参见**

- CatalogFeatures.Feature
