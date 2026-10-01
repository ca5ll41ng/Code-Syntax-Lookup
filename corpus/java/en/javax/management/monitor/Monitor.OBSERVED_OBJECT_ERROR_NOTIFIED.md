---
id: "java-en-function-monitor-observed_object_error_notified"
language: "java"
lang: "en"
category: "function"
name: "Monitor.OBSERVED_OBJECT_ERROR_NOTIFIED"
signature: "protected static final int OBSERVED_OBJECT_ERROR_NOTIFIED = 1"
title: "Monitor.OBSERVED_OBJECT_ERROR_NOTIFIED"
directive: "field"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Monitor.OBSERVED_OBJECT_ERROR_NOTIFIED

```java
protected static final int OBSERVED_OBJECT_ERROR_NOTIFIED = 1
```

Flag denoting that a notification has occurred after changing
 the observed object.  This flag is used to check that the new
 observed object is registered in the MBean server at the time
 of the first notification.
