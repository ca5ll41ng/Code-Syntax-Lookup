---
id: "java-en-function-jmxconnectorserver-connectionclosed"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServer.connectionClosed"
signature: "protected void connectionClosed(String connectionId, String message, Object userData)"
title: "JMXConnectorServer.connectionClosed"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServer.connectionClosed

```java
protected void connectionClosed(String connectionId, String message, Object userData)
```

Called by a subclass when a client connection is closed
 normally.  Removes connectionId from the list returned
 by `getConnectionIds`, then emits a `JMXConnectionNotification` with type `CLOSED`.

**参数**

- **connectionId** — the ID of the closed connection.
- **message** — the message for the emitted `JMXConnectionNotification`.  Can be null.  See `getMessage`.
- **userData** — the userData for the emitted `JMXConnectionNotification`.  Can be null.  See `getUserData`.

**异常**

- **NullPointerException** — if connectionId is null.
