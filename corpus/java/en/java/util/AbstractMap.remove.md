---
id: "java-en-function-abstractmap-remove"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.remove"
signature: "public V remove(Object key)"
title: "AbstractMap.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.remove

```java
public V remove(Object key)
```

{@inheritDoc}

 This implementation iterates over `entrySet()` searching for an
 entry with the specified key.  If such an entry is found, its value is
 obtained with its `getValue` operation, the entry is removed
 from the collection (and the backing map) with the iterator's
 `remove` operation, and the saved value is returned.  If the
 iteration terminates without finding such an entry, `null` is
 returned.  Note that this implementation requires linear time in the
 size of the map; many implementations will override this method.

 

Note that this implementation throws an
 `UnsupportedOperationException` if the `entrySet`
 iterator does not support the `remove` method and this map
 contains a mapping for the specified key.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
