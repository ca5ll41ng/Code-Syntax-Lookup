---
id: "java-en-function-jmxconnectorserver-connectionopened"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServer.connectionOpened"
signature: "protected void connectionOpened(String connectionId, String message, Object userData)"
title: "JMXConnectorServer.connectionOpened"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServer.connectionOpened

```java
protected void connectionOpened(String connectionId, String message, Object userData)
```

Called by a subclass when a new client connection is opened.
 Adds connectionId to the list returned by `getConnectionIds`, then emits a `JMXConnectionNotification` with type `OPENED`.

**参数**

- **connectionId** — the ID of the new connection.  This must be different from the ID of any connection previously opened by this connector server.
- **message** — the message for the emitted `JMXConnectionNotification`.  Can be null.  See `getMessage`.
- **userData** — the userData for the emitted `JMXConnectionNotification`.  Can be null.  See `getUserData`.

**异常**

- **NullPointerException** — if connectionId is null.
