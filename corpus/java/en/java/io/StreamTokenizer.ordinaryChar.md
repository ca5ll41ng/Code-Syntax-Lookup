---
id: "java-en-function-streamtokenizer-ordinarychar"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.ordinaryChar"
signature: "public void ordinaryChar(int ch)"
title: "StreamTokenizer.ordinaryChar"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.ordinaryChar

```java
public void ordinaryChar(int ch)
```

Specifies that the character argument is "ordinary"
 in this tokenizer. It removes any special significance the
 character has as a comment character, word component, string
 delimiter, white space, or number character. When such a character
 is encountered by the parser, the parser treats it as a
 single-character token and sets `ttype` field to the
 character value.

 

Making a line terminator character "ordinary" may interfere
 with the ability of a `StreamTokenizer` to count
 lines. The `lineno` method may no longer reflect
 the presence of such terminator characters in its line count.

**参数**

- **ch** — the character.

**参见**

- java.io.StreamTokenizer#ttype
