---
id: "java-en-function-varhandle-getopaque"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.getOpaque"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object getOpaque(Object... args)"
title: "VarHandle.getOpaque"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.getOpaque

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object getOpaque(Object... args)
```

Returns the value of a variable, accessed in program order, but with no
 assurance of memory ordering effects with respect to other threads.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn)T`.

 

The symbolic type descriptor at the call site of `getOpaque`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.GET_OPAQUE)` on this
 VarHandle.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn ctn)` , statically represented using varargs.

**返回**

- the signature-polymorphic result that is the value of the variable , statically represented using `Object`.

**异常**

- **UnsupportedOperationException** — if the access mode is unsupported for this VarHandle.
- **WrongMethodTypeException** — if the access mode type does not match the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type matches the caller's symbolic type descriptor, but a reference cast fails.
