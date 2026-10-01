---
id: "java-en-function-methodsignature-parsefrom"
language: "java"
lang: "en"
category: "function"
name: "MethodSignature.parseFrom"
signature: "public static MethodSignature parseFrom(String methodSignature)"
title: "MethodSignature.parseFrom"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodSignature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodSignature.parseFrom

```java
public static MethodSignature parseFrom(String methodSignature)
```

Parses a raw method signature string into a `MethodSignature`.

**参数**

- **methodSignature** — the raw method signature string

**返回**

- the parsed method signature

**异常**

- **IllegalArgumentException** — if the string is not a valid method signature string
