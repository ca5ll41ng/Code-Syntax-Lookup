---
id: "java-en-function-mbeanserver-getmbeancount"
language: "java"
lang: "en"
category: "function"
name: "MBeanServer.getMBeanCount"
signature: "public Integer getMBeanCount()"
title: "MBeanServer.getMBeanCount"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer.getMBeanCount

```java
public Integer getMBeanCount()
```

Returns the number of MBeans registered in the MBean server.

**返回**

- the number of registered MBeans, wrapped in an Integer. If the caller's permissions are restricted, this number may be greater than the number of MBeans the caller can access.
