---
id: "java-en-function-classhierarchyresolver-defaultresolver"
language: "java"
lang: "en"
category: "function"
name: "ClassHierarchyResolver.defaultResolver"
signature: "static ClassHierarchyResolver defaultResolver()"
title: "ClassHierarchyResolver.defaultResolver"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassHierarchyResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassHierarchyResolver.defaultResolver

```java
static ClassHierarchyResolver defaultResolver()
```

{@return the default instance of `ClassHierarchyResolver` that
 gets `ClassHierarchyInfo` from system class loader with reflection}
 This default instance cannot load classes from other class loaders, such
 as the caller's class loader; it also loads the system classes if they
 are not yet loaded, which makes it unsuitable for instrumentation.
