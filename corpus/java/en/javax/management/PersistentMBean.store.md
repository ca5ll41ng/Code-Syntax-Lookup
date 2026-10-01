---
id: "java-en-function-persistentmbean-store"
language: "java"
lang: "en"
category: "function"
name: "PersistentMBean.store"
signature: "public void store() throws MBeanException, RuntimeOperationsException, InstanceNotFoundException"
title: "PersistentMBean.store"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/PersistentMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PersistentMBean.store

```java
public void store() throws MBeanException, RuntimeOperationsException, InstanceNotFoundException
```

Captures the current state of this MBean instance and
 writes it out to the persistent store.  The state stored could include
 attribute and operation values. If one of these methods of persistence is
 not supported a "serviceNotFound" exception will be thrown.
 

 Persistence policy from the MBean and attribute descriptor is used to guide execution
 of this method. The MBean should be stored if 'persistPolicy' field is:
 
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

- **MBeanException** — Wraps another exception or persistence is not supported
- **RuntimeOperationsException** — Wraps exceptions from the persistence mechanism
- **InstanceNotFoundException** — Could not find/access the persistent store
