---
id: "java-en-function-abstractcollection-toarray"
language: "java"
lang: "en"
category: "function"
name: "AbstractCollection.toArray"
signature: "public Object[] toArray()"
title: "AbstractCollection.toArray"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractCollection.toArray

```java
public Object[] toArray()
```

{@inheritDoc}

 This implementation returns an array containing all the elements
 returned by this collection's iterator, in the same order, stored in
 consecutive elements of the array, starting with index `0`.
 The length of the returned array is equal to the number of elements
 returned by the iterator, even if the size of this collection changes
 during iteration, as might happen if the collection permits
 concurrent modification during iteration.  The `size` method is
 called only as an optimization hint; the correct result is returned
 even if the iterator returns a different number of elements.

 

This method is equivalent to:

  
```
 `List list = new ArrayList(size());
 for (E e : this)
     list.add(e);
 return list.toArray();
 `
```
