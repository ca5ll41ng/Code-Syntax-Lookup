---
id: "java-en-function-speciesdata-deriveclassname"
language: "java"
lang: "en"
category: "function"
name: "SpeciesData.deriveClassName"
signature: "protected String deriveClassName()"
title: "SpeciesData.deriveClassName"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SpeciesData.deriveClassName

```java
protected String deriveClassName()
```

Given a key, generate the name of the class which implements the species for that key.
 This algorithm must be stable.

**返回**

- class name, which by default is `outer().topClass().getName() + "$Species_" + deriveTypeString(key)`
