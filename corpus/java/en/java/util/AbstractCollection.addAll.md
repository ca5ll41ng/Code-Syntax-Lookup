---
id: "java-en-function-abstractcollection-addall"
language: "java"
lang: "en"
category: "function"
name: "AbstractCollection.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "AbstractCollection.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractCollection.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

{@inheritDoc}

 This implementation iterates over the specified collection, and adds
 each object returned by the iterator to this collection, in turn.

 

Note that this implementation will throw an
 `UnsupportedOperationException` unless `add` is
 overridden (assuming the specified collection is non-empty).

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
- **IllegalStateException** — {@inheritDoc}

**参见**

- #add(Object)
