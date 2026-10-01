---
id: "java-en-function-codebuilder-ifthenelse"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.ifThenElse"
signature: "default CodeBuilder ifThenElse(Consumer<BlockCodeBuilder> thenHandler, Consumer<BlockCodeBuilder> elseHandler)"
title: "CodeBuilder.ifThenElse"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.ifThenElse

```java
default CodeBuilder ifThenElse(Consumer<BlockCodeBuilder> thenHandler, Consumer<BlockCodeBuilder> elseHandler)
```

Adds an "if-then-else" block that is conditional on the `BOOLEAN boolean` value on top of the operand stack.  Control
 flow enters the "then" block if the value represents `true`, and
 enters the "else" block otherwise.
 

 The `breakLabel` for each block corresponds to
 the cursor position immediately after this call in this builder.

**参数**

- **thenHandler** — handler that receives a `BlockCodeBuilder` to generate the body of the `if`
- **elseHandler** — handler that receives a `BlockCodeBuilder` to generate the body of the `else`

**返回**

- this builder

**参见**

- #ifThenElse(Opcode, Consumer, Consumer)
