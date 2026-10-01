---
id: "java-en-function-altcatalog-matchuri"
language: "java"
lang: "en"
category: "function"
name: "AltCatalog.matchURI"
signature: "public URI matchURI(String id, int currentMatch)"
title: "AltCatalog.matchURI"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/AltCatalog.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AltCatalog.matchURI

```java
public URI matchURI(String id, int currentMatch)
```

Matches the specified id with the entry. Returns the match if it
 is successful and the length of the start String is longer than the
 longest of any previous match.

**参数**

- **id** — The id to be matched.
- **currentMatch** — The length of start String of previous match if any.

**返回**

- The replacement URI if the match is successful, null if not.
