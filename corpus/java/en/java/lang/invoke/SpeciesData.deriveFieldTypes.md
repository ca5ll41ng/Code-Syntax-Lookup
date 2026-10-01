---
id: "java-en-function-speciesdata-derivefieldtypes"
language: "java"
lang: "en"
category: "function"
name: "SpeciesData.deriveFieldTypes"
signature: "protected abstract List<Class<?>> deriveFieldTypes(K key)"
title: "SpeciesData.deriveFieldTypes"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SpeciesData.deriveFieldTypes

```java
protected abstract List<Class<?>> deriveFieldTypes(K key)
```

Given a key, derive the list of field types, which all instances of this
 species must store.
