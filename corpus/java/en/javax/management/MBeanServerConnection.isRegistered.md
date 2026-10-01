---
id: "java-en-function-mbeanserverconnection-isregistered"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.isRegistered"
signature: "public boolean isRegistered(ObjectName name) throws IOException"
title: "MBeanServerConnection.isRegistered"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.isRegistered

```java
public boolean isRegistered(ObjectName name) throws IOException
```

Checks whether an MBean, identified by its object name, is
 already registered with the MBean server.

**参数**

- **name** — The object name of the MBean to be checked.

**返回**

- True if the MBean is already registered in the MBean server, false otherwise.

**异常**

- **RuntimeOperationsException** — Wraps a java.lang.IllegalArgumentException: The object name in parameter is null.
- **IOException** — A communication problem occurred when talking to the MBean server.
