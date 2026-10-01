---
id: "java-en-function-varhandle-setopaque"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.setOpaque"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate void setOpaque(Object... args)"
title: "VarHandle.setOpaque"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.setOpaque

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate void setOpaque(Object... args)
```

Sets the value of a variable to the `newValue`, in program order,
 but with no assurance of memory ordering effects with respect to other
 threads.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn, T newValue)void`.

 

The symbolic type descriptor at the call site of `setOpaque`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.SET_OPAQUE)` on this
 VarHandle.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn ctn, T newValue)` , statically represented using varargs.

**异常**

- **UnsupportedOperationException** — if the access mode is unsupported for this VarHandle.
- **WrongMethodTypeException** — if the access mode type does not match the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type matches the caller's symbolic type descriptor, but a reference cast fails.
