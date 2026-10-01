---
id: "java-en-function-jmxconnectionnotification-jmxconnectionnotification"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectionNotification.JMXConnectionNotification"
signature: "public JMXConnectionNotification(String type, Object source, String connectionId, long sequenceNumber, String message, Object userData)"
title: "JMXConnectionNotification.JMXConnectionNotification"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectionNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectionNotification.JMXConnectionNotification

```java
public JMXConnectionNotification(String type, Object source, String connectionId, long sequenceNumber, String message, Object userData)
```

Constructs a new connection notification.  The `getSource() source` of the notification depends on whether it
 is being sent by a connector server or a connector client:

 

 
- For a connector server, if it is registered in an MBean
 server, the source is the `ObjectName` under which it is
 registered.  Otherwise, it is a reference to the connector
 server object itself, an instance of a subclass of `JMXConnectorServer`.

 
- For a connector client, the source is a reference to the
 connector client object, an instance of a class implementing
 `JMXConnector`.

**参数**

- **type** — the type of the notification.  This is usually one of the constants `OPENED`, `CLOSED`, `FAILED`, `NOTIFS_LOST`.  It is not an error for it to be a different string.
- **source** — the connector server or client emitting the notification.
- **connectionId** — the ID of the connection within its connector server.
- **sequenceNumber** — a non-negative integer.  It is expected but not required that this number will be greater than any previous sequenceNumber in a notification from this source.
- **message** — an unspecified text message, typically containing a human-readable description of the event.  Can be null.
- **userData** — an object whose type and meaning is defined by the connector server.  Can be null.

**异常**

- **NullPointerException** — if type, source, or connectionId is null.
- **IllegalArgumentException** — if sequenceNumber is negative.
