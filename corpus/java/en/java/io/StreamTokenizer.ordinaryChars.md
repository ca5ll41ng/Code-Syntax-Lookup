---
id: "java-en-function-streamtokenizer-ordinarychars"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.ordinaryChars"
signature: "public void ordinaryChars(int low, int hi)"
title: "StreamTokenizer.ordinaryChars"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.ordinaryChars

```java
public void ordinaryChars(int low, int hi)
```

Specifies that all characters c in the range
 `low <= c <= high`
 are "ordinary" in this tokenizer. See the
 `ordinaryChar` method for more information on a
 character being ordinary.

**参数**

- **low** — the low end of the range.
- **hi** — the high end of the range.

**参见**

- java.io.StreamTokenizer#ordinaryChar(int)
