---
id: "java-en-function-abstractcollection-retainall"
language: "java"
lang: "en"
category: "function"
name: "AbstractCollection.retainAll"
signature: "public boolean retainAll(Collection<?> c)"
title: "AbstractCollection.retainAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractCollection.retainAll

```java
public boolean retainAll(Collection<?> c)
```

{@inheritDoc}

 This implementation iterates over this collection, checking each
 element returned by the iterator in turn to see if it's contained
 in the specified collection.  If it's not so contained, it's removed
 from this collection with the iterator's `remove` method.

 

Note that this implementation will throw an
 `UnsupportedOperationException` if the iterator returned by the
 `iterator` method does not implement the `remove` method
 and this collection contains one or more elements not present in the
 specified collection.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}

**参见**

- #remove(Object)
- #contains(Object)
