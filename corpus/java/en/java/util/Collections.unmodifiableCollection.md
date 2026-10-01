---
id: "java-en-function-collections-unmodifiablecollection"
language: "java"
lang: "en"
category: "function"
name: "Collections.unmodifiableCollection"
signature: "public static <T> Collection<T> unmodifiableCollection(Collection<? extends T> c)"
title: "Collections.unmodifiableCollection"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.unmodifiableCollection

```java
public static <T> Collection<T> unmodifiableCollection(Collection<? extends T> c)
```

Returns an unmodifiable view of the
 specified collection. Query operations on the returned collection "read through"
 to the specified collection, and attempts to modify the returned
 collection, whether direct or via its iterator, result in an
 `UnsupportedOperationException`.

 The returned collection does not pass the hashCode and equals
 operations through to the backing collection, but relies on
 `Object`'s `equals` and `hashCode` methods.  This
 is necessary to preserve the contracts of these operations in the case
 that the backing collection is a set or a list.

 The returned collection will be serializable if the specified collection
 is serializable.

**参数**

- **the** — class of the objects in the collection
- **c** — the collection for which an unmodifiable view is to be returned.

**返回**

- an unmodifiable view of the specified collection.
