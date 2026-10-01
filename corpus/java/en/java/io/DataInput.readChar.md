---
id: "java-en-function-datainput-readchar"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readChar"
signature: "char readChar() throws IOException"
title: "DataInput.readChar"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readChar

```java
char readChar() throws IOException
```

Reads two input bytes and returns a `char` value.
 Let `a`
 be the first byte read and `b`
 be the second byte. The value
 returned is:
 
```
`(char)((a << 8) | (b & 0xff))
 `
```

 This method
 is suitable for reading bytes written by
 the `writeChar` method of interface
 `DataOutput`.

**返回**

- the `char` value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
