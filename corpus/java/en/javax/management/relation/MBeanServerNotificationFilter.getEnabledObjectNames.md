---
id: "java-en-function-mbeanservernotificationfilter-getenabledobjectnames"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerNotificationFilter.getEnabledObjectNames"
signature: "public synchronized Vector<ObjectName> getEnabledObjectNames()"
title: "MBeanServerNotificationFilter.getEnabledObjectNames"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/MBeanServerNotificationFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerNotificationFilter.getEnabledObjectNames

```java
public synchronized Vector<ObjectName> getEnabledObjectNames()
```

Gets all the ObjectNames enabled.

**返回**

- Vector of ObjectNames:   - null means all ObjectNames are implicitly selected, except the ObjectNames explicitly deselected   - empty means all ObjectNames are deselected, i.e. no ObjectName selected.
