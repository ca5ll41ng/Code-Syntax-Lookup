---
id: "java-en-function-jmxconnectorserver-preregister"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServer.preRegister"
signature: "public synchronized ObjectName preRegister(MBeanServer mbs, ObjectName name)"
title: "JMXConnectorServer.preRegister"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServer.preRegister

```java
public synchronized ObjectName preRegister(MBeanServer mbs, ObjectName name)
```

Called by an MBean server when this connector server is
 registered in that MBean server.  This connector server becomes
 attached to the MBean server and its `getMBeanServer`
 method will return mbs.

 

If this connector server is already attached to an MBean
 server, this method has no effect.  The MBean server it is
 attached to is not necessarily the one it is being registered
 in.

**参数**

- **mbs** — the MBean server in which this connection server is being registered.
- **name** — The object name of the MBean.

**返回**

- The name under which the MBean is to be registered.

**异常**

- **NullPointerException** — if mbs or name is null.
