---
id: "java-en-function-streamtokenizer-lowercasemode"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.lowerCaseMode"
signature: "public void lowerCaseMode(boolean fl)"
title: "StreamTokenizer.lowerCaseMode"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.lowerCaseMode

```java
public void lowerCaseMode(boolean fl)
```

Determines whether or not word token are automatically lowercased.
 If the flag argument is `true`, then the value in the
 `sval` field is lowercased whenever a word token is
 returned (the `ttype` field has the
 value `TT_WORD`) by the `nextToken` method
 of this tokenizer.
 

 If the flag argument is `false`, then the
 `sval` field is not modified.

**参数**

- **fl** — `true` indicates that all word tokens should be lowercased.

**参见**

- java.io.StreamTokenizer#nextToken()
- java.io.StreamTokenizer#ttype
- java.io.StreamTokenizer#TT_WORD
