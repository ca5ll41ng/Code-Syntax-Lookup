---
id: "java-en-function-catchbuilder-catchingmulti"
language: "java"
lang: "en"
category: "function"
name: "CatchBuilder.catchingMulti"
signature: "CatchBuilder catchingMulti(List<ClassDesc> exceptionTypes, Consumer<BlockCodeBuilder> catchHandler)"
title: "CatchBuilder.catchingMulti"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatchBuilder.catchingMulti

```java
CatchBuilder catchingMulti(List<ClassDesc> exceptionTypes, Consumer<BlockCodeBuilder> catchHandler)
```

Adds a catch block that catches exceptions of the given types.
 

 The caught exception will be on top of the operand stack when the
 catch block is entered.
 

 The `breakLabel` for the catch block corresponds
 to the break label of the `tryHandler` block in `trying`.
 

 If list of exception types is empty then the catch block catches all
 exceptions.

 If every type of exception to catch is already handled by previous
 catch blocks, this block will never be executed.

**参数**

- **exceptionTypes** — the types of exception to catch
- **catchHandler** — handler that receives a `BlockCodeBuilder` to generate the body of the catch block

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if any exception type represents a primitive type

**参见**

- #catching
- #catchingAll
