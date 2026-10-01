---
id: "java-en-function-referencequeue-remove"
language: "java"
lang: "en"
category: "function"
name: "ReferenceQueue.remove"
signature: "public Reference<? extends T> remove(long timeout) throws InterruptedException"
title: "ReferenceQueue.remove"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/ReferenceQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReferenceQueue.remove

```java
public Reference<? extends T> remove(long timeout) throws InterruptedException
```

Removes the next reference object in this queue, blocking until either
 one becomes available or the given timeout period expires.

 

 This method does not offer real-time guarantees: It schedules the
 timeout as if by invoking the `wait` method.

**参数**

- **timeout** — If positive, block for up to `timeout` milliseconds while waiting for a reference to be added to this queue.  If zero, block indefinitely.

**返回**

- A reference object, if one was available within the specified timeout period, otherwise `null`

**异常**

- **IllegalArgumentException** — If the value of the timeout argument is negative
- **InterruptedException** — If the timeout wait is interrupted

**参见**

- java.lang.ref.Reference#enqueue()
