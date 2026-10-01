---
id: "java-en-function-monitor-observed_attribute_type_error_notified"
language: "java"
lang: "en"
category: "function"
name: "Monitor.OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED"
signature: "protected static final int OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED = 4"
title: "Monitor.OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED"
directive: "field"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Monitor.OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED

```java
protected static final int OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED = 4
```

Flag denoting that a notification has occurred after changing
 the observed object or the observed attribute.  This flag is
 used to check that the observed attribute type is correct
 (depending on the monitor in use) at the time of the first
 notification.
