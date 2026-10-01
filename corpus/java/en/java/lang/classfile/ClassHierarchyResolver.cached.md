---
id: "java-en-function-classhierarchyresolver-cached"
language: "java"
lang: "en"
category: "function"
name: "ClassHierarchyResolver.cached"
signature: "default ClassHierarchyResolver cached(Supplier<Map<ClassDesc, ClassHierarchyInfo>> cacheFactory)"
title: "ClassHierarchyResolver.cached"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassHierarchyResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassHierarchyResolver.cached

```java
default ClassHierarchyResolver cached(Supplier<Map<ClassDesc, ClassHierarchyInfo>> cacheFactory)
```

{@return a `ClassHierarchyResolver` that caches class hierarchy
 information from this resolver}  The returned resolver will not update if
 the query results from this resolver changed over time.  The thread
 safety of the returned resolver depends on the thread safety of the map
 returned by the `cacheFactory`.

 The default implementation returns a resolver holding an instance of the
 cache map provided by the `cacheFactory`.  It looks up in the cache
 map, or if a class name has not yet been queried, queries this resolver
 and caches the result, including a `null` that indicates unknown
 class names.  The cache map may refuse `null` keys and values.

**参数**

- **cacheFactory** — the factory for the cache
