---
id: "java-en-function-methodhandles-varhandleinvoker"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.varHandleInvoker"
signature: "public static MethodHandle varHandleInvoker(VarHandle.AccessMode accessMode, MethodType type)"
title: "MethodHandles.varHandleInvoker"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.varHandleInvoker

```java
public static MethodHandle varHandleInvoker(VarHandle.AccessMode accessMode, MethodType type)
```

Produces a special invoker method handle which can be used to
 invoke a signature-polymorphic access mode method on any VarHandle whose
 associated access mode type is compatible with the given type.
 The resulting invoker will have a type which is exactly equal to the
 desired given type, except that it will accept an additional leading
 argument of type `VarHandle`.
 

 Before invoking its target, if the access mode type differs from the
 desired given type, the invoker will apply reference casts as necessary
 and box, unbox, or widen primitive values, as if by
 `asType asType`.  Similarly, the return value will be
 converted as necessary.
 

 This method is equivalent to the following code (though it may be more
 efficient): `publicLookup().findVirtual(VarHandle.class, accessMode.name(), type)`

**参数**

- **accessMode** — the VarHandle access mode
- **type** — the desired target type

**返回**

- a method handle suitable for invoking an access mode method of any VarHandle whose access mode type is convertible to the given type.

> *Since 9*
