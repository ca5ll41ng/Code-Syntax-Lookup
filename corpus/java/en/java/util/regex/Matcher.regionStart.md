---
id: "java-en-function-matcher-regionstart"
language: "java"
lang: "en"
category: "function"
name: "Matcher.regionStart"
signature: "public int regionStart()"
title: "Matcher.regionStart"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.regionStart

```java
public int regionStart()
```

Reports the start index of this matcher's region. The
 searches this matcher conducts are limited to finding matches
 within `regionStart() regionStart` (inclusive) and
 `regionEnd() regionEnd` (exclusive).

**返回**

- The starting point of this matcher's region

> *Since 1.5*
