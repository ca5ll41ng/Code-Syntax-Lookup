---
id: "java-en-function-urisuffix-match"
language: "java"
lang: "en"
category: "function"
name: "UriSuffix.match"
signature: "public String match(String systemId, int currentMatch)"
title: "UriSuffix.match"
directive: "method"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/UriSuffix.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UriSuffix.match

```java
public String match(String systemId, int currentMatch)
```

Try to match the specified systemId with the entry. Return the match if it
 is successful and the length of the uriSuffix is longer than the longest
 of any previous match.

**参数**

- **systemId** — The systemId to be matched.
- **currentMatch** — The length of uriSuffix of previous match if any.

**返回**

- The replacement URI if the match is successful, null if not.
