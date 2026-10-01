---
id: "java-en-function-dataoutput-writechars"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeChars"
signature: "void writeChars(String s) throws IOException"
title: "DataOutput.writeChars"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeChars

```java
void writeChars(String s) throws IOException
```

Writes every character in the string `s`,
 to the output stream, in order,
 two bytes per character. If `s`
 is `null`, a `NullPointerException`
 is thrown.  If `s.length`
 is zero, then no characters are written.
 Otherwise, the character `s[0]`
 is written first, then `s[1]`,
 and so on; the last character written is
 `s[s.length-1]`. For each character,
 two bytes are actually written, high-order
 byte first, in exactly the manner of the
 `writeChar` method.

**参数**

- **s** — the string value to be written.

**异常**

- **IOException** — if an I/O error occurs.
