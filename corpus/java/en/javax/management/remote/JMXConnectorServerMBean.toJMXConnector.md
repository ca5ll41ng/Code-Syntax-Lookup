---
id: "java-en-function-jmxconnectorservermbean-tojmxconnector"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerMBean.toJMXConnector"
signature: "public JMXConnector toJMXConnector(Map<String,?> env) throws IOException"
title: "JMXConnectorServerMBean.toJMXConnector"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerMBean.toJMXConnector

```java
public JMXConnector toJMXConnector(Map<String,?> env) throws IOException
```

Returns a client stub for this connector server.  A client
 stub is a serializable object whose `connect(Map) connect` method can be used to make
 one new connection to this connector server.

 

A given connector need not support the generation of client
 stubs.  The RMI Connector does so.

**参数**

- **env** — client connection parameters of the same sort that can be provided to `connect(Map) JMXConnector.connect`.  Can be null, which is equivalent to an empty map.

**返回**

- a client stub that can be used to make a new connection to this connector server.

**异常**

- **UnsupportedOperationException** — if this connector server does not support the generation of client stubs.
- **IllegalStateException** — if the JMXConnectorServer is not started (see `isActive`).
- **IOException** — if a communications problem means that a stub cannot be created.
