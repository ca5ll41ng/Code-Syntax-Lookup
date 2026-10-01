---
id: "java-en-function-jmxconnectorserverprovider-newjmxconnectorserver"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerProvider.newJMXConnectorServer"
signature: "public JMXConnectorServer newJMXConnectorServer(JMXServiceURL serviceURL, Map<String,?> environment, MBeanServer mbeanServer) throws IOException"
title: "JMXConnectorServerProvider.newJMXConnectorServer"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerProvider.newJMXConnectorServer

```java
public JMXConnectorServer newJMXConnectorServer(JMXServiceURL serviceURL, Map<String,?> environment, MBeanServer mbeanServer) throws IOException
```

Creates a new connector server at the given address.  Each
 successful call to this method produces a different
 JMXConnectorServer object.

**参数**

- **serviceURL** — the address of the new connector server.  The actual address of the new connector server, as returned by its `getAddress() getAddress` method, will not necessarily be exactly the same.  For example, it might include a port number if the original address did not.
- **environment** — a read-only Map containing named attributes to control the new connector server's behavior.  Keys in this map must be Strings.  The appropriate type of each associated value depends on the attribute.
- **mbeanServer** — the MBean server that this connector server is attached to.  Null if this connector server will be attached to an MBean server by being registered in it.

**返回**

- a JMXConnectorServer representing the new connector server.  Each successful call to this method produces a different object.

**异常**

- **NullPointerException** — if serviceURL or environment is null.
- **IOException** — It is recommended for a provider implementation to throw `MalformedURLException` if the protocol in the `serviceURL` is not recognized by this provider, `JMXProviderException` if this is a provider for the protocol in `serviceURL` but it cannot be used for some reason or any other `IOException` if the connector server cannot be created.
