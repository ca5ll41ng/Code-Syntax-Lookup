---
id: "java-en-function-methodhandleinfo-tostring"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleInfo.toString"
signature: "public static String toString(int kind, Class<?> defc, String name, MethodType type)"
title: "MethodHandleInfo.toString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleInfo.toString

```java
public static String toString(int kind, Class<?> defc, String name, MethodType type)
```

Returns a string representation for a `MethodHandleInfo`,
 given the four parts of its symbolic reference.
 This is defined to be of the form `"RK C.N:MT"`, where `RK` is the
 `referenceKindToString reference kind string` for `kind`,
 `C` is the `getName name` of `defc`
 `N` is the `name`, and
 `MT` is the `type`.
 These four values may be obtained from the
 `getReferenceKind reference kind`,
 `getDeclaringClass declaring class`,
 `getName member name`,
 and `getMethodType method type`
 of a `MethodHandleInfo` object.

 This produces a result equivalent to:
 
```
`String.format("%s %s.%s:%s", referenceKindToString(kind), defc.getName(), name, type)
 `
```

**参数**

- **kind** — the `getReferenceKind reference kind` part of the symbolic reference
- **defc** — the `getDeclaringClass declaring class` part of the symbolic reference
- **name** — the `getName member name` part of the symbolic reference
- **type** — the `getMethodType method type` part of the symbolic reference

**返回**

- a string of the form `"RK C.N:MT"`

**异常**

- **IllegalArgumentException** — if the first argument is not a valid reference kind number
- **NullPointerException** — if any reference argument is `null`
