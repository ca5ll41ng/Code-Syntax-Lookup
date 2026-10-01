---
id: "java-en-function-basetypesig-of"
language: "java"
lang: "en"
category: "function"
name: "BaseTypeSig.of"
signature: "public static BaseTypeSig of(ClassDesc classDesc)"
title: "BaseTypeSig.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BaseTypeSig.of

```java
public static BaseTypeSig of(ClassDesc classDesc)
```

{@return the signature of a primitive type or void}

**参数**

- **classDesc** — a symbolic descriptor for the base type, must correspond to a primitive type

**异常**

- **IllegalArgumentException** — if the `classDesc` is not primitive
