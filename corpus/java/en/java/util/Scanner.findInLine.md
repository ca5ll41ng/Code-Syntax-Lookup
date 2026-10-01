---
id: "java-en-function-scanner-findinline"
language: "java"
lang: "en"
category: "function"
name: "Scanner.findInLine"
signature: "public String findInLine(String pattern)"
title: "Scanner.findInLine"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.findInLine

```java
public String findInLine(String pattern)
```

Attempts to find the next occurrence of a pattern constructed from the
 specified string, ignoring delimiters.

 

An invocation of this method of the form `findInLine(pattern)`
 behaves in exactly the same way as the invocation
 `findInLine(Pattern.compile(pattern))`.

**参数**

- **pattern** — a string specifying the pattern to search for

**返回**

- the text that matched the specified pattern

**异常**

- **IllegalStateException** — if this scanner is closed
