---
id: "java-en-function-numericaltype-setobservedobject"
language: "java"
lang: "en"
category: "function"
name: "NumericalType.setObservedObject"
signature: "public synchronized void setObservedObject(ObjectName object) throws IllegalArgumentException"
title: "NumericalType.setObservedObject"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericalType.setObservedObject

```java
public synchronized void setObservedObject(ObjectName object) throws IllegalArgumentException
```

Removes all objects from the set of observed objects, and then adds the
 specified object.

**参数**

- **object** — The object to observe.

**异常**

- **IllegalArgumentException** — The specified object is null.

**参见**

- #getObservedObject()

> **⚠ Deprecated** — As of JMX 1.2, replaced by `addObservedObject`
