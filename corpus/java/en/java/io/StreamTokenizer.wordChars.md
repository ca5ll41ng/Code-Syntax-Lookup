---
id: "java-en-function-streamtokenizer-wordchars"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.wordChars"
signature: "public void wordChars(int low, int hi)"
title: "StreamTokenizer.wordChars"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.wordChars

```java
public void wordChars(int low, int hi)
```

Specifies that all characters c in the range
 `low <= c <= high`
 are word constituents. A word token consists of a word constituent
 followed by zero or more word constituents or number constituents.

**参数**

- **low** — the low end of the range.
- **hi** — the high end of the range.
