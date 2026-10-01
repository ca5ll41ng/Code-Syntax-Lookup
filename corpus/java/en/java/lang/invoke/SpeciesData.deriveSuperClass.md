---
id: "java-en-function-speciesdata-derivesuperclass"
language: "java"
lang: "en"
category: "function"
name: "SpeciesData.deriveSuperClass"
signature: "protected Class<? extends T> deriveSuperClass()"
title: "SpeciesData.deriveSuperClass"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SpeciesData.deriveSuperClass

```java
protected Class<? extends T> deriveSuperClass()
```

Report what immediate super-class to use for the concrete class of this species.
 Normally this is `topClass`, but if that is an interface, the factory must override.
 The super-class must provide a constructor which takes the `baseConstructorType` arguments, if any.
 This hook also allows the code generator to use more than one canned supertype for species.

**返回**

- the super-class of the class to be generated
