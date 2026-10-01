---
id: "java-en-function-datainput-readlong"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readLong"
signature: "long readLong() throws IOException"
title: "DataInput.readLong"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readLong

```java
long readLong() throws IOException
```

Reads eight input bytes and returns
 a `long` value. Let `a-h`
 be the first through eighth bytes read.
 The value returned is:
 
```
`(((long)(a & 0xff) << 56) |
  ((long)(b & 0xff) << 48) |
  ((long)(c & 0xff) << 40) |
  ((long)(d & 0xff) << 32) |
  ((long)(e & 0xff) << 24) |
  ((long)(f & 0xff) << 16) |
  ((long)(g & 0xff) <<  8) |
  ((long)(h & 0xff)))
 `
```

 

 This method is suitable
 for reading bytes written by the `writeLong`
 method of interface `DataOutput`.

**返回**

- the `long` value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
