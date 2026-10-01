---
id: "java-en-function-classdesc-of"
language: "java"
lang: "en"
category: "function"
name: "ClassDesc.of"
signature: "static ClassDesc of(String name)"
title: "ClassDesc.of"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ClassDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDesc.of

```java
static ClassDesc of(String name)
```

Returns a `ClassDesc` for a class or interface type,
 given the name of the class or interface, such as `"java.lang.String"`.
 (To create a descriptor for an array type, either use `ofDescriptor`
 or `arrayType`; to create a descriptor for a primitive type, use
 `ofDescriptor` or use the predefined constants in
 `ConstantDescs`).

**参数**

- **name** — the fully qualified (dot-separated) binary class name

**返回**

- a `ClassDesc` describing the desired class

**异常**

- **NullPointerException** — if the argument is `null`
- **IllegalArgumentException** — if the name string is not in the correct format

**参见**

- ClassDesc#ofDescriptor(String)
- ClassDesc#ofInternalName(String)
