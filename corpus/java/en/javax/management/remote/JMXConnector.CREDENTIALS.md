---
id: "java-en-function-jmxconnector-credentials"
language: "java"
lang: "en"
category: "function"
name: "JMXConnector.CREDENTIALS"
signature: "public static final String CREDENTIALS = \"jmx.remote.credentials\""
title: "JMXConnector.CREDENTIALS"
directive: "field"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnector.CREDENTIALS

```java
public static final String CREDENTIALS = "jmx.remote.credentials"
```

Name of the attribute that specifies the credentials to send
 to the connector server during connection.  The value
 associated with this attribute, if any, is a serializable
 object of an appropriate type for the server's `JMXAuthenticator`.
