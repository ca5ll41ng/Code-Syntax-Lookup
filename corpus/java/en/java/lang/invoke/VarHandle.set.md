---
id: "java-en-function-varhandle-set"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.set"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate void set(Object... args)"
title: "VarHandle.set"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.set

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate void set(Object... args)
```

Sets the value of a variable to the `newValue`, with memory
 semantics of setting as if the variable was declared non-`volatile`
 and non-`final`.  Commonly referred to as plain write access.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn, T newValue)void`

 

The symbolic type descriptor at the call site of `set`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.SET)` on this VarHandle.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn ctn, T newValue)` , statically represented using varargs.

**异常**

- **UnsupportedOperationException** — if the access mode is unsupported for this VarHandle.
- **WrongMethodTypeException** — if the access mode type does not match the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type matches the caller's symbolic type descriptor, but a reference cast fails.
