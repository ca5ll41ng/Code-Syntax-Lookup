---
id: "java-en-function-mbeanserverconnection-getobjectinstance"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.getObjectInstance"
signature: "public ObjectInstance getObjectInstance(ObjectName name) throws InstanceNotFoundException, IOException"
title: "MBeanServerConnection.getObjectInstance"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.getObjectInstance

```java
public ObjectInstance getObjectInstance(ObjectName name) throws InstanceNotFoundException, IOException
```

Gets the ObjectInstance for a given MBean
 registered with the MBean server.

**参数**

- **name** — The object name of the MBean.

**返回**

- The ObjectInstance associated with the MBean specified by name.  The contained ObjectName is name and the contained class name is `getMBeanInfo getMBeanInfo`.getClassName().

**异常**

- **InstanceNotFoundException** — The MBean specified is not registered in the MBean server.
- **IOException** — A communication problem occurred when talking to the MBean server.
