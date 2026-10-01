---
id: "java-en-function-keysetview-remove"
language: "java"
lang: "en"
category: "function"
name: "KeySetView.remove"
signature: "public boolean remove(Object o)"
title: "KeySetView.remove"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeySetView.remove

```java
public boolean remove(Object o)
```

Removes the key from this map view, by removing the key (and its
 corresponding value) from the backing map.  This method does
 nothing if the key is not in the map.

**参数**

- **o** — the key to be removed from the backing map

**返回**

- `true` if the backing map contained the specified key

**异常**

- **NullPointerException** — if the specified key is null
