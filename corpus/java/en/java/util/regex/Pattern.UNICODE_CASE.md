---
id: "java-en-function-pattern-unicode_case"
language: "java"
lang: "en"
category: "function"
name: "Pattern.UNICODE_CASE"
signature: "public static final int UNICODE_CASE = 0x40"
title: "Pattern.UNICODE_CASE"
directive: "field"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.UNICODE_CASE

```java
public static final int UNICODE_CASE = 0x40
```

Enables Unicode-aware case folding.

 

 When this flag is specified then case-insensitive matching, when
 enabled by the `CASE_INSENSITIVE` flag, is done in a manner
 consistent with the Unicode Standard.  By default, case-insensitive
 matching assumes that only characters in the US-ASCII charset are being
 matched.

 

 Unicode-aware case folding can also be enabled via the embedded flag
 expression&nbsp;`(?u)`.

 

 Specifying this flag may impose a performance penalty.
