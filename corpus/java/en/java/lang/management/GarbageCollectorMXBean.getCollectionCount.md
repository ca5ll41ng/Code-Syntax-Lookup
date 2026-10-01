---
id: "java-en-function-garbagecollectormxbean-getcollectioncount"
language: "java"
lang: "en"
category: "function"
name: "GarbageCollectorMXBean.getCollectionCount"
signature: "public long getCollectionCount()"
title: "GarbageCollectorMXBean.getCollectionCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/GarbageCollectorMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GarbageCollectorMXBean.getCollectionCount

```java
public long getCollectionCount()
```

Returns the total number of collections that have occurred.
 This method returns `-1` if the collection count is undefined for
 this collector.

**返回**

- the total number of collections that have occurred.
