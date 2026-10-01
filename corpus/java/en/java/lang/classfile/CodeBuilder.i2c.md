---
id: "java-en-function-codebuilder-i2c"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.i2c"
signature: "default CodeBuilder i2c()"
title: "CodeBuilder.i2c"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.i2c

```java
default CodeBuilder i2c()
```

Generates an instruction to truncate an `INT int` into the
 range of `CHAR char` and zero-extend it.

**返回**

- this builder

**参见**

- Opcode#I2C
- ConvertInstruction
