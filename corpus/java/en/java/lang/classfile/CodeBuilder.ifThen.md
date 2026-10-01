---
id: "java-en-function-codebuilder-ifthen"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.ifThen"
signature: "default CodeBuilder ifThen(Consumer<BlockCodeBuilder> thenHandler)"
title: "CodeBuilder.ifThen"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.ifThen

```java
default CodeBuilder ifThen(Consumer<BlockCodeBuilder> thenHandler)
```

Adds an "if-then" block that is conditional on the `BOOLEAN
 boolean` value on top of the operand stack.  Control flow enters the
 "then" block if the value represents `true`.
 

 The `breakLabel` for the "then" block corresponds
 to the cursor position immediately after this call in this builder.

**参数**

- **thenHandler** — handler that receives a `BlockCodeBuilder` to generate the body of the `if`

**返回**

- this builder

**参见**

- #ifThen(Opcode, Consumer)
