---
id: "java-en-function-java-util-logging-loggingmxbean"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.LoggingMXBean"
title: "LoggingMXBean"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LoggingMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoggingMXBean

The management interface for the logging facility.

 `java.management/java.lang.management.PlatformLoggingMXBean
 java.lang.management.PlatformLoggingMXBean` is the management interface
 for logging facility registered in the `getPlatformMBeanServer()
 platform MBeanServer`.
 It is recommended to use the `PlatformLoggingMXBean` obtained via
 the `getPlatformMXBean(Class)
 ManagementFactory.getPlatformMXBean` method.

**参见**

- java.management/java.lang.management.PlatformLoggingMXBean

> *Since 1.5*

> **⚠ Deprecated** — `LoggingMXBean` is no longer a `java.management/java.lang.management.PlatformManagedObject platform MXBean` and is replaced with `java.management/java.lang.management.PlatformLoggingMXBean`. It will not register in the platform `MBeanServer`. Use `ManagementFactory.getPlatformMXBean(PlatformLoggingMXBean.class)` instead.
