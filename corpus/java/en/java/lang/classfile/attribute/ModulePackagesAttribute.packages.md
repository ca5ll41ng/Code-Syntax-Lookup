---
id: "java-en-function-modulepackagesattribute-packages"
language: "java"
lang: "en"
category: "function"
name: "ModulePackagesAttribute.packages"
signature: "List<PackageEntry> packages()"
title: "ModulePackagesAttribute.packages"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModulePackagesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModulePackagesAttribute.packages

```java
List<PackageEntry> packages()
```

{@return the packages used by the module descriptor}  This must include
 all packages opened or exported by the module, as well as the packages of
 any service providers, and the package for the main class.
