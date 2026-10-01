---
id: "java-en-function-mbeanserverconnection-getdomains"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.getDomains"
signature: "public String[] getDomains() throws IOException"
title: "MBeanServerConnection.getDomains"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.getDomains

```java
public String[] getDomains() throws IOException
```

Returns the list of domains in which any MBean is currently
 registered.  A string is in the returned array if and only if
 there is at least one MBean registered with an ObjectName whose
 `getDomain` is equal to that
 string.  The order of strings within the returned array is
 not defined.

**返回**

- the list of domains.

**异常**

- **IOException** — A communication problem occurred when talking to the MBean server.
