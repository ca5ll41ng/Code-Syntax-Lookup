---
id: "java-en-function-dataoutputstream-writebytes"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeBytes"
signature: "public final void writeBytes(String s) throws IOException"
title: "DataOutputStream.writeBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeBytes

```java
public final void writeBytes(String s) throws IOException
```

Writes out the string to the underlying output stream as a
 sequence of bytes. Each character in the string is written out, in
 sequence, by discarding its high eight bits. If no exception is
 thrown, the counter `written` is incremented by the
 length of `s`.

**参数**

- **s** — a string of bytes to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
