---
id: "java-en-function-threadmxbean-getthreadcount"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.getThreadCount"
signature: "public int getThreadCount()"
title: "ThreadMXBean.getThreadCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.getThreadCount

```java
public int getThreadCount()
```

Returns the current number of live platform threads including both
 daemon and non-daemon threads.
 The count does not include virtual threads.

**返回**

- the current number of live platform threads.
