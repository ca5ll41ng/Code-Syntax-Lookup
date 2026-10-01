---
id: "java-en-function-moduleattributebuilder-modulename"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttributeBuilder.moduleName"
signature: "ModuleAttributeBuilder moduleName(ModuleDesc moduleName)"
title: "ModuleAttributeBuilder.moduleName"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttributeBuilder.moduleName

```java
ModuleAttributeBuilder moduleName(ModuleDesc moduleName)
```

Sets the module name.

**参数**

- **moduleName** — the module name

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `moduleName` represents an unnamed module
