---
id: "java-en-function-collections-unmodifiableset"
language: "java"
lang: "en"
category: "function"
name: "Collections.unmodifiableSet"
signature: "public static <T> Set<T> unmodifiableSet(Set<? extends T> s)"
title: "Collections.unmodifiableSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.unmodifiableSet

```java
public static <T> Set<T> unmodifiableSet(Set<? extends T> s)
```

Returns an unmodifiable view of the
 specified set. Query operations on the returned set "read through" to the specified
 set, and attempts to modify the returned set, whether direct or via its
 iterator, result in an `UnsupportedOperationException`.

 The returned set will be serializable if the specified set
 is serializable.

**参数**

- **the** — class of the objects in the set
- **s** — the set for which an unmodifiable view is to be returned.

**返回**

- an unmodifiable view of the specified set.
