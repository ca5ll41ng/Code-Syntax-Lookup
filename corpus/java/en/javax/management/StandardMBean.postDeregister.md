---
id: "java-en-function-standardmbean-postderegister"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.postDeregister"
signature: "public void postDeregister()"
title: "StandardMBean.postDeregister"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.postDeregister

```java
public void postDeregister()
```

Allows the MBean to perform any operations needed after having been
 unregistered in the MBean server.

 

The default implementation of this method does nothing for
 Standard MBeans.  For MXBeans, it removes any information that
 was recorded by the `preRegister preRegister` method.

 

It is good practice for a subclass that overrides this method
 to call the overridden method via `super.postRegister(...)`.
 This is necessary if this object is an MXBean that is referenced
 by attributes or operations in other MXBeans.

> *Since 1.6*
