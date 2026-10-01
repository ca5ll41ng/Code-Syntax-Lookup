---
id: "java-en-function-jmxconnectorservermbean-isactive"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerMBean.isActive"
signature: "public boolean isActive()"
title: "JMXConnectorServerMBean.isActive"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerMBean.isActive

```java
public boolean isActive()
```

Determines whether the connector server is active.  A connector
 server starts being active when its `start start` method
 returns successfully and remains active until either its
 `stop stop` method is called or the connector server
 fails.

**返回**

- true if the connector server is active.
