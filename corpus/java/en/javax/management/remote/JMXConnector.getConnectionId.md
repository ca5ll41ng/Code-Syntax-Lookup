---
id: "java-en-function-jmxconnector-getconnectionid"
language: "java"
lang: "en"
category: "function"
name: "JMXConnector.getConnectionId"
signature: "public String getConnectionId() throws IOException"
title: "JMXConnector.getConnectionId"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnector.getConnectionId

```java
public String getConnectionId() throws IOException
```

Gets this connection's ID from the connector server.  For a
 given connector server, every connection will have a unique id
 which does not change during the lifetime of the
 connection.

**返回**

- the unique ID of this connection.  This is the same as the ID that the connector server includes in its `JMXConnectionNotification`s.  The `javax.management.remote package description` describes the conventions for connection IDs.

**异常**

- **IOException** — if the connection ID cannot be obtained, for instance because the connection is closed or broken.
