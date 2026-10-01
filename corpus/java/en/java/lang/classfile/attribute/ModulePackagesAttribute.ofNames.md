---
id: "java-en-function-modulepackagesattribute-ofnames"
language: "java"
lang: "en"
category: "function"
name: "ModulePackagesAttribute.ofNames"
signature: "static ModulePackagesAttribute ofNames(List<PackageDesc> packages)"
title: "ModulePackagesAttribute.ofNames"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModulePackagesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModulePackagesAttribute.ofNames

```java
static ModulePackagesAttribute ofNames(List<PackageDesc> packages)
```

{@return a `ModulePackages` attribute}

**参数**

- **packages** — the packages

**异常**

- **IllegalArgumentException** — if any of `packages` represents an unnamed package; or if the number of packages exceeds the limit of `#u2 u2`
