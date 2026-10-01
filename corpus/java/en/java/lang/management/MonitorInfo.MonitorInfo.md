---
id: "java-en-function-monitorinfo-monitorinfo"
language: "java"
lang: "en"
category: "function"
name: "MonitorInfo.MonitorInfo"
signature: "public MonitorInfo(String className, int identityHashCode, int stackDepth, StackTraceElement stackFrame)"
title: "MonitorInfo.MonitorInfo"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MonitorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MonitorInfo.MonitorInfo

```java
public MonitorInfo(String className, int identityHashCode, int stackDepth, StackTraceElement stackFrame)
```

Construct a `MonitorInfo` object.

**参数**

- **className** — the fully qualified name of the class of the lock object.
- **identityHashCode** — the `identityHashCode identity hash code` of the lock object.
- **stackDepth** — the depth in the stack trace where the object monitor was locked.
- **stackFrame** — the stack frame that locked the object monitor.

**异常**

- **IllegalArgumentException** — if `stackDepth` &ge; 0 but `stackFrame` is `null`, or `stackDepth` &lt; 0 but `stackFrame` is not `null`.
