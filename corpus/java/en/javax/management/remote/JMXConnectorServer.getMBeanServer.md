---
id: "java-en-function-jmxconnectorserver-getmbeanserver"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServer.getMBeanServer"
signature: "public synchronized MBeanServer getMBeanServer()"
title: "JMXConnectorServer.getMBeanServer"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServer.getMBeanServer

```java
public synchronized MBeanServer getMBeanServer()
```

Returns the MBean server that this connector server is
 attached to.

**返回**

- the MBean server that this connector server is attached to, or null if it is not yet attached to an MBean server.
