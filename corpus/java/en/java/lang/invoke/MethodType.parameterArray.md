---
id: "java-en-function-methodtype-parameterarray"
language: "java"
lang: "en"
category: "function"
name: "MethodType.parameterArray"
signature: "public Class<?>[] parameterArray()"
title: "MethodType.parameterArray"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.parameterArray

```java
public Class<?>[] parameterArray()
```

Presents the parameter types as an array (a convenience method).
 Changes to the array will not result in changes to the type.

**返回**

- the parameter types (as a fresh copy if necessary)
