---
id: "java-en-function-monitorinfo-getlockedstackframe"
language: "java"
lang: "en"
category: "function"
name: "MonitorInfo.getLockedStackFrame"
signature: "public StackTraceElement getLockedStackFrame()"
title: "MonitorInfo.getLockedStackFrame"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MonitorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MonitorInfo.getLockedStackFrame

```java
public StackTraceElement getLockedStackFrame()
```

Returns the stack frame that locked the object monitor.

**返回**

- `StackTraceElement` that locked the object monitor, or `null` if not available.
