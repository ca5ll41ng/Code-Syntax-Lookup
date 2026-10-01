---
id: "java-en-function-classhierarchyresolver-of"
language: "java"
lang: "en"
category: "function"
name: "ClassHierarchyResolver.of"
signature: "static ClassHierarchyResolver of(Collection<ClassDesc> interfaces, Map<ClassDesc, ClassDesc> classToSuperClass)"
title: "ClassHierarchyResolver.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassHierarchyResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassHierarchyResolver.of

```java
static ClassHierarchyResolver of(Collection<ClassDesc> interfaces, Map<ClassDesc, ClassDesc> classToSuperClass)
```

{@return a `ClassHierarchyResolver` that extracts class hierarchy
 information from collections of class hierarchy metadata}

**参数**

- **interfaces** — a collection of classes known to be interfaces
- **classToSuperClass** — a map from classes to their super classes
