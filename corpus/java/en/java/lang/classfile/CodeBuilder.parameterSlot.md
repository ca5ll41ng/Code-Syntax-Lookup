---
id: "java-en-function-codebuilder-parameterslot"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.parameterSlot"
signature: "int parameterSlot(int paramNo)"
title: "CodeBuilder.parameterSlot"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.parameterSlot

```java
int parameterSlot(int paramNo)
```

{@return the local variable slot associated with the specified parameter}
 The returned value is adjusted for the receiver slot (if the method is
 an instance method) and for the requirement that `LONG
 long` and `DOUBLE double`
 values require two slots.

**参数**

- **paramNo** — the index of the parameter

**异常**

- **IndexOutOfBoundsException** — if the parameter index is out of bounds
