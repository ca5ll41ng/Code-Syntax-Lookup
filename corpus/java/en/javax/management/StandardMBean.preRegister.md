---
id: "java-en-function-standardmbean-preregister"
language: "java"
lang: "en"
category: "function"
name: "StandardMBean.preRegister"
signature: "public ObjectName preRegister(MBeanServer server, ObjectName name) throws Exception"
title: "StandardMBean.preRegister"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardMBean.preRegister

```java
public ObjectName preRegister(MBeanServer server, ObjectName name) throws Exception
```

Allows the MBean to perform any operations it needs before
 being registered in the MBean server.  If the name of the MBean
 is not specified, the MBean can provide a name for its
 registration.  If any exception is raised, the MBean will not be
 registered in the MBean server.

 

The default implementation of this method returns the `name`
 parameter.  It does nothing else for
 Standard MBeans.  For MXBeans, it records the `MBeanServer`
 and `ObjectName` parameters so they can be used to translate
 inter-MXBean references.

 

It is good practice for a subclass that overrides this method
 to call the overridden method via `super.preRegister(...)`.
 This is necessary if this object is an MXBean that is referenced
 by attributes or operations in other MXBeans.

**参数**

- **server** — The MBean server in which the MBean will be registered.
- **name** — The object name of the MBean.  This name is null if the name parameter to one of the createMBean or registerMBean methods in the `MBeanServer` interface is null.  In that case, this method must return a non-null ObjectName for the new MBean.

**返回**

- The name under which the MBean is to be registered. This value must not be null.  If the name parameter is not null, it will usually but not necessarily be the returned value.

**异常**

- **IllegalArgumentException** — if this is an MXBean and `name` is null.
- **InstanceAlreadyExistsException** — if this is an MXBean and it has already been registered under another name (in this MBean Server or another).
- **Exception** — no other checked exceptions are thrown by this method but `Exception` is declared so that subclasses can override the method and throw their own exceptions.

> *Since 1.6*
