---
id: "java-en-function-jmxconnectorprovider-newjmxconnector"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorProvider.newJMXConnector"
signature: "public JMXConnector newJMXConnector(JMXServiceURL serviceURL, Map<String,?> environment) throws IOException"
title: "JMXConnectorProvider.newJMXConnector"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorProvider.newJMXConnector

```java
public JMXConnector newJMXConnector(JMXServiceURL serviceURL, Map<String,?> environment) throws IOException
```

Creates a new connector client that is ready to connect
 to the connector server at the given address.  Each successful
 call to this method produces a different
 JMXConnector object.

**参数**

- **serviceURL** — the address of the connector server to connect to.
- **environment** — a read-only Map containing named attributes to determine how the connection is made.  Keys in this map must be Strings.  The appropriate type of each associated value depends on the attribute.

**返回**

- a JMXConnector representing the new connector client.  Each successful call to this method produces a different object.

**异常**

- **NullPointerException** — if serviceURL or environment is null.
- **IOException** — It is recommended for a provider implementation to throw `MalformedURLException` if the protocol in the `serviceURL` is not recognized by this provider, `JMXProviderException` if this is a provider for the protocol in `serviceURL` but it cannot be used for some reason or any other `IOException` if the connection cannot be made because of a communication problem.
