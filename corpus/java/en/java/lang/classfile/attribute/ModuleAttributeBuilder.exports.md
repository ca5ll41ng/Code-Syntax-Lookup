---
id: "java-en-function-moduleattributebuilder-exports"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttributeBuilder.exports"
signature: "ModuleAttributeBuilder exports(PackageDesc pkge, int exportsFlagsMask, ModuleDesc... exportsToModules)"
title: "ModuleAttributeBuilder.exports"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttributeBuilder.exports

```java
ModuleAttributeBuilder exports(PackageDesc pkge, int exportsFlagsMask, ModuleDesc... exportsToModules)
```

Adds an exported package.

**参数**

- **pkge** — the exported package
- **exportsFlagsMask** — the export flags
- **exportsToModules** — the modules to export to, or empty for an unqualified export

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `pkge` represents an unnamed package; if any of `exportsToModules` represents an unnamed module; or if the number of modules exceeds the limit of `#u2 u2`
