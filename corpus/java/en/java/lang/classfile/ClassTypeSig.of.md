---
id: "java-en-function-classtypesig-of"
language: "java"
lang: "en"
category: "function"
name: "ClassTypeSig.of"
signature: "public static ClassTypeSig of(ClassDesc className, TypeArg... typeArgs)"
title: "ClassTypeSig.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTypeSig.of

```java
public static ClassTypeSig of(ClassDesc className, TypeArg... typeArgs)
```

{@return a class or interface signature without an outer type}

**参数**

- **className** — the name of the class or interface
- **typeArgs** — the type arguments

**异常**

- **IllegalArgumentException** — if `className` does not represent a class or interface, or if it cannot be `#identifier denoted`
