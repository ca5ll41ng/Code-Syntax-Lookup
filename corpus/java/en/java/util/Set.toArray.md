---
id: "java-en-function-set-toarray"
language: "java"
lang: "en"
category: "function"
name: "Set.toArray"
signature: "Object[] toArray()"
title: "Set.toArray"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.toArray

```java
Object[] toArray()
```

Returns an array containing all of the elements in this set.
 If this set makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the
 elements in the same order.

 

The returned array will be "safe" in that no references to it
 are maintained by this set.  (In other words, this method must
 allocate a new array even if this set is backed by an array).
 The caller is thus free to modify the returned array.

 

This method acts as bridge between array-based and collection-based
 APIs.

**返回**

- an array containing all the elements in this set
