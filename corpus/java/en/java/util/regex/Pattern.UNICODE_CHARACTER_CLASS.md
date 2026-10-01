---
id: "java-en-function-pattern-unicode_character_class"
language: "java"
lang: "en"
category: "function"
name: "Pattern.UNICODE_CHARACTER_CLASS"
signature: "public static final int UNICODE_CHARACTER_CLASS = 0x100"
title: "Pattern.UNICODE_CHARACTER_CLASS"
directive: "field"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.UNICODE_CHARACTER_CLASS

```java
public static final int UNICODE_CHARACTER_CLASS = 0x100
```

Enables the Unicode version of Predefined character classes and
 POSIX character classes.

 

 When this flag is specified then the (US-ASCII only)
 Predefined character classes and POSIX character classes
 are in conformance with
 Unicode Technical
 Standard #18: Unicode Regular Expressions
 Annex C: Compatibility Properties.
 

 The UNICODE_CHARACTER_CLASS mode can also be enabled via the embedded
 flag expression&nbsp;`(?U)`.
 

 The flag implies UNICODE_CASE, that is, it enables Unicode-aware case
 folding.
 

 Specifying this flag may impose a performance penalty.

> *Since 1.7*
