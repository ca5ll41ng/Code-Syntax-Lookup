---
id: "java-en-function-jmxconnectorservermbean-getconnectionids"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerMBean.getConnectionIds"
signature: "public String[] getConnectionIds()"
title: "JMXConnectorServerMBean.getConnectionIds"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerMBean.getConnectionIds

```java
public String[] getConnectionIds()
```

The list of IDs for currently-open connections to this
 connector server.

**返回**

- a new string array containing the list of IDs.  If there are no currently-open connections, this array will be empty.
