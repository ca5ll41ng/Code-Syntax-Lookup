---
id: "java-en-function-jmxconnectorserverfactory-newjmxconnectorserver"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerFactory.newJMXConnectorServer"
signature: "public static JMXConnectorServer newJMXConnectorServer(JMXServiceURL serviceURL, Map<String,?> environment, MBeanServer mbeanServer) throws IOException"
title: "JMXConnectorServerFactory.newJMXConnectorServer"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerFactory.newJMXConnectorServer

```java
public static JMXConnectorServer newJMXConnectorServer(JMXServiceURL serviceURL, Map<String,?> environment, MBeanServer mbeanServer) throws IOException
```

Creates a connector server at the given address.  The
 resultant server is not started until its `start() start` method is called.

**参数**

- **serviceURL** — the address of the new connector server.  The actual address of the new connector server, as returned by its `getAddress() getAddress` method, will not necessarily be exactly the same.  For example, it might include a port number if the original address did not.
- **environment** — a set of attributes to control the new connector server's behavior.  This parameter can be null. Keys in this map must be Strings.  The appropriate type of each associated value depends on the attribute.  The contents of environment are not changed by this call.
- **mbeanServer** — the MBean server that this connector server is attached to.  Null if this connector server will be attached to an MBean server by being registered in it.

**返回**

- a JMXConnectorServer representing the new connector server.  Each successful call to this method produces a different object.

**异常**

- **NullPointerException** — if serviceURL is null.
- **IOException** — if the connector server cannot be made because of a communication problem.
- **MalformedURLException** — if there is no provider for the protocol in serviceURL.
- **JMXProviderException** — if there is a provider for the protocol in serviceURL but it cannot be used for some reason.
