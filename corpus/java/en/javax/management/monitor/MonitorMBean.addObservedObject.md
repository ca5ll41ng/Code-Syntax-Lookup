---
id: "java-en-function-monitormbean-addobservedobject"
language: "java"
lang: "en"
category: "function"
name: "MonitorMBean.addObservedObject"
signature: "public void addObservedObject(ObjectName object) throws java.lang.IllegalArgumentException"
title: "MonitorMBean.addObservedObject"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/MonitorMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MonitorMBean.addObservedObject

```java
public void addObservedObject(ObjectName object) throws java.lang.IllegalArgumentException
```

Adds the specified object in the set of observed MBeans.

**参数**

- **object** — The object to observe.

**异常**

- **java.lang.IllegalArgumentException** — the specified object is null.
