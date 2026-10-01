---
id: "java-en-function-codebuilder-instanceof"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.instanceOf"
signature: "default CodeBuilder instanceOf(ClassEntry target)"
title: "CodeBuilder.instanceOf"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.instanceOf

```java
default CodeBuilder instanceOf(ClassEntry target)
```

Generates an instruction to determine if an object is of the given type,
 producing a `BOOLEAN boolean` result on the operand stack.

 The instruction's name is `instanceof`, which coincides with a
 reserved keyword of the Java programming language, thus this method is
 named with camel case instead.

**参数**

- **target** — the target type

**返回**

- this builder

**参见**

- Opcode#INSTANCEOF
- TypeCheckInstruction
