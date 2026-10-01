---
id: "java-en-function-collections-unmodifiablelist"
language: "java"
lang: "en"
category: "function"
name: "Collections.unmodifiableList"
signature: "public static <T> List<T> unmodifiableList(List<? extends T> list)"
title: "Collections.unmodifiableList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.unmodifiableList

```java
public static <T> List<T> unmodifiableList(List<? extends T> list)
```

Returns an unmodifiable view of the
 specified list. Query operations on the returned list "read through" to the
 specified list, and attempts to modify the returned list, whether
 direct or via its iterator, result in an
 `UnsupportedOperationException`.

 The returned list will be serializable if the specified list
 is serializable. Similarly, the returned list will implement
 `RandomAccess` if the specified list does.

**参数**

- **the** — class of the objects in the list
- **list** — the list for which an unmodifiable view is to be returned.

**返回**

- an unmodifiable view of the specified list.
