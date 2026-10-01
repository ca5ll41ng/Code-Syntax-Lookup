---
id: "java-en-function-modulerequireinfo-requiresflags"
language: "java"
lang: "en"
category: "function"
name: "ModuleRequireInfo.requiresFlags"
signature: "default Set<AccessFlag> requiresFlags()"
title: "ModuleRequireInfo.requiresFlags"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleRequireInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleRequireInfo.requiresFlags

```java
default Set<AccessFlag> requiresFlags()
```

{@return the flags associated with this require declaration, as a set of
 flag enums}

**异常**

- **IllegalArgumentException** — if the flags mask has any undefined bit set

**参见**

- ModuleDescriptor.Requires#accessFlags()
- AccessFlag.Location#MODULE_REQUIRES
