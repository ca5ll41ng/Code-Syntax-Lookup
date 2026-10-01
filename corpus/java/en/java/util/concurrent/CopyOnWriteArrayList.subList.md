---
id: "java-en-function-copyonwritearraylist-sublist"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArrayList.subList"
signature: "public List<E> subList(int fromIndex, int toIndex)"
title: "CopyOnWriteArrayList.subList"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList.subList

```java
public List<E> subList(int fromIndex, int toIndex)
```

Returns a view of the portion of this list between
 `fromIndex`, inclusive, and `toIndex`, exclusive.
 The returned list is backed by this list, so changes in the
 returned list are reflected in this list.

 

The semantics of the list returned by this method become
 undefined if the backing list (i.e., this list) is modified in
 any way other than via the returned list.

**参数**

- **fromIndex** — low endpoint (inclusive) of the subList
- **toIndex** — high endpoint (exclusive) of the subList

**返回**

- a view of the specified range within this list

**异常**

- **IndexOutOfBoundsException** — {@inheritDoc}
