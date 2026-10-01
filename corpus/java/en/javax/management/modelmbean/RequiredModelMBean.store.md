---
id: "java-en-function-requiredmodelmbean-store"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.store"
signature: "public void store() throws MBeanException, RuntimeOperationsException, InstanceNotFoundException"
title: "RequiredModelMBean.store"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.store

```java
public void store() throws MBeanException, RuntimeOperationsException, InstanceNotFoundException
```

Captures the current state of this MBean instance and writes
 it out to the persistent store.  The state stored could include
 attribute and operation values.

 

If the implementation of this class does not support
 persistence, an `MBeanException` wrapping a `ServiceNotFoundException` is thrown.

 

Persistence policy from the MBean and attribute descriptor
 is used to guide execution of this method. The MBean should be
 stored if 'persistPolicy' field is:

 
```
!= "never"
   = "always"
   = "onTimer" and now > 'lastPersistTime' + 'persistPeriod'
   = "NoMoreOftenThan" and now > 'lastPersistTime' + 'persistPeriod'
   = "onUnregister"
 
```

 

Do not store the MBean if 'persistPolicy' field is:
 
```
= "never"
    = "onUpdate"
    = "onTimer" && now < 'lastPersistTime' + 'persistPeriod'
 
```

**异常**

- **MBeanException** — Wraps another exception, or persistence is not supported
- **RuntimeOperationsException** — Wraps exceptions from the persistence mechanism
- **InstanceNotFoundException** — Could not find/access the persistent store
