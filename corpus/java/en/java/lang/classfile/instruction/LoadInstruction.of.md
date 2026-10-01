---
id: "java-en-function-loadinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "LoadInstruction.of"
signature: "static LoadInstruction of(TypeKind kind, int slot)"
title: "LoadInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LoadInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoadInstruction.of

```java
static LoadInstruction of(TypeKind kind, int slot)
```

{@return a local variable load instruction}
 `kind` is `asLoadable() converted` to its
 computational type.
 `slot` must be a `#u2 u2` value.

**参数**

- **kind** — the type of the value to be loaded
- **slot** — the local variable slot to load from

**异常**

- **IllegalArgumentException** — if `kind` is `VOID void` or `slot` is not `#u2 u2`
