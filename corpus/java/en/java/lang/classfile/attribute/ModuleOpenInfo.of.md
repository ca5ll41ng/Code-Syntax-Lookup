---
id: "java-en-function-moduleopeninfo-of"
language: "java"
lang: "en"
category: "function"
name: "ModuleOpenInfo.of"
signature: "static ModuleOpenInfo of(PackageEntry opens, int opensFlags, List<ModuleEntry> opensTo)"
title: "ModuleOpenInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleOpenInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleOpenInfo.of

```java
static ModuleOpenInfo of(PackageEntry opens, int opensFlags, List<ModuleEntry> opensTo)
```

{@return a module open description}

**参数**

- **opens** — the package to open
- **opensFlags** — the open flags
- **opensTo** — the modules to which this package is opened, or empty if this is an unqualified open

**异常**

- **IllegalArgumentException** — if `opensFlags` is not `#u2 u2` or if the number of modules exceeds the limit of `#u2 u2`
