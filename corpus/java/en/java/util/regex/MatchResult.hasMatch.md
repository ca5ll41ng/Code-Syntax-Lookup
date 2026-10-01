---
id: "java-en-function-matchresult-hasmatch"
language: "java"
lang: "en"
category: "function"
name: "MatchResult.hasMatch"
signature: "default boolean hasMatch()"
title: "MatchResult.hasMatch"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/MatchResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchResult.hasMatch

```java
default boolean hasMatch()
```

Returns whether `this` contains a valid match from
 a previous match or find operation.

          `UnsupportedOperationException`

**返回**

- whether `this` contains a valid match

**异常**

- **UnsupportedOperationException** — if the implementation cannot report whether it has a match

> *Since 20*
