---
id: "java-en-function-abstractcollection-remove"
language: "java"
lang: "en"
category: "function"
name: "AbstractCollection.remove"
signature: "public boolean remove(Object o)"
title: "AbstractCollection.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractCollection.remove

```java
public boolean remove(Object o)
```

{@inheritDoc}

 This implementation iterates over the collection looking for the
 specified element.  If it finds the element, it removes the element
 from the collection using the iterator's remove method.

 

Note that this implementation throws an
 `UnsupportedOperationException` if the iterator returned by this
 collection's iterator method does not implement the `remove`
 method and this collection contains the specified object.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
