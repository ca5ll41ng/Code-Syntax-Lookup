---
id: "java-en-function-mbeanserverconnection-unregistermbean"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.unregisterMBean"
signature: "public void unregisterMBean(ObjectName name) throws InstanceNotFoundException, MBeanRegistrationException, IOException"
title: "MBeanServerConnection.unregisterMBean"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.unregisterMBean

```java
public void unregisterMBean(ObjectName name) throws InstanceNotFoundException, MBeanRegistrationException, IOException
```

Unregisters an MBean from the MBean server. The MBean is
 identified by its object name. Once the method has been
 invoked, the MBean may no longer be accessed by its object
 name.

**参数**

- **name** — The object name of the MBean to be unregistered.

**异常**

- **InstanceNotFoundException** — The MBean specified is not registered in the MBean server.
- **MBeanRegistrationException** — The preDeregister (MBeanRegistration interface) method of the MBean has thrown an exception.
- **RuntimeMBeanException** — If the postDeregister (MBeanRegistration interface) method of the MBean throws a RuntimeException, the unregisterMBean method will throw a RuntimeMBeanException, although the MBean unregistration succeeded. In such a case, the MBean will be actually unregistered even though the unregisterMBean method threw an exception.  Note that RuntimeMBeanException can also be thrown by preDeregister, in which case the MBean will remain registered.
- **RuntimeErrorException** — If the postDeregister (MBeanRegistration interface) method of the MBean throws an Error, the unregisterMBean method will throw a RuntimeErrorException, although the MBean unregistration succeeded. In such a case, the MBean will be actually unregistered even though the unregisterMBean method threw an exception.  Note that RuntimeMBeanException can also be thrown by preDeregister, in which case the MBean will remain registered.
- **RuntimeOperationsException** — Wraps a java.lang.IllegalArgumentException: The object name in parameter is null or the MBean you are when trying to unregister is the `javax.management.MBeanServerDelegate MBeanServerDelegate` MBean.
- **IOException** — A communication problem occurred when talking to the MBean server.

**参见**

- javax.management.MBeanRegistration
