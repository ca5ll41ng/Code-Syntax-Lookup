---
id: "java-en-function-classhierarchyresolver-ofresourceparsing"
language: "java"
lang: "en"
category: "function"
name: "ClassHierarchyResolver.ofResourceParsing"
signature: "static ClassHierarchyResolver ofResourceParsing(Function<ClassDesc, InputStream> classStreamResolver)"
title: "ClassHierarchyResolver.ofResourceParsing"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassHierarchyResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassHierarchyResolver.ofResourceParsing

```java
static ClassHierarchyResolver ofResourceParsing(Function<ClassDesc, InputStream> classStreamResolver)
```

{@return a `ClassHierarchyResolver` that extracts class hierarchy
 information from `class` files returned by a mapping function}  The
 mapping function should return `null` if it cannot provide a
 `class` file for a class name.  Any `IOException` from the
 provided input stream is rethrown as an `UncheckedIOException`
 in `getClassInfo`.

**参数**

- **classStreamResolver** — maps class descriptors to `class` file input streams
