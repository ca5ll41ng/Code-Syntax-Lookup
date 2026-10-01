---
id: "java-en-function-memorypoolmxbean-setcollectionusagethreshold"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.setCollectionUsageThreshold"
signature: "public void setCollectionUsageThreshold(long threshold)"
title: "MemoryPoolMXBean.setCollectionUsageThreshold"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.setCollectionUsageThreshold

```java
public void setCollectionUsageThreshold(long threshold)
```

Sets the collection usage threshold of this memory pool to
 the given `threshold` value.
 When this threshold is set to positive, the Java virtual machine
 will check the memory usage at its best appropriate time after it has
 expended effort in recycling unused objects in this memory pool.
 

 The collection usage threshold crossing checking is enabled
 in this memory pool if the threshold is set to a positive value.
 The collection usage threshold crossing checking is disabled
 if it is set to zero.

**参数**

- **threshold** — the new collection usage threshold value in bytes. Must be non-negative.

**异常**

- **IllegalArgumentException** — if `threshold` is negative or greater than the maximum amount of memory for this memory pool if defined.
- **UnsupportedOperationException** — if this memory pool does not support a collection usage threshold.

**参见**

- #isCollectionUsageThresholdSupported
- Collection usage threshold
