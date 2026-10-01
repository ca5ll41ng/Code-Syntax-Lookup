---
id: "java-en-function-jmxconnectorserver-connectionfailed"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServer.connectionFailed"
signature: "protected void connectionFailed(String connectionId, String message, Object userData)"
title: "JMXConnectorServer.connectionFailed"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServer.connectionFailed

```java
protected void connectionFailed(String connectionId, String message, Object userData)
```

Called by a subclass when a client connection fails.
 Removes connectionId from the list returned by
 `getConnectionIds`, then emits a `JMXConnectionNotification` with type `FAILED`.

**参数**

- **connectionId** — the ID of the failed connection.
- **message** — the message for the emitted `JMXConnectionNotification`.  Can be null.  See `getMessage`.
- **userData** — the userData for the emitted `JMXConnectionNotification`.  Can be null.  See `getUserData`.

**异常**

- **NullPointerException** — if connectionId is null.
