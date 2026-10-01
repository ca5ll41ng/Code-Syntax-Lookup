---
id: "java-en-function-localvariabletype-of"
language: "java"
lang: "en"
category: "function"
name: "LocalVariableType.of"
signature: "static LocalVariableType of(int slot, Utf8Entry nameEntry, Utf8Entry signatureEntry, Label startScope, Label endScope)"
title: "LocalVariableType.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LocalVariableType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVariableType.of

```java
static LocalVariableType of(int slot, Utf8Entry nameEntry, Utf8Entry signatureEntry, Label startScope, Label endScope)
```

{@return a local variable type pseudo-instruction}
 `slot` must be `#u2 u2`.

**参数**

- **slot** — the local variable slot
- **nameEntry** — the local variable name
- **signatureEntry** — the local variable signature
- **startScope** — the start range of the local variable scope
- **endScope** — the end range of the local variable scope

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`
