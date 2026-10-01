---
id: "java-en-function-constantpoolbuilder-moduleentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.moduleEntry"
signature: "ModuleEntry moduleEntry(Utf8Entry moduleName)"
title: "ConstantPoolBuilder.moduleEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.moduleEntry

```java
ModuleEntry moduleEntry(Utf8Entry moduleName)
```

{@return a `ModuleEntry` referring to the provided `Utf8Entry`}  The `Utf8Entry` describes the module name.

**参数**

- **moduleName** — the constant pool entry describing the module name

**参见**

- ModuleEntry#name() ModuleEntry::name
