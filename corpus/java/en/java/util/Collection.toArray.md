---
id: "java-en-function-collection-toarray"
language: "java"
lang: "en"
category: "function"
name: "Collection.toArray"
signature: "Object[] toArray()"
title: "Collection.toArray"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.toArray

```java
Object[] toArray()
```

Returns an array containing all of the elements in this collection.
 If this collection makes any guarantees as to what order its elements
 are returned by its iterator, this method must return the elements in
 the same order. The returned array's `getComponentType
 runtime component type` is `Object`.

 

The returned array will be "safe" in that no references to it are
 maintained by this collection.  (In other words, this method must
 allocate a new array even if this collection is backed by an array).
 The caller is thus free to modify the returned array.

 This method acts as a bridge between array-based and collection-based APIs.
 It returns an array whose runtime type is `Object[]`.
 Use `toArray` to reuse an existing
 array, or use `toArray` to control the runtime type
 of the array.

**返回**

- an array, whose `getComponentType runtime component type` is `Object`, containing all of the elements in this collection
