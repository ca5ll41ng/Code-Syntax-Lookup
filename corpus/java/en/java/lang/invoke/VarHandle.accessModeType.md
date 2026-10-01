---
id: "java-en-function-varhandle-accessmodetype"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.accessModeType"
signature: "public final MethodType accessModeType(AccessMode accessMode)"
title: "VarHandle.accessModeType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.accessModeType

```java
public final MethodType accessModeType(AccessMode accessMode)
```

Obtains the access mode type for this VarHandle and a given access mode.

 

The access mode type's parameter types will consist of a prefix that
 is the coordinate types of this VarHandle followed by further
 types as defined by the access mode method.
 The access mode type's return type is defined by the return type of the
 access mode method.

**参数**

- **accessMode** — the access mode, corresponding to the signature-polymorphic method of the same name

**返回**

- the access mode type for the given access mode
