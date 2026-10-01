---
id: "java-en-function-bufwriter-writedouble"
language: "java"
lang: "en"
category: "function"
name: "BufWriter.writeDouble"
signature: "void writeDouble(double x)"
title: "BufWriter.writeDouble"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BufWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufWriter.writeDouble

```java
void writeDouble(double x)
```

Writes a double value, of 8 bytes, to the buffer.
 

 In the conversions, all NaN values of the `double` may or may not
 be collapsed into a single `NaN "canonical" NaN value`.

**参数**

- **x** — the double value
