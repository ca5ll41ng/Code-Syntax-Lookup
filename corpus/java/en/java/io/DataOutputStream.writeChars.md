---
id: "java-en-function-dataoutputstream-writechars"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeChars"
signature: "public final void writeChars(String s) throws IOException"
title: "DataOutputStream.writeChars"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeChars

```java
public final void writeChars(String s) throws IOException
```

Writes a string to the underlying output stream as a sequence of
 characters. Each character is written to the data output stream as
 if by the `writeChar` method. If no exception is
 thrown, the counter `written` is incremented by twice
 the length of `s`.

**参数**

- **s** — a `String` value to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.DataOutputStream#writeChar(int)
- java.io.FilterOutputStream#out
