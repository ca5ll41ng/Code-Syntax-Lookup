---
id: "java-en-function-dataoutputstream-writeboolean"
language: "java"
lang: "en"
category: "function"
name: "DataOutputStream.writeBoolean"
signature: "public final void writeBoolean(boolean v) throws IOException"
title: "DataOutputStream.writeBoolean"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutputStream.writeBoolean

```java
public final void writeBoolean(boolean v) throws IOException
```

Writes a `boolean` to the underlying output stream as
 a 1-byte value. The value `true` is written out as the
 value `(byte)1`; the value `false` is
 written out as the value `(byte)0`. If no exception is
 thrown, the counter `written` is incremented by
 `1`.

**参数**

- **v** — a `boolean` value to be written.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
