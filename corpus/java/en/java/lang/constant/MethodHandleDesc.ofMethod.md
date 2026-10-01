---
id: "java-en-function-methodhandledesc-ofmethod"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleDesc.ofMethod"
signature: "static DirectMethodHandleDesc ofMethod(DirectMethodHandleDesc.Kind kind, ClassDesc owner, String name, MethodTypeDesc lookupMethodType)"
title: "MethodHandleDesc.ofMethod"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodHandleDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleDesc.ofMethod

```java
static DirectMethodHandleDesc ofMethod(DirectMethodHandleDesc.Kind kind, ClassDesc owner, String name, MethodTypeDesc lookupMethodType)
```

Creates a `MethodHandleDesc` corresponding to an invocation of a
 declared method or constructor.

 

The lookup descriptor string has the same format as for the lookup
 methods on `MethodHandles.Lookup`.  If `kind` is
 `CONSTRUCTOR`, the name is ignored and the return type of the lookup
 type must be `void`.  If `kind` corresponds to a virtual method
 invocation, the lookup type includes the method parameters but not the
 receiver type.

**参数**

- **kind** — The kind of method handle to be described; must be one of `SPECIAL, VIRTUAL, STATIC, INTERFACE_SPECIAL, INTERFACE_VIRTUAL, INTERFACE_STATIC, CONSTRUCTOR`
- **owner** — a `ClassDesc` describing the class containing the method or constructor
- **name** — the unqualified name of the method (ignored if `kind` is `CONSTRUCTOR`)
- **lookupMethodType** — a `MethodTypeDesc` describing the lookup type

**返回**

- the `MethodHandleDesc`

**异常**

- **NullPointerException** — if any non-ignored arguments are null
- **IllegalArgumentException** — if the `name` has the incorrect format, or the kind is invalid
