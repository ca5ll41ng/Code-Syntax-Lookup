---
id: "java-en-function-abstractcollection-clear"
language: "java"
lang: "en"
category: "function"
name: "AbstractCollection.clear"
signature: "public void clear()"
title: "AbstractCollection.clear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractCollection.clear

```java
public void clear()
```

{@inheritDoc}

 This implementation iterates over this collection, removing each
 element using the `Iterator.remove` operation.  Most
 implementations will probably choose to override this method for
 efficiency.

 

Note that this implementation will throw an
 `UnsupportedOperationException` if the iterator returned by this
 collection's `iterator` method does not implement the
 `remove` method and this collection is non-empty.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
