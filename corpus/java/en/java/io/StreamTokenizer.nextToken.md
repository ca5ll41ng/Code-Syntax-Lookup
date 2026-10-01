---
id: "java-en-function-streamtokenizer-nexttoken"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.nextToken"
signature: "public int nextToken() throws IOException"
title: "StreamTokenizer.nextToken"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.nextToken

```java
public int nextToken() throws IOException
```

Parses the next token from the input stream of this tokenizer.
 The type of the next token is returned in the `ttype`
 field. Additional information about the token may be in the
 `nval` field or the `sval` field of this
 tokenizer.
 

 Typical clients of this
 class first set up the syntax tables and then sit in a loop
 calling nextToken to parse successive tokens until TT_EOF
 is returned.

**返回**

- the value of the `ttype` field.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.StreamTokenizer#nval
- java.io.StreamTokenizer#sval
- java.io.StreamTokenizer#ttype
