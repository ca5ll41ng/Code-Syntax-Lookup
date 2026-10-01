---
id: "java-en-function-numericaltype-getobservedobject"
language: "java"
lang: "en"
category: "function"
name: "NumericalType.getObservedObject"
signature: "public synchronized ObjectName getObservedObject()"
title: "NumericalType.getObservedObject"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericalType.getObservedObject

```java
public synchronized ObjectName getObservedObject()
```

Returns the object name of the first object in the set of observed
 MBeans, or null if there is no such object.

**返回**

- The object being observed.

**参见**

- #setObservedObject(ObjectName)

> **⚠ Deprecated** — As of JMX 1.2, replaced by `getObservedObjects`
