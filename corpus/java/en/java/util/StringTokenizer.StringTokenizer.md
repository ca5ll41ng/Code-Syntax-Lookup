---
id: "java-en-function-stringtokenizer-stringtokenizer"
language: "java"
lang: "en"
category: "function"
name: "StringTokenizer.StringTokenizer"
signature: "public StringTokenizer(String str, String delim, boolean returnDelims)"
title: "StringTokenizer.StringTokenizer"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringTokenizer.StringTokenizer

```java
public StringTokenizer(String str, String delim, boolean returnDelims)
```

Constructs a string tokenizer for the specified string. All
 characters in the `delim` argument are the delimiters
 for separating tokens.
 

 If the `returnDelims` flag is `true`, then
 the delimiter characters are also returned as tokens. Each
 delimiter is returned as a string consisting of a single
 Unicode code point
 of the delimiter (which may be one or two `char`s). If the
 flag is `false`, the delimiter characters are skipped
 and only serve as separators between tokens.
 

 Note that if `delim` is `null`, this constructor does
 not throw an exception. However, trying to invoke other methods on the
 resulting `StringTokenizer` may result in a
 `NullPointerException`.

**参数**

- **str** — a string to be parsed.
- **delim** — the delimiters.
- **returnDelims** — flag indicating whether to return the delimiters as tokens.

**异常**

- **NullPointerException** — if str is `null`
