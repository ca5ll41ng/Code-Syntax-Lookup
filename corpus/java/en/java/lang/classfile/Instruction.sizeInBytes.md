---
id: "java-en-function-instruction-sizeinbytes"
language: "java"
lang: "en"
category: "function"
name: "Instruction.sizeInBytes"
signature: "int sizeInBytes()"
title: "Instruction.sizeInBytes"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Instruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instruction.sizeInBytes

```java
int sizeInBytes()
```

{@return the size in bytes of this instruction}
 This value is equal to `sizeIfFixed()
 opcode` if it is not `-1`.
