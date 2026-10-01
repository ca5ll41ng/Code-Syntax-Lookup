---
id: "java-en-function-streamtokenizer-eolissignificant"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.eolIsSignificant"
signature: "public void eolIsSignificant(boolean flag)"
title: "StreamTokenizer.eolIsSignificant"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.eolIsSignificant

```java
public void eolIsSignificant(boolean flag)
```

Determines whether or not ends of line are treated as tokens.
 If the flag argument is true, this tokenizer treats end of lines
 as tokens; the `nextToken` method returns
 `TT_EOL` and also sets the `ttype` field to
 this value when an end of line is read.
 

 A line is a sequence of characters ending with either a
 carriage-return character (`'\u005Cr'`) or a newline
 character (`'\u005Cn'`). In addition, a carriage-return
 character followed immediately by a newline character is treated
 as a single end-of-line token.
 

 If the `flag` is false, end-of-line characters are
 treated as white space and serve only to separate tokens.

**参数**

- **flag** — `true` indicates that end-of-line characters are separate tokens; `false` indicates that end-of-line characters are white space.

**参见**

- java.io.StreamTokenizer#nextToken()
- java.io.StreamTokenizer#ttype
- java.io.StreamTokenizer#TT_EOL
