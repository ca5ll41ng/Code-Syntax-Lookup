---
id: "java-en-function-mbeanserver-unregistermbean"
language: "java"
lang: "en"
category: "function"
name: "MBeanServer.unregisterMBean"
signature: "public void unregisterMBean(ObjectName name) throws InstanceNotFoundException, MBeanRegistrationException"
title: "MBeanServer.unregisterMBean"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer.unregisterMBean

```java
public void unregisterMBean(ObjectName name) throws InstanceNotFoundException, MBeanRegistrationException
```

{@inheritDoc}

 

If this method successfully unregisters an MBean, a notification
 is sent as described above.

**异常**

- **RuntimeOperationsException** — {@inheritDoc}
- **RuntimeMBeanException** — {@inheritDoc}
- **RuntimeErrorException** — {@inheritDoc}
