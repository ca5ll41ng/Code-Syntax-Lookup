---
id: "java-en-function-catchbuilder-catchingall"
language: "java"
lang: "en"
category: "function"
name: "CatchBuilder.catchingAll"
signature: "void catchingAll(Consumer<BlockCodeBuilder> catchAllHandler)"
title: "CatchBuilder.catchingAll"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatchBuilder.catchingAll

```java
void catchingAll(Consumer<BlockCodeBuilder> catchAllHandler)
```

Adds a "catch" block that catches all exceptions.
 

 The `breakLabel` for the catch block corresponds
 to the break label of the `tryHandler` block in `trying`.
 

 The caught exception will be on top of the operand stack when the
 catch block is entered.

 Since this block intercepts all exceptions, all subsequent catch
 blocks will never be executed.

**参数**

- **catchAllHandler** — handler that receives a `BlockCodeBuilder` to generate the body of the catch block

**参见**

- #catching
- #catchingMulti
