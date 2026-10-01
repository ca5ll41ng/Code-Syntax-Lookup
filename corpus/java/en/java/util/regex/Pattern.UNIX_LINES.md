---
id: "java-en-function-pattern-unix_lines"
language: "java"
lang: "en"
category: "function"
name: "Pattern.UNIX_LINES"
signature: "public static final int UNIX_LINES = 0x01"
title: "Pattern.UNIX_LINES"
directive: "field"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.UNIX_LINES

```java
public static final int UNIX_LINES = 0x01
```

Enables Unix lines mode.

 

 In this mode, only the `'\n'` line terminator is recognized
 in the behavior of `.`, `^`, and `$`.

 

 Unix lines mode can also be enabled via the embedded flag
 expression&nbsp;`(?d)`.
