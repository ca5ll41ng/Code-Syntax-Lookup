---
id: "java-en-function-moduleattribute-moduleflags"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttribute.moduleFlags"
signature: "default Set<AccessFlag> moduleFlags()"
title: "ModuleAttribute.moduleFlags"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttribute.moduleFlags

```java
default Set<AccessFlag> moduleFlags()
```

{@return the module flags of the module, as a set of enum constants}

**异常**

- **IllegalArgumentException** — if the flags mask has any undefined bit set

**参见**

- ModuleDescriptor#accessFlags()
- AccessFlag.Location#MODULE
