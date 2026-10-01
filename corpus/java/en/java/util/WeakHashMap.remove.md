---
id: "java-en-function-weakhashmap-remove"
language: "java"
lang: "en"
category: "function"
name: "WeakHashMap.remove"
signature: "public V remove(Object key)"
title: "WeakHashMap.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/WeakHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakHashMap.remove

```java
public V remove(Object key)
```

Removes the mapping for a key from this weak hash map if it is present.
 More formally, if this map contains a mapping from key `k` to
 value `v` such that (key==null ?  k==null :
 key.equals(k)), that mapping is removed.  (The map can contain
 at most one such mapping.)

 

Returns the value to which this map previously associated the key,
 or `null` if the map contained no mapping for the key.  A
 return value of `null` does not necessarily indicate
 that the map contained no mapping for the key; it's also possible
 that the map explicitly mapped the key to `null`.

 

The map will not contain a mapping for the specified key once the
 call returns.

**参数**

- **key** — key whose mapping is to be removed from the map

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`
