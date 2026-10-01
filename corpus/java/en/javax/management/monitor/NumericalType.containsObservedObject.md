---
id: "java-en-function-numericaltype-containsobservedobject"
language: "java"
lang: "en"
category: "function"
name: "NumericalType.containsObservedObject"
signature: "public synchronized boolean containsObservedObject(ObjectName object)"
title: "NumericalType.containsObservedObject"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericalType.containsObservedObject

```java
public synchronized boolean containsObservedObject(ObjectName object)
```

Tests whether the specified object is in the set of observed MBeans.

**参数**

- **object** — The object to check.

**返回**

- true if the specified object is present, false otherwise.
