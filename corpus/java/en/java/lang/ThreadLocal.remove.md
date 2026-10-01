---
id: "java-en-function-threadlocal-remove"
language: "java"
lang: "en"
category: "function"
name: "ThreadLocal.remove"
signature: "public void remove()"
title: "ThreadLocal.remove"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadLocal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadLocal.remove

```java
public void remove()
```

Removes the current thread's value for this thread-local
 variable.  If this thread-local variable is subsequently
 `get read` by the current thread, its value will be
 reinitialized by invoking its `initialValue` method,
 unless its value is `set set` by the current thread
 in the interim.  This may result in multiple invocations of the
 `initialValue` method in the current thread.

> *Since 1.5*
