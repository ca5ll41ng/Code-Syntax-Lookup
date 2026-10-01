---
id: "java-en-function-streamtokenizer-ttype"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.ttype"
signature: "public int ttype = TT_NOTHING"
title: "StreamTokenizer.ttype"
directive: "field"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.ttype

```java
public int ttype = TT_NOTHING
```

After a call to the `nextToken` method, this field
 contains the type of the token just read. For a single character
 token, its value is the single character, converted to an integer.
 For a quoted string token, its value is the quote character.
 Otherwise, its value is one of the following:
 
 
- `TT_WORD` indicates that the token is a word.
 
- `TT_NUMBER` indicates that the token is a number.
 
- `TT_EOL` indicates that the end of line has been read.
     The field can only have this value if the
     `eolIsSignificant` method has been called with the
     argument `true`.
 
- `TT_EOF` indicates that the end of the input stream
     has been reached.
 

 

 The initial value of this field is `TT_NOTHING`.

**参见**

- java.io.StreamTokenizer#eolIsSignificant(boolean)
- java.io.StreamTokenizer#nextToken()
- java.io.StreamTokenizer#quoteChar(int)
- java.io.StreamTokenizer#TT_EOF
- java.io.StreamTokenizer#TT_EOL
- java.io.StreamTokenizer#TT_NUMBER
- java.io.StreamTokenizer#TT_WORD
