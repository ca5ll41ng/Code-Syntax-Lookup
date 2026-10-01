---
id: "java-en-function-speciesdata-getter"
language: "java"
lang: "en"
category: "function"
name: "SpeciesData.getter"
signature: "protected MethodHandle getter(int i)"
title: "SpeciesData.getter"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SpeciesData.getter

```java
protected MethodHandle getter(int i)
```

Return a `MethodHandle` which can get the indexed field of this species.
 The return type is the type of the species field it accesses.
 The argument type is the `fieldHolder` class of this species.
