---
id: "java-en-function-moduleexportinfo-of"
language: "java"
lang: "en"
category: "function"
name: "ModuleExportInfo.of"
signature: "static ModuleExportInfo of(PackageEntry exports, int exportFlags, List<ModuleEntry> exportsTo)"
title: "ModuleExportInfo.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleExportInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleExportInfo.of

```java
static ModuleExportInfo of(PackageEntry exports, int exportFlags, List<ModuleEntry> exportsTo)
```

{@return a module export description}

**参数**

- **exports** — the exported package
- **exportFlags** — the export flags, as a bitmask
- **exportsTo** — the modules to which this package is exported, or empty if this is an unqualified export

**异常**

- **IllegalArgumentException** — if `exportFlags` is not `#u2 u2` or if the number of modules exceeds the limit of `#u2 u2`
