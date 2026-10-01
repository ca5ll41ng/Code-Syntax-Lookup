---
id: "java-en-function-matcher-regionend"
language: "java"
lang: "en"
category: "function"
name: "Matcher.regionEnd"
signature: "public int regionEnd()"
title: "Matcher.regionEnd"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.regionEnd

```java
public int regionEnd()
```

Reports the end index (exclusive) of this matcher's region.
 The searches this matcher conducts are limited to finding matches
 within `regionStart() regionStart` (inclusive) and
 `regionEnd() regionEnd` (exclusive).

**返回**

- the ending point of this matcher's region

> *Since 1.5*
