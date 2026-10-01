---
id: "java-en-function-blockingqueue-contains"
language: "java"
lang: "en"
category: "function"
name: "BlockingQueue.contains"
signature: "boolean contains(Object o)"
title: "BlockingQueue.contains"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingQueue.contains

```java
boolean contains(Object o)
```

Returns `true` if this queue contains the specified element.
 More formally, returns `true` if and only if this queue contains
 at least one element `e` such that `o.equals(e)`.

**参数**

- **o** — object to be checked for containment in this queue

**返回**

- `true` if this queue contains the specified element

**异常**

- **ClassCastException** — if the class of the specified element is incompatible with this queue (optional)
- **NullPointerException** — if the specified element is null (optional)
