---
id: "java-en-function-threadmxbean-getallthreadids"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.getAllThreadIds"
signature: "public long[] getAllThreadIds()"
title: "ThreadMXBean.getAllThreadIds"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.getAllThreadIds

```java
public long[] getAllThreadIds()
```

Returns the threadIDs of all live platform threads.
 The thread IDs of virtual threads are not included.
 Some threads included in the returned array
 may have been terminated when this method returns.

**返回**

- an array of `long`, each is a thread ID.
