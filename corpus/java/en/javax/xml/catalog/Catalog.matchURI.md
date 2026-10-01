---
id: "java-en-function-catalog-matchuri"
language: "java"
lang: "en"
category: "function"
name: "Catalog.matchURI"
signature: "public String matchURI(String uri)"
title: "Catalog.matchURI"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/Catalog.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Catalog.matchURI

```java
public String matchURI(String uri)
```

Attempts to find a matching entry in the catalog by the uri element.

 

 The method searches through the uri-type entries, including `uri,
 rewriteURI, uriSuffix, delegateURI` and `group` entries in the current
 catalog in order to find a match.

 

 Resolution follows the steps listed below: 

 
 
- If a matching `uri` entry is found, it is returned immediately.
 
- If more than one `rewriteURI` entry matches, the matching entry with
 the longest normalized `uriStartString` value is returned.
 
- If more than one `uriSuffix` entry matches, the matching entry with
 the longest normalized `uriSuffix` value is returned.
 
- If more than one `delegatePublic` entry matches, the matching entry
 with the longest matching `uriStartString` value is returned.

**参数**

- **uri** — the URI reference of the entity to be matched

**返回**

- a URI string if a mapping is found, or null otherwise
