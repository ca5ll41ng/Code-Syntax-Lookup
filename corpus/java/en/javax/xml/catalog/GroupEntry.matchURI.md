---
id: "java-en-function-groupentry-matchuri"
language: "java"
lang: "en"
category: "function"
name: "GroupEntry.matchURI"
signature: "public String matchURI(String uri)"
title: "GroupEntry.matchURI"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/GroupEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GroupEntry.matchURI

```java
public String matchURI(String uri)
```

Attempt to find a matching entry in the catalog by the uri element.

 

 The method searches through the uri-type entries, including uri,
 rewriteURI, uriSuffix, delegateURI and group entries in the current
 catalog in order to find a match.

**参数**

- **uri** — The URI reference of a resource.

**返回**

- a URI string if a mapping is found, or null otherwise.
