---
id: "java-en-function-scanner-findwithinhorizon"
language: "java"
lang: "en"
category: "function"
name: "Scanner.findWithinHorizon"
signature: "public String findWithinHorizon(String pattern, int horizon)"
title: "Scanner.findWithinHorizon"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.findWithinHorizon

```java
public String findWithinHorizon(String pattern, int horizon)
```

Attempts to find the next occurrence of a pattern constructed from the
 specified string, ignoring delimiters.

 

An invocation of this method of the form
 `findWithinHorizon(pattern)` behaves in exactly the same way as
 the invocation
 `findWithinHorizon(Pattern.compile(pattern), horizon)`.

**参数**

- **pattern** — a string specifying the pattern to search for
- **horizon** — the search horizon

**返回**

- the text that matched the specified pattern

**异常**

- **IllegalStateException** — if this scanner is closed
- **IllegalArgumentException** — if horizon is negative
