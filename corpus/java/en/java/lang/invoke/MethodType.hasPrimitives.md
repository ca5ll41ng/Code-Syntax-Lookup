---
id: "java-en-function-methodtype-hasprimitives"
language: "java"
lang: "en"
category: "function"
name: "MethodType.hasPrimitives"
signature: "public boolean hasPrimitives()"
title: "MethodType.hasPrimitives"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.hasPrimitives

```java
public boolean hasPrimitives()
```

Reports if this type contains a primitive argument or return value.
 The return type `void` counts as a primitive.

**返回**

- true if any of the types are primitives
