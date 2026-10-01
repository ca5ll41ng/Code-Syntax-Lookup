---
id: "java-en-function-matcher-start"
language: "java"
lang: "en"
category: "function"
name: "Matcher.start"
signature: "public int start()"
title: "Matcher.start"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.start

```java
public int start()
```

Returns the start index of the previous match.

**返回**

- The index of the first character matched

**异常**

- **IllegalStateException** — If no match has yet been attempted, or if the previous match operation failed
