---
id: "java-en-function-thread-setpriority"
language: "java"
lang: "en"
category: "function"
name: "Thread.setPriority"
signature: "public final void setPriority(int newPriority)"
title: "Thread.setPriority"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.setPriority

```java
public final void setPriority(int newPriority)
```

Changes the priority of this thread.

 For platform threads, the priority is set to the smaller of the specified
 `newPriority` and the maximum permitted priority of the thread's
 `ThreadGroup thread group`.

 The priority of a virtual thread is always `NORM_PRIORITY`
 and `newPriority` is ignored.

**参数**

- **newPriority** — the new thread priority

**异常**

- **IllegalArgumentException** — if the priority is not in the range `MIN_PRIORITY` to `MAX_PRIORITY`.

**参见**

- #setPriority(int)
- ThreadGroup#getMaxPriority()
