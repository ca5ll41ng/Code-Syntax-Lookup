---
id: "java-en-function-modelmbean-setmanagedresource"
language: "java"
lang: "en"
category: "function"
name: "ModelMBean.setManagedResource"
signature: "public void setManagedResource(Object mr, String mr_type) throws MBeanException, RuntimeOperationsException, InstanceNotFoundException, InvalidTargetObjectTypeException"
title: "ModelMBean.setManagedResource"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBean.setManagedResource

```java
public void setManagedResource(Object mr, String mr_type) throws MBeanException, RuntimeOperationsException, InstanceNotFoundException, InvalidTargetObjectTypeException
```

Sets the instance handle of the object against which to
 execute all methods in this ModelMBean management interface
 (MBeanInfo and Descriptors).

**参数**

- **mr** — Object that is the managed resource
- **mr_type** — The type of reference for the managed resource.  Can be: ObjectReference, Handle, IOR, EJBHandle, RMIReference. If the MBeanServer cannot process the mr_type passed in, an InvalidTargetTypeException will be thrown.

**异常**

- **MBeanException** — The initializer of the object has thrown an exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException: The managed resource type passed in parameter is null.
- **InstanceNotFoundException** — The managed resource object could not be found
- **InvalidTargetObjectTypeException** — The managed resource type cannot be processed by the ModelMBean or JMX Agent.
