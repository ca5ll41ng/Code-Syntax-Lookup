---
id: "java-en-function-dataoutputstream-write"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.write"
signature: "public synchronized void write(int b) throws IOException"
title: "DataOutputStream.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.write

```java
public synchronized void write(int b) throws IOException
```

Writes the specified byte (the low eight bits of the argument
 `b`) to the underlying output stream. If no exception
 is thrown, the counter `written` is incremented by
 `1`.
 

 Implements the `write` method of `OutputStream`.

**参数**

- **b** — the `byte` to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
