---
id: "java-en-function-modulehashesattribute-of"
language: "java"
lang: "en"
category: "function"
name: "ModuleHashesAttribute.of"
signature: "static ModuleHashesAttribute of(String algorithm, List<ModuleHashInfo> hashes)"
title: "ModuleHashesAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleHashesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleHashesAttribute.of

```java
static ModuleHashesAttribute of(String algorithm, List<ModuleHashInfo> hashes)
```

{@return a `ModuleHashes` attribute}

**参数**

- **algorithm** — the hashing algorithm
- **hashes** — the hash descriptions

**异常**

- **IllegalArgumentException** — if the number of descriptions exceeds the limit of `#u2 u2`
