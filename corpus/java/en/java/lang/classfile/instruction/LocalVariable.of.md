---
id: "java-en-function-localvariable-of"
language: "java"
lang: "en"
category: "function"
name: "LocalVariable.of"
signature: "static LocalVariable of(int slot, Utf8Entry nameEntry, Utf8Entry descriptorEntry, Label startScope, Label endScope)"
title: "LocalVariable.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LocalVariable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVariable.of

```java
static LocalVariable of(int slot, Utf8Entry nameEntry, Utf8Entry descriptorEntry, Label startScope, Label endScope)
```

{@return a local variable pseudo-instruction}
 `slot` must be `#u2 u2`.

**参数**

- **slot** — the local variable slot
- **nameEntry** — the local variable name
- **descriptorEntry** — the local variable descriptor
- **startScope** — the start range of the local variable scope
- **endScope** — the end range of the local variable scope

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`
