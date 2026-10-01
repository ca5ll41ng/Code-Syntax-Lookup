---
id: "java-en-function-mbeanserverinvocationhandler-mbeanserverinvocationhandler"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerInvocationHandler.MBeanServerInvocationHandler"
signature: "public MBeanServerInvocationHandler(MBeanServerConnection connection, ObjectName objectName)"
title: "MBeanServerInvocationHandler.MBeanServerInvocationHandler"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerInvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerInvocationHandler.MBeanServerInvocationHandler

```java
public MBeanServerInvocationHandler(MBeanServerConnection connection, ObjectName objectName)
```

Invocation handler that forwards methods through an MBean
 server to a Standard MBean.  This constructor may be called
 instead of relying on `newMBeanProxy(MBeanServerConnection, ObjectName, Class)
 JMX.newMBeanProxy`, for instance if you need to supply a
 different `ClassLoader` to `newProxyInstance
 Proxy.newProxyInstance`.

 

This constructor is not appropriate for an MXBean.  Use
 `MBeanServerInvocationHandler(MBeanServerConnection,
 ObjectName, boolean)` for that.  This constructor is equivalent
 to `new MBeanServerInvocationHandler(connection,
 objectName, false)`.

**参数**

- **connection** — the MBean server connection through which all methods of a proxy using this handler will be forwarded.
- **objectName** — the name of the MBean within the MBean server to which methods will be forwarded.
