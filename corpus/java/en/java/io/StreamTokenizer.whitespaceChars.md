---
id: "java-en-function-streamtokenizer-whitespacechars"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.whitespaceChars"
signature: "public void whitespaceChars(int low, int hi)"
title: "StreamTokenizer.whitespaceChars"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.whitespaceChars

```java
public void whitespaceChars(int low, int hi)
```

Specifies that all characters c in the range
 `low <= c <= high`
 are white space characters. White space characters serve only to
 separate tokens in the input stream.

 

Any other attribute settings for the characters in the specified
 range are cleared.

**参数**

- **low** — the low end of the range.
- **hi** — the high end of the range.
