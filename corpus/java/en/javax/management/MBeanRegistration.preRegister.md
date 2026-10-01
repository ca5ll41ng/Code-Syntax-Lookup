---
id: "java-en-function-mbeanregistration-preregister"
language: "java"
lang: "en"
category: "function"
name: "MBeanRegistration.preRegister"
signature: "public ObjectName preRegister(MBeanServer server, ObjectName name) throws java.lang.Exception"
title: "MBeanRegistration.preRegister"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanRegistration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanRegistration.preRegister

```java
public ObjectName preRegister(MBeanServer server, ObjectName name) throws java.lang.Exception
```

Allows the MBean to perform any operations it needs before
 being registered in the MBean Server.  If the name of the MBean
 is not specified, the MBean can provide a name for its
 registration.  If any exception is raised, the MBean will not be
 registered in the MBean Server.

**参数**

- **server** — The MBean Server in which the MBean will be registered.
- **name** — The object name of the MBean.  This name is null if the name parameter to one of the createMBean or registerMBean methods in the `MBeanServer` interface is null.  In that case, this method must return a non-null ObjectName for the new MBean.

**返回**

- The name under which the MBean is to be registered. This value must not be null.  If the name parameter is not null, it will usually but not necessarily be the returned value.

**异常**

- **java.lang.Exception** — This exception will be caught by the MBean Server and re-thrown as an `MBeanRegistrationException`.
