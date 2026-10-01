---
id: "java-en-function-memorypoolmxbean-iscollectionusagethresholdexceeded"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.isCollectionUsageThresholdExceeded"
signature: "public boolean isCollectionUsageThresholdExceeded()"
title: "MemoryPoolMXBean.isCollectionUsageThresholdExceeded"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.isCollectionUsageThresholdExceeded

```java
public boolean isCollectionUsageThresholdExceeded()
```

Tests if the memory usage of this memory pool after
 the most recent collection on which the Java virtual
 machine has expended effort has reached or
 exceeded its collection usage threshold.
 This method does not request the Java virtual
 machine to perform any garbage collection other than its normal
 automatic memory management.

**返回**

- `true` if the memory usage of this memory pool reaches or exceeds the collection usage threshold value in the most recent collection; `false` otherwise.

**异常**

- **UnsupportedOperationException** — if this memory pool does not support a usage threshold.
