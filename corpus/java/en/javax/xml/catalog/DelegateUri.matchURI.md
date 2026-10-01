---
id: "java-en-function-delegateuri-matchuri"
language: "java"
lang: "en"
category: "function"
name: "DelegateUri.matchURI"
signature: "public URI matchURI(String systemId, int currentMatch)"
title: "DelegateUri.matchURI"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/DelegateUri.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelegateUri.matchURI

```java
public URI matchURI(String systemId, int currentMatch)
```

Matches the specified systemId with the entry. Return the match if it
 is successful and the length of the uriStartString is longer than the
 longest of any previous match.

**参数**

- **systemId** — The systemId to be matched.
- **currentMatch** — The length of uriStartString of previous match if any.

**返回**

- The replacement URI if the match is successful, null if not.
