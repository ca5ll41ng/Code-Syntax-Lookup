---
id: "java-en-function-jmxconnectorservermbean-getaddress"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerMBean.getAddress"
signature: "public JMXServiceURL getAddress()"
title: "JMXConnectorServerMBean.getAddress"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerMBean.getAddress

```java
public JMXServiceURL getAddress()
```

The address of this connector server.
 

 The address returned may not be the exact original `JMXServiceURL`
 that was supplied when creating the connector server, since the original
 address may not always be complete. For example the port number may be
 dynamically allocated when starting the connector server. Instead the
 address returned is the actual `JMXServiceURL` of the
 `JMXConnectorServer`. This is the address that clients supply
 to `connect`.
 
 

Note that the address returned may be `null` if
    the `JMXConnectorServer` is not yet `isActive active`.

**返回**

- the address of this connector server, or null if it does not have one.
