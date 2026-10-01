---
id: "java-en-function-numericaltype-preregister"
language: "java"
lang: "en"
category: "function"
name: "NumericalType.preRegister"
signature: "public ObjectName preRegister(MBeanServer server, ObjectName name) throws Exception"
title: "NumericalType.preRegister"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericalType.preRegister

```java
public ObjectName preRegister(MBeanServer server, ObjectName name) throws Exception
```

Allows the monitor MBean to perform any operations it needs
 before being registered in the MBean server.
 

 Initializes the reference to the MBean server.

**参数**

- **server** — The MBean server in which the monitor MBean will be registered.
- **name** — The object name of the monitor MBean.

**返回**

- The name of the monitor MBean registered.

**异常**

- **Exception** — if something goes wrong
