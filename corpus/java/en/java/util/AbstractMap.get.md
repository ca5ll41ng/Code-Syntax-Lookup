---
id: "java-en-function-abstractmap-get"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.get"
signature: "public V get(Object key)"
title: "AbstractMap.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.get

```java
public V get(Object key)
```

{@inheritDoc}

 This implementation iterates over `entrySet()` searching
 for an entry with the specified key.  If such an entry is found,
 the entry's value is returned.  If the iteration terminates without
 finding such an entry, `null` is returned.  Note that this
 implementation requires linear time in the size of the map; many
 implementations will override this method.

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
