---
id: "java-en-function-abstractlist-iterator"
language: "java"
lang: "en"
category: "function"
name: "AbstractList.iterator"
signature: "public Iterator<E> iterator()"
title: "AbstractList.iterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractList.iterator

```java
public Iterator<E> iterator()
```

Returns an iterator over the elements in this list in proper sequence.

 This implementation returns a straightforward implementation of the
 iterator interface, relying on the backing list's `size()`,
 `get(int)`, and `remove(int)` methods.

 

Note that the iterator returned by this method will throw an
 `UnsupportedOperationException` in response to its
 `remove` method unless the list's `remove(int)` method is
 overridden.

 

This implementation can be made to throw runtime exceptions in the
 face of concurrent modification, as described in the specification
 for the (protected) `modCount` field.

**返回**

- an iterator over the elements in this list in proper sequence
