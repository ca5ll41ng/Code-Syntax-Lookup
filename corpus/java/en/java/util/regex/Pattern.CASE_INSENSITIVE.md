---
id: "java-en-function-pattern-case_insensitive"
language: "java"
lang: "en"
category: "function"
name: "Pattern.CASE_INSENSITIVE"
signature: "public static final int CASE_INSENSITIVE = 0x02"
title: "Pattern.CASE_INSENSITIVE"
directive: "field"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.CASE_INSENSITIVE

```java
public static final int CASE_INSENSITIVE = 0x02
```

Enables case-insensitive matching.

 

 By default, case-insensitive matching assumes that only characters
 in the US-ASCII charset are being matched.  Unicode-aware
 case-insensitive matching can be enabled by specifying the `UNICODE_CASE` flag in conjunction with this flag.

 

 Case-insensitive matching can also be enabled via the embedded flag
 expression&nbsp;`(?i)`.

 

 Specifying this flag may impose a slight performance penalty.
