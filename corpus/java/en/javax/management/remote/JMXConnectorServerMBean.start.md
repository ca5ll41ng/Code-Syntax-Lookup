---
id: "java-en-function-jmxconnectorservermbean-start"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerMBean.start"
signature: "public void start() throws IOException"
title: "JMXConnectorServerMBean.start"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerMBean.start

```java
public void start() throws IOException
```

Activates the connector server, that is, starts listening for
 client connections.  Calling this method when the connector
 server is already active has no effect.  Calling this method
 when the connector server has been stopped will generate an
 `IOException`.

**异常**

- **IOException** — if it is not possible to start listening or if the connector server has been stopped.
- **IllegalStateException** — if the connector server has not been attached to an MBean server.
