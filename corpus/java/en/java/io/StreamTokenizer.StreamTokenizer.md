---
id: "java-en-function-streamtokenizer-streamtokenizer"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.StreamTokenizer"
signature: "public StreamTokenizer(InputStream is)"
title: "StreamTokenizer.StreamTokenizer"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.StreamTokenizer

```java
public StreamTokenizer(InputStream is)
```

Creates a stream tokenizer that parses the specified input
 stream. The stream tokenizer is initialized to the following
 default state:
 
 
- All byte values `'A'` through `'Z'`,
     `'a'` through `'z'`, and
     `'\u005Cu00A0'` through `'\u005Cu00FF'` are
     considered to be alphabetic.
 
- All byte values `'\u005Cu0000'` through
     `'\u005Cu0020'` are considered to be white space.
 
- `'/'` is a comment character.
 
- Single quote `'\u005C''` and double quote `'"'`
     are string quote characters.
 
- Numbers are parsed.
 
- Ends of lines are treated as white space, not as separate tokens.
 
- C-style and C++-style comments are not recognized.

**参数**

- **is** — an input stream.

**参见**

- java.io.BufferedReader
- java.io.InputStreamReader
- java.io.StreamTokenizer#StreamTokenizer(java.io.Reader)

> **⚠ Deprecated** — As of JDK version 1.1, the preferred way to tokenize an input stream is to convert it into a character stream, for example: {@snippet lang=java : Reader r = new BufferedReader(new InputStreamReader(is)); StreamTokenizer st = new StreamTokenizer(r); }
