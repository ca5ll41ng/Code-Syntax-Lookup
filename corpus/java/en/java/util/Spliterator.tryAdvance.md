---
id: "java-en-function-spliterator-tryadvance"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.tryAdvance"
signature: "boolean tryAdvance(Consumer<? super T> action)"
title: "Spliterator.tryAdvance"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.tryAdvance

```java
boolean tryAdvance(Consumer<? super T> action)
```

If a remaining element exists: performs the given action on it,
 returning `true`; else returns `false`.  If this
 Spliterator is `ORDERED` the action is performed on the
 next element in encounter order.  Exceptions thrown by the
 action are relayed to the caller.
 

 Subsequent behavior of a spliterator is unspecified if the action throws
 an exception.

**参数**

- **action** — The action whose operation is performed at-most once

**返回**

- `false` if no remaining elements existed upon entry to this method, else `true`.

**异常**

- **NullPointerException** — if the specified action is null
