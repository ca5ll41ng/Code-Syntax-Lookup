---
id: "java-en-function-threadmxbean-gettotalstartedthreadcount"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.getTotalStartedThreadCount"
signature: "public long getTotalStartedThreadCount()"
title: "ThreadMXBean.getTotalStartedThreadCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.getTotalStartedThreadCount

```java
public long getTotalStartedThreadCount()
```

Returns the total number of platform threads created and also started
 since the Java virtual machine started.
 The count does not include virtual threads.

**返回**

- the total number of platform threads started.
