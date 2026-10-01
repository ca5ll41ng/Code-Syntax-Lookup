---
id: "java-en-function-varhandledesc-ofstaticfield"
language: "java"
lang: "en"
category: "function"
name: "VarHandleDesc.ofStaticField"
signature: "public static VarHandleDesc ofStaticField(ClassDesc declaringClass, String name, ClassDesc fieldType)"
title: "VarHandleDesc.ofStaticField"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandleDesc.ofStaticField

```java
public static VarHandleDesc ofStaticField(ClassDesc declaringClass, String name, ClassDesc fieldType)
```

Returns a `VarHandleDesc` corresponding to a `VarHandle`
 for a static field.

**参数**

- **declaringClass** — a `ClassDesc` describing the declaring class, for field var handles
- **name** — the unqualified name of the field
- **fieldType** — a `ClassDesc` describing the type of the field

**返回**

- the `VarHandleDesc`

**异常**

- **NullPointerException** — if any of the arguments are null
