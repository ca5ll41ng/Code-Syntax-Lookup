---
id: "java-en-function-abstractlist-sublist"
language: "java"
lang: "en"
category: "function"
name: "AbstractList.subList"
signature: "public List<E> subList(int fromIndex, int toIndex)"
title: "AbstractList.subList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractList.subList

```java
public List<E> subList(int fromIndex, int toIndex)
```

{@inheritDoc}

 This implementation returns a list that subclasses
 `AbstractList`.  The subclass stores, in private fields, the
 size of the subList (which can change over its lifetime), and the
 expected `modCount` value of the backing list.  There are two
 variants of the subclass, one of which implements `RandomAccess`.
 If this list implements `RandomAccess` the returned list will
 be an instance of the subclass that implements `RandomAccess`.

 

The subclass's `set(int, E)`, `get(int)`,
 `add(int, E)`, `remove(int)`, `addAll(int,
 Collection)` and `removeRange(int, int)` methods all
 delegate to the corresponding methods on the backing abstract list,
 after bounds-checking the index and adjusting for the offset.  The
 `addAll(Collection c)` method merely returns `addAll(size,
 c)`.

 

The `listIterator(int)` method returns a "wrapper object"
 over a list iterator on the backing list, which is created with the
 corresponding method on the backing list.  The `iterator` method
 merely returns `listIterator()`, and the `size` method
 merely returns the subclass's `size` field.

 

All methods first check to see if the actual `modCount` of
 the backing list is equal to its expected value, and throw a
 `ConcurrentModificationException` if it is not.

**异常**

- **IndexOutOfBoundsException** — if an endpoint index value is out of range `(fromIndex < 0 || toIndex > size)`
- **IllegalArgumentException** — if the endpoint indices are out of order `(fromIndex > toIndex)`
