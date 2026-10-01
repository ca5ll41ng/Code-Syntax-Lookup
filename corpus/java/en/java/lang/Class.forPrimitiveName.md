---
id: "java-en-function-class-forprimitivename"
language: "java"
lang: "en"
category: "function"
name: "Class.forPrimitiveName"
signature: "public static Class<?> forPrimitiveName(String primitiveName)"
title: "Class.forPrimitiveName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.forPrimitiveName

```java
public static Class<?> forPrimitiveName(String primitiveName)
```

{@return the `Class` object associated with the
 `isPrimitive() primitive type` of the given name}
 If the argument is not the name of a primitive type, `null` is returned.

**参数**

- **primitiveName** — the name of the primitive type to find

> *Since 22*
