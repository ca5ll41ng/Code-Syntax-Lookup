---
id: "java-en-function-dataoutput-writeboolean"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeBoolean"
signature: "void writeBoolean(boolean v) throws IOException"
title: "DataOutput.writeBoolean"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeBoolean

```java
void writeBoolean(boolean v) throws IOException
```

Writes a `boolean` value to this output stream.
 If the argument `v`
 is `true`, the value `(byte)1`
 is written; if `v` is `false`,
 the  value `(byte)0` is written.
 The byte written by this method may
 be read by the `readBoolean`
 method of interface `DataInput`,
 which will then return a `boolean`
 equal to `v`.

**参数**

- **v** — the boolean to be written.

**异常**

- **IOException** — if an I/O error occurs.
