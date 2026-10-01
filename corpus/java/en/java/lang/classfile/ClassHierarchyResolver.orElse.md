---
id: "java-en-function-classhierarchyresolver-orelse"
language: "java"
lang: "en"
category: "function"
name: "ClassHierarchyResolver.orElse"
signature: "default ClassHierarchyResolver orElse(ClassHierarchyResolver other)"
title: "ClassHierarchyResolver.orElse"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassHierarchyResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassHierarchyResolver.orElse

```java
default ClassHierarchyResolver orElse(ClassHierarchyResolver other)
```

Chains this `ClassHierarchyResolver` with another to be consulted
 if this resolver does not know about the specified class.

 The default implementation returns resolver implemented to query `other` resolver in case this resolver returns `null`.

**参数**

- **other** — the other resolver

**返回**

- the chained resolver
