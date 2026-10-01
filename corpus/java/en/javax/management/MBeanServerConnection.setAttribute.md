---
id: "java-en-function-mbeanserverconnection-setattribute"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.setAttribute"
signature: "public void setAttribute(ObjectName name, Attribute attribute) throws InstanceNotFoundException, AttributeNotFoundException, InvalidAttributeValueException, MBeanException, ReflectionException, IOException"
title: "MBeanServerConnection.setAttribute"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.setAttribute

```java
public void setAttribute(ObjectName name, Attribute attribute) throws InstanceNotFoundException, AttributeNotFoundException, InvalidAttributeValueException, MBeanException, ReflectionException, IOException
```

Sets the value of a specific attribute of a named MBean. The MBean
 is identified by its object name.

**参数**

- **name** — The name of the MBean within which the attribute is to be set.
- **attribute** — The identification of the attribute to be set and the value it is to be set to.

**异常**

- **InstanceNotFoundException** — The MBean specified is not registered in the MBean server.
- **AttributeNotFoundException** — The attribute specified is not accessible in the MBean.
- **InvalidAttributeValueException** — The value specified for the attribute is not valid.
- **MBeanException** — Wraps an exception thrown by the MBean's setter.
- **ReflectionException** — Wraps a java.lang.Exception thrown when trying to invoke the setter.
- **RuntimeOperationsException** — Wraps a java.lang.IllegalArgumentException: The object name in parameter is null or the attribute in parameter is null.
- **IOException** — A communication problem occurred when talking to the MBean server.

**参见**

- #getAttribute
