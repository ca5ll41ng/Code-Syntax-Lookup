---
id: "java-en-function-catchbuilder-catching"
language: "java"
lang: "en"
category: "function"
name: "CatchBuilder.catching"
signature: "CatchBuilder catching(ClassDesc exceptionType, Consumer<BlockCodeBuilder> catchHandler)"
title: "CatchBuilder.catching"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatchBuilder.catching

```java
CatchBuilder catching(ClassDesc exceptionType, Consumer<BlockCodeBuilder> catchHandler)
```

Adds a catch block that catches an exception of the given type.
 

 The caught exception will be on top of the operand stack when the
 catch block is entered.
 

 The `breakLabel` for the catch block corresponds
 to the break label of the `tryHandler` block in `trying`.
 

 If the type of exception is `null` then the catch block catches
 all exceptions.

 If the type of exception to catch is already handled by previous
 catch blocks, this block will never be executed.

**参数**

- **exceptionType** — the type of exception to catch, may be `null`
- **catchHandler** — handler that receives a `BlockCodeBuilder` to generate the body of the catch block

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `exceptionType` represents a primitive type

**参见**

- #catchingMulti
- #catchingAll
