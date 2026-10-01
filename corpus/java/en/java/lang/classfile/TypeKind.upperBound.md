---
id: "java-en-function-typekind-upperbound"
language: "java"
lang: "en"
category: "function"
name: "TypeKind.upperBound"
signature: "public ClassDesc upperBound()"
title: "TypeKind.upperBound"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeKind.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeKind.upperBound

```java
public ClassDesc upperBound()
```

{@return the most specific upper bound field descriptor that can store any value
 of this type} This is the primitive class descriptor for primitive types and
 `VOID void` and `CD_Object Object` descriptor for
 `REFERENCE reference`.
