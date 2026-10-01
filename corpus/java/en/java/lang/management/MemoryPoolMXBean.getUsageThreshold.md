---
id: "java-en-function-memorypoolmxbean-getusagethreshold"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.getUsageThreshold"
signature: "public long getUsageThreshold()"
title: "MemoryPoolMXBean.getUsageThreshold"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.getUsageThreshold

```java
public long getUsageThreshold()
```

Returns the usage threshold value of this memory pool in bytes.
 Each memory pool has a platform-dependent default threshold value.
 The current usage threshold can be changed via the
 `setUsageThreshold setUsageThreshold` method.

**返回**

- the usage threshold value of this memory pool in bytes.

**异常**

- **UnsupportedOperationException** — if this memory pool does not support a usage threshold.

**参见**

- #isUsageThresholdSupported
