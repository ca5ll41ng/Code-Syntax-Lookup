---
id: "java-en-function-mbeanserverinvocationhandler-newproxyinstance"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerInvocationHandler.newProxyInstance"
signature: "public static <T> T newProxyInstance(MBeanServerConnection connection, ObjectName objectName, Class<T> interfaceClass, boolean notificationBroadcaster)"
title: "MBeanServerInvocationHandler.newProxyInstance"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerInvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerInvocationHandler.newProxyInstance

```java
public static <T> T newProxyInstance(MBeanServerConnection connection, ObjectName objectName, Class<T> interfaceClass, boolean notificationBroadcaster)
```

Return a proxy that implements the given interface by
 forwarding its methods through the given MBean server to the
 named MBean.  As of 1.6, the methods `newMBeanProxy` and
 `newMBeanProxy(MBeanServerConnection, ObjectName, Class,
 boolean)` are preferred to this method.

 

This method is equivalent to `newProxyInstance
 Proxy.newProxyInstance`(interfaceClass.getClassLoader(),
 interfaces, handler).  Here handler is the
 result of `MBeanServerInvocationHandler new
 MBeanServerInvocationHandler`, and
 interfaces is an array that has one element if
 notificationBroadcaster is false and two if it is
 true.  The first element of interfaces is
 interfaceClass and the second, if present, is
 NotificationEmitter.class.

**参数**

- **connection** — the MBean server to forward to.
- **objectName** — the name of the MBean within connection to forward to.
- **interfaceClass** — the management interface that the MBean exports, which will also be implemented by the returned proxy.
- **notificationBroadcaster** — make the returned proxy implement `NotificationEmitter` by forwarding its methods via connection. A call to `addNotificationListener` on the proxy will result in a call to `addNotificationListener(ObjectName, NotificationListener, NotificationFilter, Object)`, and likewise for the other methods of `NotificationBroadcaster` and `NotificationEmitter`.
- **allows** — the compiler to know that if the `interfaceClass` parameter is `MyMBean.class`, for example, then the return type is `MyMBean`.

**返回**

- the new proxy instance.

**参见**

- JMX#newMBeanProxy(MBeanServerConnection, ObjectName, Class, boolean)
