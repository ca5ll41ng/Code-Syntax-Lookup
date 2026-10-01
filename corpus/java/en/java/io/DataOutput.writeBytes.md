---
id: "java-en-function-dataoutput-writebytes"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeBytes"
signature: "void writeBytes(String s) throws IOException"
title: "DataOutput.writeBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeBytes

```java
void writeBytes(String s) throws IOException
```

Writes a string to the output stream.
 For every character in the string
 `s`,  taken in order, one byte
 is written to the output stream.  If
 `s` is `null`, a `NullPointerException`
 is thrown.

  If `s.length`
 is zero, then no bytes are written. Otherwise,
 the character `s[0]` is written
 first, then `s[1]`, and so on;
 the last character written is `s[s.length-1]`.
 For each character, one byte is written,
 the low-order byte, in exactly the manner
 of the `writeByte` method . The
 high-order eight bits of each character
 in the string are ignored.

**参数**

- **s** — the string of bytes to be written.

**异常**

- **IOException** — if an I/O error occurs.
