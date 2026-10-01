---
id: "java-en-function-mbeanserverconnection-getmbeaninfo"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.getMBeanInfo"
signature: "public MBeanInfo getMBeanInfo(ObjectName name) throws InstanceNotFoundException, IntrospectionException, ReflectionException, IOException"
title: "MBeanServerConnection.getMBeanInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.getMBeanInfo

```java
public MBeanInfo getMBeanInfo(ObjectName name) throws InstanceNotFoundException, IntrospectionException, ReflectionException, IOException
```

This method discovers the attributes and operations that an
 MBean exposes for management.

**参数**

- **name** — The name of the MBean to analyze

**返回**

- An instance of MBeanInfo allowing the retrieval of all attributes and operations of this MBean.

**异常**

- **IntrospectionException** — An exception occurred during introspection.
- **InstanceNotFoundException** — The MBean specified was not found.
- **ReflectionException** — An exception occurred when trying to invoke the getMBeanInfo of a Dynamic MBean.
- **IOException** — A communication problem occurred when talking to the MBean server.
