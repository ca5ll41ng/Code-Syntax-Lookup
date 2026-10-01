---
id: "java-en-function-mbeanserverfactory-findmbeanserver"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerFactory.findMBeanServer"
signature: "public static synchronized ArrayList<MBeanServer> findMBeanServer(String agentId)"
title: "MBeanServerFactory.findMBeanServer"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerFactory.findMBeanServer

```java
public static synchronized ArrayList<MBeanServer> findMBeanServer(String agentId)
```

Return a list of registered MBeanServer objects.  A
 registered MBeanServer object is one that was created by one of
 the createMBeanServer methods and not subsequently
 released with releaseMBeanServer.

**参数**

- **agentId** — The agent identifier of the MBeanServer to retrieve.  If this parameter is null, all registered MBeanServers in this JVM are returned.  Otherwise, only MBeanServers whose id is equal to agentId are returned.  The id of an MBeanServer is the MBeanServerId attribute of its delegate MBean.

**返回**

- A list of MBeanServer objects.
