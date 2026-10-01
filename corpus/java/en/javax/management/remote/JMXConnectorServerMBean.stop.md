---
id: "java-en-function-jmxconnectorservermbean-stop"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerMBean.stop"
signature: "public void stop() throws IOException"
title: "JMXConnectorServerMBean.stop"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerMBean.stop

```java
public void stop() throws IOException
```

Deactivates the connector server, that is, stops listening for
 client connections.  Calling this method will also close all
 client connections that were made by this server.  After this
 method returns, whether normally or with an exception, the
 connector server will not create any new client
 connections.

 

Once a connector server has been stopped, it cannot be started
 again.

 

Calling this method when the connector server has already
 been stopped has no effect.  Calling this method when the
 connector server has not yet been started will disable the
 connector server object permanently.

 

If closing a client connection produces an exception, that
 exception is not thrown from this method.  A `JMXConnectionNotification` with type `FAILED` is emitted from this MBean
 with the connection ID of the connection that could not be
 closed.

 

Closing a connector server is a potentially slow operation.
 For example, if a client machine with an open connection has
 crashed, the close operation might have to wait for a network
 protocol timeout.  Callers that do not want to block in a close
 operation should do it in a separate thread.

**异常**

- **IOException** — if the server cannot be closed cleanly. When this exception is thrown, the server has already attempted to close all client connections.  All client connections are closed except possibly those that generated exceptions when the server attempted to close them.
