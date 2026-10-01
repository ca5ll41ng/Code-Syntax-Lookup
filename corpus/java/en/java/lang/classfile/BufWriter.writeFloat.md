---
id: "java-en-function-bufwriter-writefloat"
language: "java"
lang: "en"
category: "function"
name: "BufWriter.writeFloat"
signature: "void writeFloat(float x)"
title: "BufWriter.writeFloat"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BufWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufWriter.writeFloat

```java
void writeFloat(float x)
```

Writes a float value, of 4 bytes, to the buffer.
 

 In the conversions, all NaN values of the `float` may or may not be
 collapsed into a single `NaN "canonical" NaN value`.

**参数**

- **x** — the float value
