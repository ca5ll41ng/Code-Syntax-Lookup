---
id: "java-en-function-collections-ncopies"
language: "java"
lang: "en"
category: "function"
name: "Collections.nCopies"
signature: "public static <T> List<T> nCopies(int n, T o)"
title: "Collections.nCopies"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.nCopies

```java
public static <T> List<T> nCopies(int n, T o)
```

Returns an immutable list consisting of `n` copies of the
 specified object.  The newly allocated data object is tiny (it contains
 a single reference to the data object).  This method is useful in
 combination with the `List.addAll` method to grow lists.
 The returned list is serializable.

**参数**

- **the** — class of the object to copy and of the objects in the returned list.
- **n** — the number of elements in the returned list.
- **o** — the element to appear repeatedly in the returned list.

**返回**

- an immutable list consisting of `n` copies of the specified object.

**异常**

- **IllegalArgumentException** — if `n < 0`

**参见**

- List#addAll(Collection)
- List#addAll(int, Collection)
