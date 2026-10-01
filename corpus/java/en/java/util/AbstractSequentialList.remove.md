---
id: "java-en-function-abstractsequentiallist-remove"
language: "java"
lang: "en"
category: "function"
name: "AbstractSequentialList.remove"
signature: "public E remove(int index)"
title: "AbstractSequentialList.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSequentialList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSequentialList.remove

```java
public E remove(int index)
```

Removes the element at the specified position in this list (optional
 operation).  Shifts any subsequent elements to the left (subtracts one
 from their indices).  Returns the element that was removed from the
 list.

 

This implementation first gets a list iterator pointing to the
 indexed element (with `listIterator(index)`).  Then, it removes
 the element with `ListIterator.remove`.

 

Note that this implementation will throw an
 `UnsupportedOperationException` if the list iterator does not
 implement the `remove` operation.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **IndexOutOfBoundsException** — {@inheritDoc}
