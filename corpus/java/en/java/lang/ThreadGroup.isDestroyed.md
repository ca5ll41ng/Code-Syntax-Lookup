---
id: "java-en-function-threadgroup-isdestroyed"
language: "java"
lang: "en"
category: "function"
name: "ThreadGroup.isDestroyed"
signature: "public boolean isDestroyed()"
title: "ThreadGroup.isDestroyed"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup.isDestroyed

```java
public boolean isDestroyed()
```

Returns false.

**返回**

- false

> *Since 1.1*

> **⚠ Deprecated** — This method originally indicated if the thread group is destroyed. The ability to destroy a thread group and the concept of a destroyed thread group no longer exists. A thread group is eligible to be GC'ed when there are no live threads in the group and it is otherwise unreachable.
