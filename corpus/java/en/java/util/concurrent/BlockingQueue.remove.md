---
id: "java-en-function-blockingqueue-remove"
language: "java"
lang: "en"
category: "function"
name: "BlockingQueue.remove"
signature: "boolean remove(Object o)"
title: "BlockingQueue.remove"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingQueue.remove

```java
boolean remove(Object o)
```

Removes a single instance of the specified element from this queue,
 if it is present.  More formally, removes an element `e` such
 that `o.equals(e)`, if this queue contains one or more such
 elements.
 Returns `true` if this queue contained the specified element
 (or equivalently, if this queue changed as a result of the call).

**参数**

- **o** — element to be removed from this queue, if present

**返回**

- `true` if this queue changed as a result of the call

**异常**

- **ClassCastException** — if the class of the specified element is incompatible with this queue (optional)
- **NullPointerException** — if the specified element is null (optional)
