---
id: "java-en-function-abstractmap-putall"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.putAll"
signature: "public void putAll(Map<? extends K, ? extends V> m)"
title: "AbstractMap.putAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.putAll

```java
public void putAll(Map<? extends K, ? extends V> m)
```

{@inheritDoc}

 This implementation iterates over the specified map's
 `entrySet()` collection, and calls this map's `put`
 operation once for each entry returned by the iteration.

 

Note that this implementation throws an
 `UnsupportedOperationException` if this map does not support
 the `put` operation and the specified map is nonempty.

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
