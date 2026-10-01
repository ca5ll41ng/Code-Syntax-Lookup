---
id: "java-en-function-methodhandledesc-of"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleDesc.of"
signature: "static DirectMethodHandleDesc of(DirectMethodHandleDesc.Kind kind, ClassDesc owner, String name, String lookupDescriptor)"
title: "MethodHandleDesc.of"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodHandleDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleDesc.of

```java
static DirectMethodHandleDesc of(DirectMethodHandleDesc.Kind kind, ClassDesc owner, String name, String lookupDescriptor)
```

Creates a `MethodHandleDesc` corresponding to an invocation of a
 declared method, invocation of a constructor, or access to a field.

 

The lookup descriptor string has the same format as for the various
 variants of `CONSTANT_MethodHandle_info` and for the lookup
 methods on `MethodHandles.Lookup`.  For a method or constructor
 invocation, it is interpreted as a method type descriptor; for field
 access, it is interpreted as a field descriptor.  If `kind` is
 `CONSTRUCTOR`, the `name` parameter is ignored and the return
 type of the lookup descriptor must be `void`.  If `kind`
 corresponds to a virtual method invocation, the lookup type includes the
 method parameters but not the receiver type.

**参数**

- **kind** — The kind of method handle to be described
- **owner** — a `ClassDesc` describing the class containing the method, constructor, or field
- **name** — the unqualified name of the method or field (ignored if `kind` is `CONSTRUCTOR`)
- **lookupDescriptor** — a method descriptor string the lookup type, if the request is for a method invocation, or describing the invocation type, if the request is for a field or constructor

**返回**

- the `MethodHandleDesc`

**异常**

- **NullPointerException** — if any of the non-ignored arguments are null
- **IllegalArgumentException** — if the descriptor string is not a valid method or field descriptor
