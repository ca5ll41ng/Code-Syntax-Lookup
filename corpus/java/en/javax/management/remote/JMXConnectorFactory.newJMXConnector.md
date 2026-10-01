---
id: "java-en-function-jmxconnectorfactory-newjmxconnector"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorFactory.newJMXConnector"
signature: "public static JMXConnector newJMXConnector(JMXServiceURL serviceURL, Map<String,?> environment) throws IOException"
title: "JMXConnectorFactory.newJMXConnector"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorFactory.newJMXConnector

```java
public static JMXConnector newJMXConnector(JMXServiceURL serviceURL, Map<String,?> environment) throws IOException
```

Creates a connector client for the connector server at the
 given address.  The resultant client is not connected until its
 `connect(Map) connect` method is called.

**参数**

- **serviceURL** — the address of the connector server to connect to.
- **environment** — a set of attributes to determine how the connection is made.  This parameter can be null.  Keys in this map must be Strings.  The appropriate type of each associated value depends on the attribute.  The contents of environment are not changed by this call.

**返回**

- a JMXConnector representing the new connector client.  Each successful call to this method produces a different object.

**异常**

- **NullPointerException** — if serviceURL is null.
- **IOException** — if the connector client cannot be made because of a communication problem.
- **MalformedURLException** — if there is no provider for the protocol in serviceURL.
- **JMXProviderException** — if there is a provider for the protocol in serviceURL but it cannot be used for some reason.
