---
id: "java-en-function-methodtypeform-methodtypeform"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeForm.MethodTypeForm"
signature: "protected MethodTypeForm(MethodType erasedType)"
title: "MethodTypeForm.MethodTypeForm"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodTypeForm.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeForm.MethodTypeForm

```java
protected MethodTypeForm(MethodType erasedType)
```

Build an MTF for a given type, which must have all references erased to Object.
 This MTF will stand for that type and all un-erased variations.
 Eagerly compute some basic properties of the type, common to all variations.
