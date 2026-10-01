---
id: "java-en-function-matchresult-end"
language: "java"
lang: "en"
category: "function"
name: "MatchResult.end"
signature: "int end()"
title: "MatchResult.end"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/MatchResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchResult.end

```java
int end()
```

Returns the offset after the last character matched.

**返回**

- The offset after the last character matched

**异常**

- **IllegalStateException** — If no match has yet been attempted, or if the previous match operation failed
