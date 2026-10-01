---
id: "java-en-function-streamtokenizer-pushback"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.pushBack"
signature: "public void pushBack()"
title: "StreamTokenizer.pushBack"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.pushBack

```java
public void pushBack()
```

Causes the next call to the `nextToken` method of this
 tokenizer to return the current value in the `ttype`
 field, and not to modify the value in the `nval` or
 `sval` field.

**参见**

- java.io.StreamTokenizer#nextToken()
- java.io.StreamTokenizer#nval
- java.io.StreamTokenizer#sval
- java.io.StreamTokenizer#ttype
