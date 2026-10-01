---
id: "java-en-function-keysetview-add"
language: "java"
lang: "en"
category: "function"
name: "KeySetView.add"
signature: "public boolean add(K e)"
title: "KeySetView.add"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeySetView.add

```java
public boolean add(K e)
```

Adds the specified key to this set view by mapping the key to
 the default mapped value in the backing map, if defined.

**参数**

- **e** — key to be added

**返回**

- `true` if this set changed as a result of the call

**异常**

- **NullPointerException** — if the specified key is null
- **UnsupportedOperationException** — if no default mapped value for additions was provided
