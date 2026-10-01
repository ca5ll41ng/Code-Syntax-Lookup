---
id: "java-en-function-mbeanserverconnection-getdefaultdomain"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.getDefaultDomain"
signature: "public String getDefaultDomain() throws IOException"
title: "MBeanServerConnection.getDefaultDomain"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.getDefaultDomain

```java
public String getDefaultDomain() throws IOException
```

Returns the default domain used for naming the MBean.
 The default domain name is used as the domain part in the ObjectName
 of MBeans if no domain is specified by the user.

**返回**

- the default domain.

**异常**

- **IOException** — A communication problem occurred when talking to the MBean server.
