---
id: "java-en-function-jmxauthenticator-authenticate"
language: "java"
lang: "en"
category: "function"
name: "JMXAuthenticator.authenticate"
signature: "public Subject authenticate(Object credentials)"
title: "JMXAuthenticator.authenticate"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXAuthenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXAuthenticator.authenticate

```java
public Subject authenticate(Object credentials)
```

Authenticates the MBeanServerConnection client
 with the given client credentials.

**参数**

- **credentials** — the user-defined credentials to be passed into the server in order to authenticate the user before creating the MBeanServerConnection.  The actual type of this parameter, and whether it can be null, depends on the connector.

**返回**

- the authenticated subject containing its associated principals.

**异常**

- **SecurityException** — if the server cannot authenticate the user with the provided credentials.
