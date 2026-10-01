---
id: "java-en-function-jmxconnectorservermbean-getattributes"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServerMBean.getAttributes"
signature: "public Map<String,?> getAttributes()"
title: "JMXConnectorServerMBean.getAttributes"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServerMBean.getAttributes

```java
public Map<String,?> getAttributes()
```

The attributes for this connector server.

**返回**

- a read-only map containing the attributes for this connector server.  Attributes whose values are not serializable are omitted from this map.  If there are no serializable attributes, the returned map is empty.
