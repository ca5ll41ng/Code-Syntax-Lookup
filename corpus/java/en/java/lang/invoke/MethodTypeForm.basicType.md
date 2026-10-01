---
id: "java-en-function-methodtypeform-basictype"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeForm.basicType"
signature: "public MethodType basicType()"
title: "MethodTypeForm.basicType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodTypeForm.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeForm.basicType

```java
public MethodType basicType()
```

Return the basic type derived from the erased type of this MT-form.
  A basic type is erased (all references Object) and also has all primitive
  types (except int, long, float, double, void) normalized to int.
  Such basic types correspond to low-level JVM calling sequences.
