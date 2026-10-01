---
id: "java-en-function-modulepackagesattribute-of"
language: "java"
lang: "en"
category: "function"
name: "ModulePackagesAttribute.of"
signature: "static ModulePackagesAttribute of(List<PackageEntry> packages)"
title: "ModulePackagesAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModulePackagesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModulePackagesAttribute.of

```java
static ModulePackagesAttribute of(List<PackageEntry> packages)
```

{@return a `ModulePackages` attribute}

**参数**

- **packages** — the packages

**异常**

- **IllegalArgumentException** — if the number of packages exceeds the limit of `#u2 u2`
