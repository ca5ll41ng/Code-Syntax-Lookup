---
id: "java-en-function-classdesc-ofinternalname"
language: "java"
lang: "en"
category: "function"
name: "ClassDesc.ofInternalName"
signature: "static ClassDesc ofInternalName(String name)"
title: "ClassDesc.ofInternalName"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ClassDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDesc.ofInternalName

```java
static ClassDesc ofInternalName(String name)
```

Returns a `ClassDesc` for a class or interface type,
 given the name of the class or interface in internal form,
 such as `"java/lang/String"`.

 To create a descriptor for an array type, either use `ofDescriptor`
 or `arrayType`; to create a descriptor for a primitive type, use
 `ofDescriptor` or use the predefined constants in
 `ConstantDescs`.

**参数**

- **name** — the fully qualified class name, in internal (slash-separated) form

**返回**

- a `ClassDesc` describing the desired class

**异常**

- **NullPointerException** — if the argument is `null`
- **IllegalArgumentException** — if the name string is not in the correct format

**参见**

- ClassDesc#of(String)
- ClassDesc#ofDescriptor(String)

> *Since 20*
