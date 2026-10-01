---
id: "java-en-function-convertinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "ConvertInstruction.of"
signature: "static ConvertInstruction of(TypeKind fromType, TypeKind toType)"
title: "ConvertInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ConvertInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConvertInstruction.of

```java
static ConvertInstruction of(TypeKind fromType, TypeKind toType)
```

{@return a conversion instruction}  Valid conversions are:
 
 
- Between `int`, `long`, `float`, and `double`,
 where `fromType != toType`;
 
- From `int` to `byte`, `char`, and `short`.

**参数**

- **fromType** — the type to convert from
- **toType** — the type to convert to

**异常**

- **IllegalArgumentException** — if this is not a valid conversion
