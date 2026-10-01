---
id: "java-en-function-jmxconnector-connect"
language: "java"
lang: "en"
category: "function"
name: "JMXConnector.connect"
signature: "public void connect() throws IOException"
title: "JMXConnector.connect"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnector.connect

```java
public void connect() throws IOException
```

Establishes the connection to the connector server.  This
 method is equivalent to `connect(Map)
 connect`.

**异常**

- **IOException** — if the connection could not be made because of a communication problem.
- **SecurityException** — if the connection could not be made for security reasons.
