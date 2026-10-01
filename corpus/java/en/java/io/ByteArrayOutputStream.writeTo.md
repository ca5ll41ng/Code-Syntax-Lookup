---
id: "java-en-function-bytearrayoutputstream-writeto"
language: "java"
lang: "en"
category: "function"
name: "ByteArrayOutputStream.writeTo"
signature: "public synchronized void writeTo(OutputStream out) throws IOException"
title: "ByteArrayOutputStream.writeTo"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayOutputStream.writeTo

```java
public synchronized void writeTo(OutputStream out) throws IOException
```

Writes the complete contents of this `ByteArrayOutputStream` to
 the specified output stream argument, as if by calling the output
 stream's write method using `out.write(buf, 0, count)`.

**参数**

- **out** — the output stream to which to write the data.

**异常**

- **NullPointerException** — if `out` is `null`.
- **IOException** — if an I/O error occurs.
