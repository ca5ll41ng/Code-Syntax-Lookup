---
id: "java-en-function-pattern-multiline"
language: "java"
lang: "en"
category: "function"
name: "Pattern.MULTILINE"
signature: "public static final int MULTILINE = 0x08"
title: "Pattern.MULTILINE"
directive: "field"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.MULTILINE

```java
public static final int MULTILINE = 0x08
```

Enables multiline mode.

 

 In multiline mode the expressions `^` and `$` match
 just after or just before, respectively, a line terminator or the end of
 the input sequence.  By default these expressions only match at the
 beginning and the end of the entire input sequence.

 

 Multiline mode can also be enabled via the embedded flag
 expression&nbsp;`(?m)`.
