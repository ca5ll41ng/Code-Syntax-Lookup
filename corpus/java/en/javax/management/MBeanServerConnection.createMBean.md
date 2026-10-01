---
id: "java-en-function-mbeanserverconnection-creatembean"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.createMBean"
signature: "public ObjectInstance createMBean(String className, ObjectName name) throws ReflectionException, InstanceAlreadyExistsException, MBeanRegistrationException, MBeanException, NotCompliantMBeanException, IOException"
title: "MBeanServerConnection.createMBean"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.createMBean

```java
public ObjectInstance createMBean(String className, ObjectName name) throws ReflectionException, InstanceAlreadyExistsException, MBeanRegistrationException, MBeanException, NotCompliantMBeanException, IOException
```

Instantiates and registers an MBean in the MBean server.  The
 MBean server will use its `javax.management.loading.ClassLoaderRepository Default Loader
 Repository` to load the class of the MBean.  An object name is
 associated with the MBean.  If the object name given is null, the
 MBean must provide its own name by implementing the `javax.management.MBeanRegistration MBeanRegistration` interface
 and returning the name from the `preRegister preRegister` method.

 

This method is equivalent to `createMBean(String,ObjectName,Object[],String[])
 createMBean(className, name, (Object[]) null, (String[])
 null)`.

**参数**

- **className** — The class name of the MBean to be instantiated.
- **name** — The object name of the MBean. May be null.

**返回**

- An ObjectInstance, containing the ObjectName and the Java class name of the newly instantiated MBean.  If the contained ObjectName is n, the contained Java class name is `getMBeanInfo getMBeanInfo`.getClassName().

**异常**

- **ReflectionException** — Wraps a java.lang.ClassNotFoundException or a java.lang.Exception that occurred when trying to invoke the MBean's constructor.
- **InstanceAlreadyExistsException** — The MBean is already under the control of the MBean server.
- **MBeanRegistrationException** — The preRegister (MBeanRegistration interface) method of the MBean has thrown an exception. The MBean will not be registered.
- **RuntimeMBeanException** — If the MBean's constructor or its `preRegister` or `postRegister` method threw a `RuntimeException`. If the postRegister (MBeanRegistration interface) method of the MBean throws a RuntimeException, the createMBean method will throw a RuntimeMBeanException, although the MBean creation and registration succeeded. In such a case, the MBean will be actually registered even though the createMBean method threw an exception. Note that RuntimeMBeanException can also be thrown by preRegister, in which case the MBean will not be registered.
- **RuntimeErrorException** — If the postRegister (MBeanRegistration interface) method of the MBean throws an Error, the createMBean method will throw a RuntimeErrorException, although the MBean creation and registration succeeded. In such a case, the MBean will be actually registered even though the createMBean method threw an exception.  Note that RuntimeErrorException can also be thrown by preRegister, in which case the MBean will not be registered.
- **MBeanException** — The constructor of the MBean has thrown an exception
- **NotCompliantMBeanException** — This class is not a JMX compliant MBean
- **RuntimeOperationsException** — Wraps a java.lang.IllegalArgumentException: The className passed in parameter is null, the ObjectName passed in parameter contains a pattern or no ObjectName is specified for the MBean.
- **IOException** — A communication problem occurred when talking to the MBean server.

**参见**

- javax.management.MBeanRegistration
