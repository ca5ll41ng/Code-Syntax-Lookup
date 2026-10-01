---
id: "java-en-function-mbeanregistration-postderegister"
language: "java"
lang: "en"
category: "function"
name: "MBeanRegistration.postDeregister"
signature: "public void postDeregister()"
title: "MBeanRegistration.postDeregister"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanRegistration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanRegistration.postDeregister

```java
public void postDeregister()
```

Allows the MBean to perform any operations needed after having been
 unregistered in the MBean server.
 

If the implementation of this method throws a `RuntimeException`
 or an `Error`, the MBean Server will rethrow those inside
 a `RuntimeMBeanException` or `RuntimeErrorException`,
 respectively. However, throwing an exception in `postDeregister`
 will not change the state of the MBean:
 the MBean was already successfully deregistered and will remain so. 
 

This might be confusing for the code calling
 `unregisterMBean()`, as it might assume that MBean deregistration
 has failed. Therefore it is recommended that implementations of
 `postDeregister` do not throw Runtime Exceptions or Errors if it
 can be avoided.
