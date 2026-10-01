---
id: "java-en-function-memorypoolmxbean-setusagethreshold"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.setUsageThreshold"
signature: "public void setUsageThreshold(long threshold)"
title: "MemoryPoolMXBean.setUsageThreshold"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.setUsageThreshold

```java
public void setUsageThreshold(long threshold)
```

Sets the threshold of this memory pool to the given `threshold`
 value if this memory pool supports the usage threshold.
 The usage threshold crossing checking is enabled in this memory pool
 if the threshold is set to a positive value.
 The usage threshold crossing checking is disabled
 if it is set to zero.

**参数**

- **threshold** — the new threshold value in bytes. Must be non-negative.

**异常**

- **IllegalArgumentException** — if `threshold` is negative or greater than the maximum amount of memory for this memory pool if defined.
- **UnsupportedOperationException** — if this memory pool does not support a usage threshold.

**参见**

- #isUsageThresholdSupported
- Usage threshold
