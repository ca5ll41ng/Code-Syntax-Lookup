---
id: "java-en-function-mbeanregistration-postregister"
language: "java"
lang: "en"
category: "function"
name: "MBeanRegistration.postRegister"
signature: "public void postRegister(Boolean registrationDone)"
title: "MBeanRegistration.postRegister"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanRegistration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanRegistration.postRegister

```java
public void postRegister(Boolean registrationDone)
```

Allows the MBean to perform any operations needed after having been
 registered in the MBean server or after the registration has failed.
 

If the implementation of this method throws a `RuntimeException`
 or an `Error`, the MBean Server will rethrow those inside
 a `RuntimeMBeanException` or `RuntimeErrorException`,
 respectively. However, throwing an exception in `postRegister`
 will not change the state of the MBean:
 if the MBean was already registered (`registrationDone` is
 `true`), the MBean will remain registered. 
 

This might be confusing for the code calling `createMBean()`
 or `registerMBean()`, as such code might assume that MBean
 registration has failed when such an exception is raised.
 Therefore it is recommended that implementations of
 `postRegister` do not throw Runtime Exceptions or Errors if it
 can be avoided.

**参数**

- **registrationDone** — Indicates whether or not the MBean has been successfully registered in the MBean server. The value false means that the registration phase has failed.
