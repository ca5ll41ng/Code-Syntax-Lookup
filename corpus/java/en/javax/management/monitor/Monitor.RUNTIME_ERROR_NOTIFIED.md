---
id: "java-en-function-monitor-runtime_error_notified"
language: "java"
lang: "en"
category: "function"
name: "Monitor.RUNTIME_ERROR_NOTIFIED"
signature: "protected static final int RUNTIME_ERROR_NOTIFIED = 8"
title: "Monitor.RUNTIME_ERROR_NOTIFIED"
directive: "field"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Monitor.RUNTIME_ERROR_NOTIFIED

```java
protected static final int RUNTIME_ERROR_NOTIFIED = 8
```

Flag denoting that a notification has occurred after changing
 the observed object or the observed attribute.  This flag is
 used to notify any exception (except the cases described above)
 when trying to get the value of the observed attribute at the
 time of the first notification.
