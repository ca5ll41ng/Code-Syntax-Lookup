---
id: "java-en-function-pattern-comments"
language: "java"
lang: "en"
category: "function"
name: "Pattern.COMMENTS"
signature: "public static final int COMMENTS = 0x04"
title: "Pattern.COMMENTS"
directive: "field"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.COMMENTS

```java
public static final int COMMENTS = 0x04
```

Permits whitespace and comments in pattern.

 

 In this mode, whitespace is ignored, and embedded comments starting
 with `#` are ignored until the end of a line. Comments mode ignores
 whitespace within a character class contained in a pattern string. Such
 whitespace must be escaped in order to be considered significant.  

 

 Comments mode can also be enabled via the embedded flag
 expression&nbsp;`(?x)`.
