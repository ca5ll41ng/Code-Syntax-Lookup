---
id: "java-en-function-delegatesystem-matchuri"
language: "java"
lang: "en"
category: "function"
name: "DelegateSystem.matchURI"
signature: "public URI matchURI(String systemId, int currentMatch)"
title: "DelegateSystem.matchURI"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/DelegateSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelegateSystem.matchURI

```java
public URI matchURI(String systemId, int currentMatch)
```

Matches the specified publicId with the entry. Return the match if it
 is successful and the length of the systemIdStartString is longer than the
 longest of any previous match.

**参数**

- **systemId** — The systemId to be matched.
- **currentMatch** — The length of systemIdStartString of previous match if any.

**返回**

- The replacement URI if the match is successful, null if not.
