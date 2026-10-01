---
id: "java-en-function-jmxconnector-close"
language: "java"
lang: "en"
category: "function"
name: "JMXConnector.close"
signature: "public void close() throws IOException"
title: "JMXConnector.close"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnector.close

```java
public void close() throws IOException
```

Closes the client connection to its server.  Any ongoing or new
 request using the MBeanServerConnection returned by `getMBeanServerConnection` will get an
 IOException.

 

If close has already been called successfully
 on this object, calling it again has no effect.  If
 close has never been called, or if it was called
 but produced an exception, an attempt will be made to close the
 connection.  This attempt can succeed, in which case
 close will return normally, or it can generate an
 exception.

 

Closing a connection is a potentially slow operation.  For
 example, if the server has crashed, the close operation might
 have to wait for a network protocol timeout.  Callers that do
 not want to block in a close operation should do it in a
 separate thread.

**异常**

- **IOException** — if the connection cannot be closed cleanly.  If this exception is thrown, it is not known whether the server end of the connection has been cleanly closed.
