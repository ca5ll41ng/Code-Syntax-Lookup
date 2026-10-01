---
id: "java-en-function-codebuilder-trying"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.trying"
signature: "default CodeBuilder trying(Consumer<BlockCodeBuilder> tryHandler, Consumer<CatchBuilder> catchesHandler)"
title: "CodeBuilder.trying"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.trying

```java
default CodeBuilder trying(Consumer<BlockCodeBuilder> tryHandler, Consumer<CatchBuilder> catchesHandler)
```

Adds a "try-catch" block comprising one try block and zero or more catch
 blocks.  Exceptions thrown by instructions in the try block may be caught
 by catch blocks.
 

 The `breakLabel` for the try block and all
 catch blocks in the `catchesHandler` correspond to the cursor
 position immediately after this call in this builder.

**参数**

- **tryHandler** — handler that receives a `BlockCodeBuilder` to generate the body of the try block.
- **catchesHandler** — a handler that receives a `CatchBuilder` to generate bodies of catch blocks

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the try block is empty

**参见**

- CatchBuilder
- ExceptionCatch
- #exceptionCatch
