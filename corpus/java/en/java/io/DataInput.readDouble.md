---
id: "java-en-function-datainput-readdouble"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readDouble"
signature: "double readDouble() throws IOException"
title: "DataInput.readDouble"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readDouble

```java
double readDouble() throws IOException
```

Reads eight input bytes and returns
 a `double` value. It does this
 by first constructing a `long`
 value in exactly the manner
 of the `readLong`
 method, then converting this `long`
 value to a `double` in exactly
 the manner of the method `Double.longBitsToDouble`.
 This method is suitable for reading
 bytes written by the `writeDouble`
 method of interface `DataOutput`.

**返回**

- the `double` value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
