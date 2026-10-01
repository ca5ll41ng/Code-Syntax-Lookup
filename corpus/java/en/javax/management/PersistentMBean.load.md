---
id: "java-en-function-persistentmbean-load"
language: "java"
lang: "en"
category: "function"
name: "PersistentMBean.load"
signature: "public void load() throws MBeanException, RuntimeOperationsException, InstanceNotFoundException"
title: "PersistentMBean.load"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/PersistentMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PersistentMBean.load

```java
public void load() throws MBeanException, RuntimeOperationsException, InstanceNotFoundException
```

Instantiates thisMBean instance with the data found for
 the MBean in the persistent store.  The data loaded could include
 attribute and operation values.

 This method should be called during construction or initialization of this instance,
 and before the MBean is registered with the MBeanServer.

**异常**

- **MBeanException** — Wraps another exception or persistence is not supported
- **RuntimeOperationsException** — Wraps exceptions from the persistence mechanism
- **InstanceNotFoundException** — Could not find or load this MBean from persistent storage
