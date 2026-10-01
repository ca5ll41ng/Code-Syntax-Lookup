---
id: "java-en-function-objectoutputstream-objectoutputstream"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.ObjectOutputStream"
signature: "public ObjectOutputStream(OutputStream out) throws IOException"
title: "ObjectOutputStream.ObjectOutputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.ObjectOutputStream

```java
public ObjectOutputStream(OutputStream out) throws IOException
```

Creates an ObjectOutputStream that writes to the specified OutputStream.
 This constructor writes the serialization stream header to the
 underlying stream; callers may wish to flush the stream immediately to
 ensure that constructors for receiving ObjectInputStreams will not block
 when reading the header.

**参数**

- **out** — output stream to write to

**异常**

- **IOException** — if an I/O error occurs while writing stream header
- **NullPointerException** — if `out` is `null`

**参见**

- ObjectOutputStream#ObjectOutputStream()
- ObjectOutputStream#putFields()
- ObjectInputStream#ObjectInputStream(InputStream)

> *Since 1.4*
