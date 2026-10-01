---
id: "java-en-function-methodhandles-varhandleexactinvoker"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.varHandleExactInvoker"
signature: "public static MethodHandle varHandleExactInvoker(VarHandle.AccessMode accessMode, MethodType type)"
title: "MethodHandles.varHandleExactInvoker"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.varHandleExactInvoker

```java
public static MethodHandle varHandleExactInvoker(VarHandle.AccessMode accessMode, MethodType type)
```

Produces a special invoker method handle which can be used to
 invoke a signature-polymorphic access mode method on any VarHandle whose
 associated access mode type is compatible with the given type.
 The resulting invoker will have a type which is exactly equal to the
 desired given type, except that it will accept an additional leading
 argument of type `VarHandle`.

**参数**

- **accessMode** — the VarHandle access mode
- **type** — the desired target type

**返回**

- a method handle suitable for invoking an access mode method of any VarHandle whose access mode type is of the given type.

> *Since 9*
