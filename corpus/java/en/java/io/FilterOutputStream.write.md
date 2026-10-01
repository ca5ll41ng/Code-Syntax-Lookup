---
id: "java-en-function-filteroutputstream-write"
language: "java"
lang: "en"
category: "function"
name: "FilterOutputStream.write"
signature: "public void write(int b) throws IOException"
title: "FilterOutputStream.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilterOutputStream.write

```java
public void write(int b) throws IOException
```

Writes the specified `byte` to this output stream.
 

 The `write` method of `FilterOutputStream`
 calls the `write` method of its underlying output stream,
 that is, it performs `out.write(b)`.
 

 Implements the abstract `write` method of `OutputStream`.

**参数**

- **b** — {@inheritDoc}

**异常**

- **IOException** — if an I/O error occurs.
