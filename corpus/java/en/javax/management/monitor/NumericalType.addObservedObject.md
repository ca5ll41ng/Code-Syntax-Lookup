---
id: "java-en-function-numericaltype-addobservedobject"
language: "java"
lang: "en"
category: "function"
name: "NumericalType.addObservedObject"
signature: "public synchronized void addObservedObject(ObjectName object) throws IllegalArgumentException"
title: "NumericalType.addObservedObject"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericalType.addObservedObject

```java
public synchronized void addObservedObject(ObjectName object) throws IllegalArgumentException
```

Adds the specified object in the set of observed MBeans, if this object
 is not already present.

**参数**

- **object** — The object to observe.

**异常**

- **IllegalArgumentException** — The specified object is null.
