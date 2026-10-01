---
id: "java-en-function-copyonwritearraylist-equals"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArrayList.equals"
signature: "public boolean equals(Object o)"
title: "CopyOnWriteArrayList.equals"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList.equals

```java
public boolean equals(Object o)
```

Compares the specified object with this list for equality.
 Returns `true` if the specified object is the same object
 as this object, or if it is also a `List` and the sequence
 of elements returned by an `iterator() iterator`
 over the specified list is the same as the sequence returned by
 an iterator over this list.  The two sequences are considered to
 be the same if they have the same length and corresponding
 elements at the same position in the sequence are equal.
 Two elements `e1` and `e2` are considered
 equal if `Objects.equals(e1, e2)`.

**参数**

- **o** — the object to be compared for equality with this list

**返回**

- `true` if the specified object is equal to this list
