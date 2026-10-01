---
id: "java-en-function-standardmbean-postregister"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.postRegister"
signature: "public void postRegister(Boolean registrationDone)"
title: "StandardMBean.postRegister"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.postRegister

```java
public void postRegister(Boolean registrationDone)
```

Allows the MBean to perform any operations needed after having been
 registered in the MBean server or after the registration has failed.

 

The default implementation of this method does nothing for
 Standard MBeans.  For MXBeans, it undoes any work done by
 `preRegister preRegister` if registration fails.

 

It is good practice for a subclass that overrides this method
 to call the overridden method via `super.postRegister(...)`.
 This is necessary if this object is an MXBean that is referenced
 by attributes or operations in other MXBeans.

**参数**

- **registrationDone** — Indicates whether or not the MBean has been successfully registered in the MBean server. The value false means that the registration phase has failed.

> *Since 1.6*
