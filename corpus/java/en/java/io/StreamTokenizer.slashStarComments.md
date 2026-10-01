---
id: "java-en-function-streamtokenizer-slashstarcomments"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.slashStarComments"
signature: "public void slashStarComments(boolean flag)"
title: "StreamTokenizer.slashStarComments"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.slashStarComments

```java
public void slashStarComments(boolean flag)
```

Determines whether or not the tokenizer recognizes C-style comments.
 If the flag argument is `true`, this stream tokenizer
 recognizes C-style comments. All text between successive
 occurrences of `/*` and *&#47; are discarded.
 

 If the flag argument is `false`, then C-style comments
 are not treated specially.

**参数**

- **flag** — `true` indicates to recognize and ignore C-style comments.
