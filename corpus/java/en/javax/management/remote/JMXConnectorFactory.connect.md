---
id: "java-en-function-jmxconnectorfactory-connect"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorFactory.connect"
signature: "public static JMXConnector connect(JMXServiceURL serviceURL) throws IOException"
title: "JMXConnectorFactory.connect"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorFactory.connect

```java
public static JMXConnector connect(JMXServiceURL serviceURL) throws IOException
```

Creates a connection to the connector server at the given
 address.

 

This method is equivalent to `connect`.

**参数**

- **serviceURL** — the address of the connector server to connect to.

**返回**

- a JMXConnector whose `connect connect` method has been called.

**异常**

- **NullPointerException** — if serviceURL is null.
- **IOException** — if the connector client or the connection cannot be made because of a communication problem.
- **SecurityException** — if the connection cannot be made for security reasons.
