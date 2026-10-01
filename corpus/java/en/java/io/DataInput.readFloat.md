---
id: "java-en-function-datainput-readfloat"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readFloat"
signature: "float readFloat() throws IOException"
title: "DataInput.readFloat"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readFloat

```java
float readFloat() throws IOException
```

Reads four input bytes and returns
 a `float` value. It does this
 by first constructing an `int`
 value in exactly the manner
 of the `readInt`
 method, then converting this `int`
 value to a `float` in
 exactly the manner of the method `Float.intBitsToFloat`.
 This method is suitable for reading
 bytes written by the `writeFloat`
 method of interface `DataOutput`.

**返回**

- the `float` value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
