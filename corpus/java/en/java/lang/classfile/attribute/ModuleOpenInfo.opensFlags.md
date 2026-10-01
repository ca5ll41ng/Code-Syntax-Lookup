---
id: "java-en-function-moduleopeninfo-opensflags"
language: "java"
lang: "en"
category: "function"
name: "ModuleOpenInfo.opensFlags"
signature: "default Set<AccessFlag> opensFlags()"
title: "ModuleOpenInfo.opensFlags"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleOpenInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleOpenInfo.opensFlags

```java
default Set<AccessFlag> opensFlags()
```

{@return the flags associated with this open declaration, as a set of
 flag enums}

**异常**

- **IllegalArgumentException** — if the flags mask has any undefined bit set

**参见**

- ModuleDescriptor.Opens#accessFlags()
- AccessFlag.Location#MODULE_OPENS
