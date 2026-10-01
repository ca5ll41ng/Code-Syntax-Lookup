---
id: "java-en-function-dataoutput-writefloat"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeFloat"
signature: "void writeFloat(float v) throws IOException"
title: "DataOutput.writeFloat"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeFloat

```java
void writeFloat(float v) throws IOException
```

Writes a `float` value,
 which is comprised of four bytes, to the output stream.
 It does this as if it first converts this
 `float` value to an `int`
 in exactly the manner of the `Float.floatToIntBits`
 method  and then writes the `int`
 value in exactly the manner of the  `writeInt`
 method.  The bytes written by this method
 may be read by the `readFloat`
 method of interface `DataInput`,
 which will then return a `float`
 equal to `v`.

**参数**

- **v** — the `float` value to be written.

**异常**

- **IOException** — if an I/O error occurs.
