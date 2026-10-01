---
id: "java-en-function-mbeanserverconnection-getattribute"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.getAttribute"
signature: "public Object getAttribute(ObjectName name, String attribute) throws MBeanException, AttributeNotFoundException, InstanceNotFoundException, ReflectionException, IOException"
title: "MBeanServerConnection.getAttribute"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.getAttribute

```java
public Object getAttribute(ObjectName name, String attribute) throws MBeanException, AttributeNotFoundException, InstanceNotFoundException, ReflectionException, IOException
```

Gets the value of a specific attribute of a named MBean. The MBean
 is identified by its object name.

**参数**

- **name** — The object name of the MBean from which the attribute is to be retrieved.
- **attribute** — A String specifying the name of the attribute to be retrieved.

**返回**

- The value of the retrieved attribute.

**异常**

- **AttributeNotFoundException** — The attribute specified is not accessible in the MBean.
- **MBeanException** — Wraps an exception thrown by the MBean's getter.
- **InstanceNotFoundException** — The MBean specified is not registered in the MBean server.
- **ReflectionException** — Wraps a java.lang.Exception thrown when trying to invoke the setter.
- **RuntimeOperationsException** — Wraps a java.lang.IllegalArgumentException: The object name in parameter is null or the attribute in parameter is null.
- **IOException** — A communication problem occurred when talking to the MBean server.

**参见**

- #setAttribute
