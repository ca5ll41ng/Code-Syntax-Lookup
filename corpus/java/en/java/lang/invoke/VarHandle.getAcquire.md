---
id: "java-en-function-varhandle-getacquire"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.getAcquire"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object getAcquire(Object... args)"
title: "VarHandle.getAcquire"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.getAcquire

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object getAcquire(Object... args)
```

Returns the value of a variable, and ensures that subsequent loads and
 stores are not reordered before this access.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn)T`.

 

The symbolic type descriptor at the call site of `getAcquire`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.GET_ACQUIRE)` on this
 VarHandle.

 Ignoring the many semantic differences from C and C++, this method has
 memory ordering effects compatible with `memory_order_acquire`
 ordering.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn ctn)` , statically represented using varargs.

**返回**

- the signature-polymorphic result that is the value of the variable , statically represented using `Object`.

**异常**

- **UnsupportedOperationException** — if the access mode is unsupported for this VarHandle.
- **WrongMethodTypeException** — if the access mode type does not match the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type matches the caller's symbolic type descriptor, but a reference cast fails.
