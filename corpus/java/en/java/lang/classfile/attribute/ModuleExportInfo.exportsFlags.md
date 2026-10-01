---
id: "java-en-function-moduleexportinfo-exportsflags"
language: "java"
lang: "en"
category: "function"
name: "ModuleExportInfo.exportsFlags"
signature: "default Set<AccessFlag> exportsFlags()"
title: "ModuleExportInfo.exportsFlags"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleExportInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleExportInfo.exportsFlags

```java
default Set<AccessFlag> exportsFlags()
```

{@return the flags associated with this export declaration, as a set of
 flag enums}

**异常**

- **IllegalArgumentException** — if the flags mask has any undefined bit set

**参见**

- ModuleDescriptor.Exports#accessFlags()
- AccessFlag.Location#MODULE_EXPORTS
