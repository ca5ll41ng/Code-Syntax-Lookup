---
id: "java-en-function-abstractmap-values"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.values"
signature: "public Collection<V> values()"
title: "AbstractMap.values"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.values

```java
public Collection<V> values()
```

{@inheritDoc}

 This implementation returns a collection that subclasses `AbstractCollection`.  The subclass's iterator method returns a
 "wrapper object" over this map's `entrySet()` iterator.
 The `size` method delegates to this map's `size`
 method and the `contains` method delegates to this map's
 `containsValue` method.

 

The collection is created the first time this method is called, and
 returned in response to all subsequent calls.  No synchronization is
 performed, so there is a slight chance that multiple calls to this
 method will not all return the same collection.
