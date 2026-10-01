---
id: "java-en-function-operatingsystemmxbean-getsystemloadaverage"
language: "java"
lang: "en"
category: "function"
name: "OperatingSystemMXBean.getSystemLoadAverage"
signature: "public double getSystemLoadAverage()"
title: "OperatingSystemMXBean.getSystemLoadAverage"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/OperatingSystemMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OperatingSystemMXBean.getSystemLoadAverage

```java
public double getSystemLoadAverage()
```

Returns the system load average for the last minute.
 The system load average is the sum of the number of runnable entities
 queued to the `getAvailableProcessors available processors`
 and the number of runnable entities running on the available processors
 averaged over a period of time.
 The way in which the load average is calculated is operating system
 specific but is typically a damped time-dependent average.
 

 If the load average is not available, a negative value is returned.
 

 This method is designed to provide a hint about the system load
 and may be queried frequently.
 The load average may be unavailable on some platform where it is
 expensive to implement this method.

**返回**

- the system load average; or a negative value if not available.

> *Since 1.6*
