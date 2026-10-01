---
id: "java-en-function-threadmxbean-getpeakthreadcount"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.getPeakThreadCount"
signature: "public int getPeakThreadCount()"
title: "ThreadMXBean.getPeakThreadCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.getPeakThreadCount

```java
public int getPeakThreadCount()
```

Returns the peak live platform thread count since the Java virtual
 machine started or peak was reset.
 The count does not include virtual threads.

**返回**

- the peak live platform thread count.
