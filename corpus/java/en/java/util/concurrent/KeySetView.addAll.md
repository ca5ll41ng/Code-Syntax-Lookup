---
id: "java-en-function-keysetview-addall"
language: "java"
lang: "en"
category: "function"
name: "KeySetView.addAll"
signature: "public boolean addAll(Collection<? extends K> c)"
title: "KeySetView.addAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeySetView.addAll

```java
public boolean addAll(Collection<? extends K> c)
```

Adds all of the elements in the specified collection to this set,
 as if by calling `add` on each one.

**参数**

- **c** — the elements to be inserted into this set

**返回**

- `true` if this set changed as a result of the call

**异常**

- **NullPointerException** — if the collection or any of its elements are `null`
- **UnsupportedOperationException** — if no default mapped value for additions was provided
