---
id: "java-en-function-storeinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "StoreInstruction.of"
signature: "static StoreInstruction of(TypeKind kind, int slot)"
title: "StoreInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/StoreInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StoreInstruction.of

```java
static StoreInstruction of(TypeKind kind, int slot)
```

{@return a local variable store instruction}
 `kind` is `asLoadable() converted` to its
 computational type.
 `slot` must be `#u2 u2`.

**参数**

- **kind** — the type of the value to be stored
- **slot** — the local variable slot to store to

**异常**

- **IllegalArgumentException** — if `kind` is `VOID void` or `slot` is not `#u2 u2`
