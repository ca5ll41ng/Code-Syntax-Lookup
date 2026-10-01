---
id: "java-en-function-jmxconnectorserver-prederegister"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServer.preDeregister"
signature: "public synchronized void preDeregister() throws Exception"
title: "JMXConnectorServer.preDeregister"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServer.preDeregister

```java
public synchronized void preDeregister() throws Exception
```

Called by an MBean server when this connector server is
 unregistered from that MBean server.  If this connector server
 was attached to that MBean server by being registered in it,
 and if the connector server is still active,
 then unregistering it will call the `stop stop` method.
 If the stop method throws an exception, the
 unregistration attempt will fail.  It is recommended to call
 the stop method explicitly before unregistering
 the MBean.

**异常**

- **IOException** — if thrown by the `stop stop` method.
