---
id: "java-en-function-codebuilder-block"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.block"
signature: "default CodeBuilder block(Consumer<BlockCodeBuilder> handler)"
title: "CodeBuilder.block"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.block

```java
default CodeBuilder block(Consumer<BlockCodeBuilder> handler)
```

Adds a lexical block to the method being built.
 

 Within this block, the `startLabel` and `endLabel`
 correspond to the start and end of the block, and the `breakLabel` also corresponds to the end of the block,
 or the cursor position immediately after this call in this builder.

**参数**

- **handler** — handler that receives a `BlockCodeBuilder` to generate the body of the lexical block

**返回**

- this builder
