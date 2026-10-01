---
id: "java-en-function-requiredmodelmbean-load"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.load"
signature: "public void load() throws MBeanException, RuntimeOperationsException, InstanceNotFoundException"
title: "RequiredModelMBean.load"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.load

```java
public void load() throws MBeanException, RuntimeOperationsException, InstanceNotFoundException
```

Instantiates this MBean instance with the data found for
 the MBean in the persistent store.  The data loaded could include
 attribute and operation values.

 

This method should be called during construction or
 initialization of this instance, and before the MBean is
 registered with the MBeanServer.

 

If the implementation of this class does not support
 persistence, an `MBeanException` wrapping a `ServiceNotFoundException` is thrown.

**异常**

- **MBeanException** — Wraps another exception, or persistence is not supported
- **RuntimeOperationsException** — Wraps exceptions from the persistence mechanism
- **InstanceNotFoundException** — Could not find or load this MBean from persistent storage
