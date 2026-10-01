---
id: "java-en-function-regularenumset-iterator"
language: "java"
lang: "en"
category: "function"
name: "RegularEnumSet.iterator"
signature: "public Iterator<E> iterator()"
title: "RegularEnumSet.iterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/RegularEnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RegularEnumSet.iterator

```java
public Iterator<E> iterator()
```

Returns an iterator over the elements contained in this set.  The
 iterator traverses the elements in their natural order (which is
 the order in which the enum constants are declared). The returned
 Iterator is a "snapshot" iterator that will never throw `ConcurrentModificationException`; the elements are traversed as they
 existed when this call was invoked.

**返回**

- an iterator over the elements contained in this set
