---
id: "java-en-function-mbeanservernotificationfilter-getdisabledobjectnames"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerNotificationFilter.getDisabledObjectNames"
signature: "public synchronized Vector<ObjectName> getDisabledObjectNames()"
title: "MBeanServerNotificationFilter.getDisabledObjectNames"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/MBeanServerNotificationFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerNotificationFilter.getDisabledObjectNames

```java
public synchronized Vector<ObjectName> getDisabledObjectNames()
```

Gets all the ObjectNames disabled.

**返回**

- Vector of ObjectNames:   - null means all ObjectNames are implicitly deselected, except the ObjectNames explicitly selected   - empty means all ObjectNames are selected, i.e. no ObjectName deselected.
