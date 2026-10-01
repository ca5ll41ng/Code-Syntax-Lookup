---
id: "java-en-function-streamtokenizer-parsenumbers"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.parseNumbers"
signature: "public void parseNumbers()"
title: "StreamTokenizer.parseNumbers"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.parseNumbers

```java
public void parseNumbers()
```

Specifies that numbers should be parsed by this tokenizer. The
 syntax table of this tokenizer is modified so that each of the twelve
 characters:
 
```

     0 1 2 3 4 5 6 7 8 9 . -
 
```

 

 has the "numeric" attribute.
 

 When the parser encounters a word token that has the format of a
 double precision floating-point number, it treats the token as a
 number rather than a word, by setting the `ttype`
 field to the value `TT_NUMBER` and putting the numeric
 value of the token into the `nval` field.

**参见**

- java.io.StreamTokenizer#nval
- java.io.StreamTokenizer#TT_NUMBER
- java.io.StreamTokenizer#ttype
