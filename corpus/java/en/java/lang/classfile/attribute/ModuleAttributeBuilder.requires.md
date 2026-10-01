---
id: "java-en-function-moduleattributebuilder-requires"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttributeBuilder.requires"
signature: "ModuleAttributeBuilder requires(ModuleDesc module, int requiresFlagsMask, String version)"
title: "ModuleAttributeBuilder.requires"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttributeBuilder.requires

```java
ModuleAttributeBuilder requires(ModuleDesc module, int requiresFlagsMask, String version)
```

Adds a module requirement.

**参数**

- **module** — the required module
- **requiresFlagsMask** — the requires flags
- **version** — the required module version, may be `null`

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `module` represents an unnamed module
