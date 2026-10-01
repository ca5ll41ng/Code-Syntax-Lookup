---
id: "java-en-function-pattern-dotall"
language: "java"
lang: "en"
category: "function"
name: "Pattern.DOTALL"
signature: "public static final int DOTALL = 0x20"
title: "Pattern.DOTALL"
directive: "field"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.DOTALL

```java
public static final int DOTALL = 0x20
```

Enables dotall mode.

 

 In dotall mode, the expression `.` matches any character,
 including a line terminator.  By default this expression does not match
 line terminators.

 

 Dotall mode can also be enabled via the embedded flag
 expression&nbsp;`(?s)`.  (The `s` is a mnemonic for
 "single-line" mode, which is what this is called in Perl.)
