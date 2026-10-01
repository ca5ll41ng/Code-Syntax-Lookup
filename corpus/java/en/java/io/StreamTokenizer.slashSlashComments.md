---
id: "java-en-function-streamtokenizer-slashslashcomments"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.slashSlashComments"
signature: "public void slashSlashComments(boolean flag)"
title: "StreamTokenizer.slashSlashComments"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.slashSlashComments

```java
public void slashSlashComments(boolean flag)
```

Determines whether or not the tokenizer recognizes C++-style comments.
 If the flag argument is `true`, this stream tokenizer
 recognizes C++-style comments. Any occurrence of two consecutive
 slash characters (`'/'`) is treated as the beginning of
 a comment that extends to the end of the line.
 

 If the flag argument is `false`, then C++-style
 comments are not treated specially.

**参数**

- **flag** — `true` indicates to recognize and ignore C++-style comments.
