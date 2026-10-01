---
id: "java-en-function-modulerequireinfo-of"
language: "java"
lang: "en"
category: "function"
name: "ModuleRequireInfo.of"
signature: "static ModuleRequireInfo of(ModuleEntry requires, int requiresFlags, Utf8Entry requiresVersion)"
title: "ModuleRequireInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleRequireInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleRequireInfo.of

```java
static ModuleRequireInfo of(ModuleEntry requires, int requiresFlags, Utf8Entry requiresVersion)
```

{@return a module requirement description}

**参数**

- **requires** — the required module
- **requiresFlags** — the require-specific flags
- **requiresVersion** — the required version, may be `null`

**异常**

- **IllegalArgumentException** — if `requiresFlags` is not `#u2 u2`
