---
id: "java-en-function-requiredmodelmbean-setmanagedresource"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.setManagedResource"
signature: "public void setManagedResource(Object mr, String mr_type) throws MBeanException, RuntimeOperationsException, InstanceNotFoundException, InvalidTargetObjectTypeException"
title: "RequiredModelMBean.setManagedResource"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.setManagedResource

```java
public void setManagedResource(Object mr, String mr_type) throws MBeanException, RuntimeOperationsException, InstanceNotFoundException, InvalidTargetObjectTypeException
```

Sets the instance handle of the object against which to
 execute all methods in this ModelMBean management interface
 (MBeanInfo and Descriptors).

**参数**

- **mr** — Object that is the managed resource
- **mr_type** — The type of reference for the managed resource.  Can be: "ObjectReference", "Handle", "IOR", "EJBHandle", or "RMIReference".  In this implementation only "ObjectReference" is supported.

**异常**

- **MBeanException** — The initializer of the object has thrown an exception.
- **InstanceNotFoundException** — The managed resource object could not be found
- **InvalidTargetObjectTypeException** — The managed resource type should be "ObjectReference".
- **RuntimeOperationsException** — Wraps a `RuntimeException` when setting the resource.
