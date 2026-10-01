---
id: "java-en-function-newprimitivearrayinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "NewPrimitiveArrayInstruction.of"
signature: "static NewPrimitiveArrayInstruction of(TypeKind typeKind)"
title: "NewPrimitiveArrayInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/NewPrimitiveArrayInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NewPrimitiveArrayInstruction.of

```java
static NewPrimitiveArrayInstruction of(TypeKind typeKind)
```

{@return a new primitive array instruction}

**参数**

- **typeKind** — the component type of the array

**异常**

- **IllegalArgumentException** — when `typeKind` is not primitive or is `void`

**参见**

- TypeKind#fromNewarrayCode(int) TypeKind::fromNewarrayCode
