---
id: "java-en-function-datainput-readint"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readInt"
signature: "int readInt() throws IOException"
title: "DataInput.readInt"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readInt

```java
int readInt() throws IOException
```

Reads four input bytes and returns an
 `int` value. Let `a-d`
 be the first through fourth bytes read. The value returned is:
 
```
`(((a & 0xff) << 24) | ((b & 0xff) << 16) |
  ((c & 0xff) <<  8) | (d & 0xff))
 `
```

 This method is suitable
 for reading bytes written by the `writeInt`
 method of interface `DataOutput`.

**返回**

- the `int` value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
