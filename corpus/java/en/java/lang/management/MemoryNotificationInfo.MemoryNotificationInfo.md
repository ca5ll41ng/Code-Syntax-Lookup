---
id: "java-en-function-memorynotificationinfo-memorynotificationinfo"
language: "java"
lang: "en"
category: "function"
name: "MemoryNotificationInfo.MemoryNotificationInfo"
signature: "public MemoryNotificationInfo(String poolName, MemoryUsage usage, long count)"
title: "MemoryNotificationInfo.MemoryNotificationInfo"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryNotificationInfo.MemoryNotificationInfo

```java
public MemoryNotificationInfo(String poolName, MemoryUsage usage, long count)
```

Constructs a `MemoryNotificationInfo` object.

**参数**

- **poolName** — The name of the memory pool which triggers this notification.
- **usage** — Memory usage of the memory pool.
- **count** — The threshold crossing count.
