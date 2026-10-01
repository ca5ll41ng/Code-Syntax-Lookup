---
id: "java-en-function-methodhandledesc-offield"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleDesc.ofField"
signature: "static DirectMethodHandleDesc ofField(DirectMethodHandleDesc.Kind kind, ClassDesc owner, String fieldName, ClassDesc fieldType)"
title: "MethodHandleDesc.ofField"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodHandleDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleDesc.ofField

```java
static DirectMethodHandleDesc ofField(DirectMethodHandleDesc.Kind kind, ClassDesc owner, String fieldName, ClassDesc fieldType)
```

Creates a `MethodHandleDesc` corresponding to a method handle
 that accesses a field.

**参数**

- **kind** — the kind of the method handle to be described; must be one of `GETTER`, `SETTER`, `STATIC_GETTER`, or `STATIC_SETTER`
- **owner** — a `ClassDesc` describing the class containing the field
- **fieldName** — the unqualified name of the field
- **fieldType** — a `ClassDesc` describing the type of the field

**返回**

- the `MethodHandleDesc`

**异常**

- **NullPointerException** — if any of the arguments are null
- **IllegalArgumentException** — if the `kind` is not one of the valid values or if the field name is not valid
