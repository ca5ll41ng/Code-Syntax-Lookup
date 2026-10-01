---
id: "java-en-function-codebuilder-new_"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.new_"
signature: "default CodeBuilder new_(ClassEntry clazz)"
title: "CodeBuilder.new_"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.new_

```java
default CodeBuilder new_(ClassEntry clazz)
```

Generates an instruction to create a new object.

 The instruction's name is `new`, which coincides with a reserved
 keyword of the Java programming language, thus this method is named with
 an extra `_` suffix instead.

**参数**

- **clazz** — the new class type

**返回**

- this builder

**参见**

- Opcode#NEW
- NewObjectInstruction
