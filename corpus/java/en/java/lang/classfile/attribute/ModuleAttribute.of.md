---
id: "java-en-function-moduleattribute-of"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttribute.of"
signature: "static ModuleAttribute of(ModuleEntry moduleName, int moduleFlags, Utf8Entry moduleVersion, Collection<ModuleRequireInfo> requires, Collection<ModuleExportInfo> exports, Collection<ModuleOpenInfo> opens, Collection<ClassEntry> uses, Collection<ModuleProvideInfo> provides)"
title: "ModuleAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttribute.of

```java
static ModuleAttribute of(ModuleEntry moduleName, int moduleFlags, Utf8Entry moduleVersion, Collection<ModuleRequireInfo> requires, Collection<ModuleExportInfo> exports, Collection<ModuleOpenInfo> opens, Collection<ClassEntry> uses, Collection<ModuleProvideInfo> provides)
```

{@return a `Module` attribute}

**参数**

- **moduleName** — the module name
- **moduleFlags** — the module flags
- **moduleVersion** — the module version, may be `null`
- **requires** — the required packages
- **exports** — the exported packages
- **opens** — the opened packages
- **uses** — the consumed services
- **provides** — the provided services

**异常**

- **IllegalArgumentException** — if `moduleFlags` is not `#u2 u2` or any of the collections has a size over the limit of `#u2 u2`
