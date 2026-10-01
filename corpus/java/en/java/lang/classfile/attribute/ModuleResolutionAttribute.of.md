---
id: "java-en-function-moduleresolutionattribute-of"
language: "java"
lang: "en"
category: "function"
name: "ModuleResolutionAttribute.of"
signature: "static ModuleResolutionAttribute of(int resolutionFlags)"
title: "ModuleResolutionAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleResolutionAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleResolutionAttribute.of

```java
static ModuleResolutionAttribute of(int resolutionFlags)
```

{@return a `ModuleResolution` attribute}

**参数**

- **resolutionFlags** — the resolution flags

**异常**

- **IllegalArgumentException** — if `resolutionFlags` is not `#u2 u2`
