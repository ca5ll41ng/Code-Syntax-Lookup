---
id: "java-en-function-abstractmap-containskey"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.containsKey"
signature: "public boolean containsKey(Object key)"
title: "AbstractMap.containsKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.containsKey

```java
public boolean containsKey(Object key)
```

{@inheritDoc}

 This implementation iterates over `entrySet()` searching
 for an entry with the specified key.  If such an entry is found,
 `true` is returned.  If the iteration terminates without
 finding such an entry, `false` is returned.  Note that this
 implementation requires linear time in the size of the map; many
 implementations will override this method.

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
