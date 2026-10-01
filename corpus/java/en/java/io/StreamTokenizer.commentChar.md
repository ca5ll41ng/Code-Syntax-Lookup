---
id: "java-en-function-streamtokenizer-commentchar"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.commentChar"
signature: "public void commentChar(int ch)"
title: "StreamTokenizer.commentChar"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.commentChar

```java
public void commentChar(int ch)
```

Specifies that the character argument starts a single-line
 comment. All characters from the comment character to the end of
 the line are ignored by this stream tokenizer.

 

Any other attribute settings for the specified character are cleared.

**参数**

- **ch** — the character.
