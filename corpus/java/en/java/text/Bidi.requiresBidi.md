---
id: "java-en-function-bidi-requiresbidi"
language: "java"
lang: "en"
category: "function"
name: "Bidi.requiresBidi"
signature: "public static boolean requiresBidi(char[] text, int start, int limit)"
title: "Bidi.requiresBidi"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Bidi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Bidi.requiresBidi

```java
public static boolean requiresBidi(char[] text, int start, int limit)
```

Return true if the specified text requires bidi analysis.  If this returns false,
 the text will display left-to-right.  Clients can then avoid constructing a Bidi object.
 Text in the Arabic Presentation Forms area of Unicode is presumed to already be shaped
 and ordered for display, and so will not cause this function to return true.

**参数**

- **text** — the text containing the characters to test
- **start** — the start of the range of characters to test
- **limit** — the limit of the range of characters to test

**返回**

- true if the range of characters requires bidi analysis
