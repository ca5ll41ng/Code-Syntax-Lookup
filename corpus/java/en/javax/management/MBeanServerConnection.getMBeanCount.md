---
id: "java-en-function-mbeanserverconnection-getmbeancount"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.getMBeanCount"
signature: "public Integer getMBeanCount() throws IOException"
title: "MBeanServerConnection.getMBeanCount"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.getMBeanCount

```java
public Integer getMBeanCount() throws IOException
```

Returns the number of MBeans registered in the MBean server.

**返回**

- the number of MBeans registered.

**异常**

- **IOException** — A communication problem occurred when talking to the MBean server.
