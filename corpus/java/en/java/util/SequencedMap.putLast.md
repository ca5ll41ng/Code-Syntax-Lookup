---
id: "java-en-function-sequencedmap-putlast"
language: "java"
lang: "en"
category: "function"
name: "SequencedMap.putLast"
signature: "default V putLast(K k, V v)"
title: "SequencedMap.putLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedMap.putLast

```java
default V putLast(K k, V v)
```

Inserts the given mapping into the map if it is not already present, or replaces the
 value of a mapping if it is already present (optional operation). After this operation
 completes normally, the given mapping will be present in this map, and it will be the
 last mapping in this map's encounter order.

 `UnsupportedOperationException`.

**参数**

- **k** — the key
- **v** — the value

**返回**

- the value previously associated with k, or null if none

**异常**

- **UnsupportedOperationException** — if this collection implementation does not support this operation
