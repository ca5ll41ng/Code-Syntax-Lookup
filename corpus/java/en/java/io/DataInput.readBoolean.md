---
id: "java-en-function-datainput-readboolean"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readBoolean"
signature: "boolean readBoolean() throws IOException"
title: "DataInput.readBoolean"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readBoolean

```java
boolean readBoolean() throws IOException
```

Reads one input byte and returns
 `true` if that byte is nonzero,
 `false` if that byte is zero.
 This method is suitable for reading
 the byte written by the `writeBoolean`
 method of interface `DataOutput`.

**返回**

- the `boolean` value read.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
