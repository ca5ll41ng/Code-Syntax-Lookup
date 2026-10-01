---
id: "java-en-function-newmultiarrayinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "NewMultiArrayInstruction.of"
signature: "static NewMultiArrayInstruction of(ClassEntry arrayTypeEntry, int dimensions)"
title: "NewMultiArrayInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/NewMultiArrayInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NewMultiArrayInstruction.of

```java
static NewMultiArrayInstruction of(ClassEntry arrayTypeEntry, int dimensions)
```

{@return a new multi-dimensional array instruction}

**参数**

- **arrayTypeEntry** — the type of the array
- **dimensions** — the number of dimensions of the array

**异常**

- **IllegalArgumentException** — if `dimensions` is out of range
