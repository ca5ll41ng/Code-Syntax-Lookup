---
id: "java-en-function-mbeanserver-creatembean"
language: "java"
lang: "en"
category: "function"
name: "MBeanServer.createMBean"
signature: "public ObjectInstance createMBean(String className, ObjectName name) throws ReflectionException, InstanceAlreadyExistsException, MBeanRegistrationException, MBeanException, NotCompliantMBeanException"
title: "MBeanServer.createMBean"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer.createMBean

```java
public ObjectInstance createMBean(String className, ObjectName name) throws ReflectionException, InstanceAlreadyExistsException, MBeanRegistrationException, MBeanException, NotCompliantMBeanException
```

{@inheritDoc}
 

If this method successfully creates an MBean, a notification
 is sent as described above.

**异常**

- **RuntimeOperationsException** — {@inheritDoc}
- **RuntimeMBeanException** — {@inheritDoc}
- **RuntimeErrorException** — {@inheritDoc}
