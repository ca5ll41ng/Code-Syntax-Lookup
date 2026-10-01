---
id: "java-en-function-putfield-write"
language: "java"
lang: "en"
category: "function"
name: "PutField.write"
signature: "public abstract void write(ObjectOutput out) throws IOException"
title: "PutField.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PutField.write

```java
public abstract void write(ObjectOutput out) throws IOException
```

Write the data and fields to the specified ObjectOutput stream,
 which must be the same stream that produced this
 `PutField` object.

**参数**

- **out** — the stream to write the data and fields to

**异常**

- **IOException** — if I/O errors occur while writing to the underlying stream
- **IllegalArgumentException** — if the specified stream is not the same stream that produced this `PutField` object

> **⚠ Deprecated** — This method does not write the values contained by this `PutField` object in a proper format, and may result in corruption of the serialization stream.  The correct way to write `PutField` data is by calling the `writeFields` method.
