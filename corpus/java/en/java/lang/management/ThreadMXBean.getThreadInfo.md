---
id: "java-en-function-threadmxbean-getthreadinfo"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.getThreadInfo"
signature: "public ThreadInfo getThreadInfo(long id)"
title: "ThreadMXBean.getThreadInfo"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.getThreadInfo

```java
public ThreadInfo getThreadInfo(long id)
```

Returns the thread info for a thread of the specified
 `id` with no stack trace.
 This method is equivalent to calling:
 
   `getThreadInfo(long, int) getThreadInfo(id, 0);`
 

 

 This method returns a `ThreadInfo` object representing
 the thread information for the thread of the specified ID.
 The stack trace, locked monitors, and locked synchronizers
 in the returned `ThreadInfo` object will
 be empty.

 If a thread of the given ID is a virtual thread, is not alive, or does
 not exist, then this method will return `null`. A thread is
 alive if it has been started and has not yet terminated.

 

 **MBeanServer access**:

 The mapped type of `ThreadInfo` is
 `CompositeData` with attributes as specified in the
 `from ThreadInfo.from` method.

**参数**

- **id** — the thread ID of the thread. Must be positive.

**返回**

- a `ThreadInfo` object for the thread of the given ID with no stack trace, no locked monitor and no synchronizer info; `null` if the thread of the given ID is a virtual thread, is not alive, or it does not exist.

**异常**

- **IllegalArgumentException** — if `id <= 0`.
