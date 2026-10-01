---
id: "java-en-function-garbagecollectormxbean-getcollectiontime"
language: "java"
lang: "en"
category: "function"
name: "GarbageCollectorMXBean.getCollectionTime"
signature: "public long getCollectionTime()"
title: "GarbageCollectorMXBean.getCollectionTime"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/GarbageCollectorMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GarbageCollectorMXBean.getCollectionTime

```java
public long getCollectionTime()
```

Returns the approximate accumulated collection elapsed time
 in milliseconds.  This method returns `-1` if the collection
 elapsed time is undefined for this collector.
 

 The Java virtual machine implementation may use a high resolution
 timer to measure the elapsed time.  This method may return the
 same value even if the collection count has been incremented
 if the collection elapsed time is very short.

**返回**

- the approximate accumulated collection elapsed time in milliseconds.
