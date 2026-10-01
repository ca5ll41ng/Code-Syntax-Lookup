---
id: "java-en-function-varhandle-setvolatile"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.setVolatile"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate void setVolatile(Object... args)"
title: "VarHandle.setVolatile"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.setVolatile

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate void setVolatile(Object... args)
```

Sets the value of a variable to the `newValue`, with memory
 semantics of setting as if the variable was declared `volatile`.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn, T newValue)void`.

 

The symbolic type descriptor at the call site of `setVolatile`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.SET_VOLATILE)` on this
 VarHandle.

 Ignoring the many semantic differences from C and C++, this method has
 memory ordering effects compatible with `memory_order_seq_cst`.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn ctn, T newValue)` , statically represented using varargs.

**异常**

- **UnsupportedOperationException** — if the access mode is unsupported for this VarHandle.
- **WrongMethodTypeException** — if the access mode type does not match the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type matches the caller's symbolic type descriptor, but a reference cast fails.
