---
id: "java-en-function-methodtypedesc-ofdescriptor"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeDesc.ofDescriptor"
signature: "static MethodTypeDesc ofDescriptor(String descriptor)"
title: "MethodTypeDesc.ofDescriptor"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodTypeDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeDesc.ofDescriptor

```java
static MethodTypeDesc ofDescriptor(String descriptor)
```

Creates a `MethodTypeDesc` given a method descriptor string.

**参数**

- **descriptor** — a method descriptor string

**返回**

- a `MethodTypeDesc` describing the desired method type

**异常**

- **NullPointerException** — if the argument is `null`
- **IllegalArgumentException** — if the descriptor string is not a valid method descriptor
