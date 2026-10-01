---
id: "java-en-function-parameterizedtype-getrawtype"
language: "java"
lang: "en"
category: "function"
name: "ParameterizedType.getRawType"
signature: "Type getRawType()"
title: "ParameterizedType.getRawType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/ParameterizedType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterizedType.getRawType

```java
Type getRawType()
```

{@return the `Type` object representing the class or interface
 that declared this type}

 All `ParameterizedType` objects from core reflection return a
 `Class`. The static `Type` return type allows other
 implementations to represent classes and interfaces not in the current
 runtime.

> *Since 1.5*
