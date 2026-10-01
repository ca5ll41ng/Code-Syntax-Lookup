---
id: "java-en-function-rewritesystem-match"
language: "java"
lang: "en"
category: "function"
name: "RewriteSystem.match"
signature: "public String match(String systemId, int currentMatch)"
title: "RewriteSystem.match"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/RewriteSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RewriteSystem.match

```java
public String match(String systemId, int currentMatch)
```

Try to match the specified systemId with the entry. Return the match if it
 is successful and the length of the systemIdStartString is longer than the
 longest of any previous match.

**参数**

- **systemId** — The systemId to be matched.
- **currentMatch** — The length of systemIdStartString of previous match if any.

**返回**

- The replacement URI if the match is successful, null if not.
