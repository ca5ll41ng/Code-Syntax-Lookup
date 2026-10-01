---
id: "java-en-function-methodtypeform-canonicalize"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeForm.canonicalize"
signature: "public static MethodType canonicalize(MethodType mt, int how)"
title: "MethodTypeForm.canonicalize"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodTypeForm.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeForm.canonicalize

```java
public static MethodType canonicalize(MethodType mt, int how)
```

Canonicalize the types in the given method type.
 If any types change, intern the new type, and return it.
 Otherwise return null.
