---
id: "java-en-function-mbeanserver-registermbean"
language: "java"
lang: "en"
category: "function"
name: "MBeanServer.registerMBean"
signature: "public ObjectInstance registerMBean(Object object, ObjectName name) throws InstanceAlreadyExistsException, MBeanRegistrationException, NotCompliantMBeanException"
title: "MBeanServer.registerMBean"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer.registerMBean

```java
public ObjectInstance registerMBean(Object object, ObjectName name) throws InstanceAlreadyExistsException, MBeanRegistrationException, NotCompliantMBeanException
```

Registers a pre-existing object as an MBean with the MBean
 server. If the object name given is null, the MBean must
 provide its own name by implementing the `javax.management.MBeanRegistration MBeanRegistration` interface
 and returning the name from the `preRegister preRegister` method.

 

If this method successfully registers an MBean, a notification
 is sent as described above.

**参数**

- **object** — The  MBean to be registered as an MBean.
- **name** — The object name of the MBean. May be null.

**返回**

- An ObjectInstance, containing the ObjectName and the Java class name of the newly registered MBean.  If the contained ObjectName is n, the contained Java class name is `getMBeanInfo getMBeanInfo`.getClassName().

**异常**

- **InstanceAlreadyExistsException** — The MBean is already under the control of the MBean server.
- **MBeanRegistrationException** — The preRegister (MBeanRegistration interface) method of the MBean has thrown an exception. The MBean will not be registered.
- **RuntimeMBeanException** — If the postRegister (MBeanRegistration interface) method of the MBean throws a RuntimeException, the registerMBean method will throw a RuntimeMBeanException, although the MBean registration succeeded. In such a case, the MBean will be actually registered even though the registerMBean method threw an exception.  Note that RuntimeMBeanException can also be thrown by preRegister, in which case the MBean will not be registered.
- **RuntimeErrorException** — If the postRegister (MBeanRegistration interface) method of the MBean throws an Error, the registerMBean method will throw a RuntimeErrorException, although the MBean registration succeeded. In such a case, the MBean will be actually registered even though the registerMBean method threw an exception.  Note that RuntimeErrorException can also be thrown by preRegister, in which case the MBean will not be registered.
- **NotCompliantMBeanException** — This object is not a JMX compliant MBean
- **RuntimeOperationsException** — Wraps a java.lang.IllegalArgumentException: The object passed in parameter is null or no object name is specified.

**参见**

- javax.management.MBeanRegistration
