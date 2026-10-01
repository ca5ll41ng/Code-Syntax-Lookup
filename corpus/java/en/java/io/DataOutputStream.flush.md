---
id: "java-en-function-dataoutputstream-flush"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.flush"
signature: "public void flush() throws IOException"
title: "DataOutputStream.flush"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.flush

```java
public void flush() throws IOException
```

Flushes this data output stream. This forces any buffered output
 bytes to be written out to the stream.
 

 The `flush` method of `DataOutputStream`
 calls the `flush` method of its underlying output stream.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
- java.io.OutputStream#flush()
