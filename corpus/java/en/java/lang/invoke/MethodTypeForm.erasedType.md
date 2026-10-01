---
id: "java-en-function-methodtypeform-erasedtype"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeForm.erasedType"
signature: "public MethodType erasedType()"
title: "MethodTypeForm.erasedType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodTypeForm.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeForm.erasedType

```java
public MethodType erasedType()
```

Return the type corresponding uniquely (1-1) to this MT-form.
  It might have any primitive returns or arguments, but will have no references except Object.
