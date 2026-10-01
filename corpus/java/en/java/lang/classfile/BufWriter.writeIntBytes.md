---
id: "java-en-function-bufwriter-writeintbytes"
language: "java"
lang: "en"
category: "function"
name: "BufWriter.writeIntBytes"
signature: "void writeIntBytes(int intSize, long intValue)"
title: "BufWriter.writeIntBytes"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BufWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufWriter.writeIntBytes

```java
void writeIntBytes(int intSize, long intValue)
```

Writes a multibyte value to the buffer.  `intValue` is truncated
 to the given `intSize` number of bytes and written.

**参数**

- **intSize** — the size of the integer value being written, in bytes
- **intValue** — the value to be truncated
