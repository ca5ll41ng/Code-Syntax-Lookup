---
id: "java-en-function-classdesc-arraytype"
language: "java"
lang: "en"
category: "function"
name: "ClassDesc.arrayType"
signature: "ClassDesc arrayType()"
title: "ClassDesc.arrayType"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ClassDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDesc.arrayType

```java
ClassDesc arrayType()
```

Returns a `ClassDesc` for an array type whose component type
 is described by this `ClassDesc`.

**返回**

- a `ClassDesc` describing the array type

**异常**

- **IllegalStateException** — if the resulting `ClassDesc` would have an array rank of greater than 255
