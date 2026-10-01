---
id: "java-en-function-memorypoolmxbean-getcollectionusagethreshold"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.getCollectionUsageThreshold"
signature: "public long getCollectionUsageThreshold()"
title: "MemoryPoolMXBean.getCollectionUsageThreshold"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.getCollectionUsageThreshold

```java
public long getCollectionUsageThreshold()
```

Returns the collection usage threshold value of this memory pool
 in bytes.  The default value is zero. The collection usage
 threshold can be changed via the
 `setCollectionUsageThreshold setCollectionUsageThreshold` method.

**返回**

- the collection usage threshold of this memory pool in bytes.

**异常**

- **UnsupportedOperationException** — if this memory pool does not support a collection usage threshold.

**参见**

- #isCollectionUsageThresholdSupported
