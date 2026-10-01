---
id: "java-en-function-moduleattributebuilder-opens"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttributeBuilder.opens"
signature: "ModuleAttributeBuilder opens(PackageDesc pkge, int opensFlagsMask, ModuleDesc... opensToModules)"
title: "ModuleAttributeBuilder.opens"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttributeBuilder.opens

```java
ModuleAttributeBuilder opens(PackageDesc pkge, int opensFlagsMask, ModuleDesc... opensToModules)
```

Opens a package.

 Opening a package to another module allows that other module to gain
 the same full privilege access as members in this module.  See `privateLookupIn` for more details.

**参数**

- **pkge** — the opened package
- **opensFlagsMask** — the open package flags
- **opensToModules** — the modules to open to, or empty for an unqualified open

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `pkge` represents an unnamed package; if any of `opensToModules` represents an unnamed module; or if the number of modules exceeds the limit of `#u2 u2`
