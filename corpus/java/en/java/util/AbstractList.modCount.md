---
id: "java-en-function-abstractlist-modcount"
language: "java"
lang: "en"
category: "function"
name: "AbstractList.modCount"
signature: "protected transient int modCount = 0"
title: "AbstractList.modCount"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractList.modCount

```java
protected transient int modCount = 0
```

The number of times this list has been structurally modified.
 Structural modifications are those that change the size of the
 list, or otherwise perturb it in such a fashion that iterations in
 progress may yield incorrect results.

 

This field is used by the iterator and list iterator implementation
 returned by the `iterator` and `listIterator` methods.
 If the value of this field changes unexpectedly, the iterator (or list
 iterator) will throw a `ConcurrentModificationException` in
 response to the `next`, `remove`, `previous`,
 `set` or `add` operations.  This provides
 fail-fast behavior, rather than non-deterministic behavior in
 the face of concurrent modification during iteration.

 

**Use of this field by subclasses is optional.** If a subclass
 wishes to provide fail-fast iterators (and list iterators), then it
 merely has to increment this field in its `add(int, E)` and
 `remove(int)` methods (and any other methods that it overrides
 that result in structural modifications to the list).  A single call to
 `add(int, E)` or `remove(int)` must add no more than
 one to this field, or the iterators (and list iterators) will throw
 bogus `ConcurrentModificationExceptions`.  If an implementation
 does not wish to provide fail-fast iterators, this field may be
 ignored.
