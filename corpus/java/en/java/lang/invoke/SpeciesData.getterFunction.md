---
id: "java-en-function-speciesdata-getterfunction"
language: "java"
lang: "en"
category: "function"
name: "SpeciesData.getterFunction"
signature: "protected LambdaForm.NamedFunction getterFunction(int i)"
title: "SpeciesData.getterFunction"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SpeciesData.getterFunction

```java
protected LambdaForm.NamedFunction getterFunction(int i)
```

Return a `LambdaForm.Name` containing a `LambdaForm.NamedFunction` that
 represents a MH bound to a generic invoker, which in turn forwards to the corresponding
 getter.
