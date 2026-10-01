---
id: "java-en-function-abstractmap-keyset"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.keySet"
signature: "public Set<K> keySet()"
title: "AbstractMap.keySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.keySet

```java
public Set<K> keySet()
```

{@inheritDoc}

 This implementation returns a set that subclasses `AbstractSet`.
 The subclass's iterator method returns a "wrapper object" over this
 map's `entrySet()` iterator.  The `size` method
 delegates to this map's `size` method and the
 `contains` method delegates to this map's
 `containsKey` method.

 

The set is created the first time this method is called,
 and returned in response to all subsequent calls.  No synchronization
 is performed, so there is a slight chance that multiple calls to this
 method will not all return the same set.
