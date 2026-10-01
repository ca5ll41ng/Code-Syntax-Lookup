---
id: "java-en-function-speciesdata-derivetypestring"
language: "java"
lang: "en"
category: "function"
name: "SpeciesData.deriveTypeString"
signature: "protected String deriveTypeString()"
title: "SpeciesData.deriveTypeString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SpeciesData.deriveTypeString

```java
protected String deriveTypeString()
```

Default implementation collects basic type characters,
 plus possibly type names, if some types don't correspond
 to basic types.

**返回**

- a string suitable for use in a class name
