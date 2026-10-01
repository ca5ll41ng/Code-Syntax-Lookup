---
id: "java-en-function-codebuilder-i2s"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.i2s"
signature: "default CodeBuilder i2s()"
title: "CodeBuilder.i2s"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.i2s

```java
default CodeBuilder i2s()
```

Generates an instruction to truncate an `INT int` into the
 range of `SHORT short` and sign-extend it.

**返回**

- this builder

**参见**

- Opcode#I2S
- ConvertInstruction
