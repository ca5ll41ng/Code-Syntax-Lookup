---
id: "java-en-function-memorypoolmxbean-getcollectionusagethresholdcount"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.getCollectionUsageThresholdCount"
signature: "public long getCollectionUsageThresholdCount()"
title: "MemoryPoolMXBean.getCollectionUsageThresholdCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.getCollectionUsageThresholdCount

```java
public long getCollectionUsageThresholdCount()
```

Returns the number of times that the Java virtual machine
 has detected that the memory usage has reached or
 exceeded the collection usage threshold.

**返回**

- the number of times that the memory usage has reached or exceeded the collection usage threshold.

**异常**

- **UnsupportedOperationException** — if this memory pool does not support a collection usage threshold.

**参见**

- #isCollectionUsageThresholdSupported
