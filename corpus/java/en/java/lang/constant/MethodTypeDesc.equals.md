---
id: "java-en-function-methodtypedesc-equals"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeDesc.equals"
signature: "boolean equals(Object o)"
title: "MethodTypeDesc.equals"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodTypeDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeDesc.equals

```java
boolean equals(Object o)
```

Compares the specified object with this descriptor for equality.  Returns
 `true` if and only if the specified object is also a
 `MethodTypeDesc` both have the same arity, their return types
 are equal, and each pair of corresponding parameter types are equal.

**参数**

- **o** — the other object

**返回**

- whether this descriptor is equal to the other object
