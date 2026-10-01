---
id: "java-en-function-moduleentry-matches"
language: "java"
lang: "en"
category: "function"
name: "ModuleEntry.matches"
signature: "boolean matches(ModuleDesc desc)"
title: "ModuleEntry.matches"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ModuleEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleEntry.matches

```java
boolean matches(ModuleDesc desc)
```

{@return whether this entry describes the given module}
 

 This method always returns `false` for a module descriptor
 representing an unnamed module.

**参数**

- **desc** — the module descriptor

> *Since 25*
