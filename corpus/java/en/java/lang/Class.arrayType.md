---
id: "java-en-function-class-arraytype"
language: "java"
lang: "en"
category: "function"
name: "Class.arrayType"
signature: "public Class<?> arrayType()"
title: "Class.arrayType"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.arrayType

```java
public Class<?> arrayType()
```

Returns a `Class` for an array type whose component type
 is described by this `Class`.

**返回**

- a `Class` describing the array type

**异常**

- **UnsupportedOperationException** — if this component type is `TYPE void` or if the number of dimensions of the resulting array type would exceed 255.

> *Since 12*
