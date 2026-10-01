---
id: "java-en-function-streamtokenizer-quotechar"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.quoteChar"
signature: "public void quoteChar(int ch)"
title: "StreamTokenizer.quoteChar"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.quoteChar

```java
public void quoteChar(int ch)
```

Specifies that matching pairs of this character delimit string
 constants in this tokenizer.
 

 When the `nextToken` method encounters a string
 constant, the `ttype` field is set to the string
 delimiter and the `sval` field is set to the body of
 the string.
 

 If a string quote character is encountered, then a string is
 recognized, consisting of all characters after (but not including)
 the string quote character, up to (but not including) the next
 occurrence of that same string quote character, or a line
 terminator, or end of file. The usual escape sequences such as
 `"\u005Cn"` and `"\u005Ct"` are recognized and
 converted to single characters as the string is parsed.

 

Any other attribute settings for the specified character are cleared.

**参数**

- **ch** — the character.

**参见**

- java.io.StreamTokenizer#nextToken()
- java.io.StreamTokenizer#sval
- java.io.StreamTokenizer#ttype
