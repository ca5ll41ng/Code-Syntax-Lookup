---
id: "java-en-function-mbeanserverbuilder-newmbeanserverdelegate"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerBuilder.newMBeanServerDelegate"
signature: "public MBeanServerDelegate newMBeanServerDelegate()"
title: "MBeanServerBuilder.newMBeanServerDelegate"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerBuilder.newMBeanServerDelegate

```java
public MBeanServerDelegate newMBeanServerDelegate()
```

This method creates a new MBeanServerDelegate for a new MBeanServer.
 When creating a new MBeanServer the
 `javax.management.MBeanServerFactory` first calls this method
 in order to create a new MBeanServerDelegate.
 
Then it calls
 newMBeanServer(defaultDomain,outer,delegate)
 passing the delegate that should be used by the MBeanServer
 implementation.
 

Note that the passed delegate might not be directly the
 MBeanServerDelegate that was returned by this method. It could
 be, for instance, a new object wrapping the previously
 returned object.

**返回**

- A new `javax.management.MBeanServerDelegate`.
