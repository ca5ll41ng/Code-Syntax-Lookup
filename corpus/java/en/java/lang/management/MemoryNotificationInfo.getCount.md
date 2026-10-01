---
id: "java-en-function-memorynotificationinfo-getcount"
language: "java"
lang: "en"
category: "function"
name: "MemoryNotificationInfo.getCount"
signature: "public long getCount()"
title: "MemoryNotificationInfo.getCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryNotificationInfo.getCount

```java
public long getCount()
```

Returns the number of times that the memory usage has crossed
 a threshold when the notification was constructed.
 For usage threshold notifications, this count will be the
 `getUsageThresholdCount threshold
 count`.  For collection threshold notifications,
 this count will be the
 `getCollectionUsageThresholdCount
 collection usage threshold count`.

**返回**

- the number of times that the memory usage has crossed a threshold when the notification was constructed.
