---
id: "java-en-function-abstractcollection-containsall"
language: "java"
lang: "en"
category: "function"
name: "AbstractCollection.containsAll"
signature: "public boolean containsAll(Collection<?> c)"
title: "AbstractCollection.containsAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractCollection.containsAll

```java
public boolean containsAll(Collection<?> c)
```

{@inheritDoc}

 This implementation iterates over the specified collection,
 checking each element returned by the iterator in turn to see
 if it's contained in this collection.  If all elements are so
 contained `true` is returned, otherwise `false`.

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}

**参见**

- #contains(Object)
