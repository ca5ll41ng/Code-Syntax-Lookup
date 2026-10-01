---
id: "java-en-function-jmxconnector-getmbeanserverconnection"
language: "java"
lang: "en"
category: "function"
name: "JMXConnector.getMBeanServerConnection"
signature: "public MBeanServerConnection getMBeanServerConnection() throws IOException"
title: "JMXConnector.getMBeanServerConnection"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnector.getMBeanServerConnection

```java
public MBeanServerConnection getMBeanServerConnection() throws IOException
```

Returns an MBeanServerConnection object
 representing a remote MBean server.  For a given
 JMXConnector, two successful calls to this method
 will usually return the same MBeanServerConnection
 object, though this is not required.

 

For each method in the returned
 MBeanServerConnection, calling the method causes
 the corresponding method to be called in the remote MBean
 server.  The value returned by the MBean server method is the
 value returned to the client.  If the MBean server method
 produces an Exception, the same
 Exception is seen by the client.  If the MBean
 server method, or the attempt to call it, produces an
 Error, the Error is wrapped in a
 `JMXServerErrorException`, which is seen by the
 client.

**返回**

- an object that implements the MBeanServerConnection interface by forwarding its methods to the remote MBean server.

**异常**

- **IOException** — if a valid MBeanServerConnection cannot be created, for instance because the connection to the remote MBean server has not yet been established (with the `connect(Map) connect` method), or it has been closed, or it has broken.
