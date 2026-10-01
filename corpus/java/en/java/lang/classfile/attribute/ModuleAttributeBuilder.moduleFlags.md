---
id: "java-en-function-moduleattributebuilder-moduleflags"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttributeBuilder.moduleFlags"
signature: "ModuleAttributeBuilder moduleFlags(int flagsMask)"
title: "ModuleAttributeBuilder.moduleFlags"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttributeBuilder.moduleFlags

```java
ModuleAttributeBuilder moduleFlags(int flagsMask)
```

Sets the module flags.

**参数**

- **flagsMask** — the module flags

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `flagsMask` is not `#u2 u2`
