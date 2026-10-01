---
id: "java-en-function-javax-management-standardemittermbean"
language: "java"
lang: "en"
category: "function"
name: "javax.management.StandardEmitterMBean"
title: "StandardEmitterMBean"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardEmitterMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardEmitterMBean

An MBean whose management interface is determined by reflection
 on a Java interface, and that emits notifications.

 

The following example shows how to use the public constructor
 `StandardEmitterMBean(Object, Class, NotificationEmitter)
 StandardEmitterMBean` to
 create an MBean emitting notifications with any
 implementation class name Impl, with a management
 interface defined (as for current Standard MBeans) by any interface
 Intf, and with any implementation of the interface
 `NotificationEmitter`. The example uses the class
 `NotificationBroadcasterSupport` as an implementation
 of the interface `NotificationEmitter`.

     
```

     MBeanServer mbs;
     ...
     final String[] types = new String[] {"sun.disc.space","sun.disc.alarm"};
     final MBeanNotificationInfo info = new MBeanNotificationInfo(
                                          types,
                                          Notification.class.getName(),
                                          "Notification about disc info.");
     final NotificationEmitter emitter =
                    new NotificationBroadcasterSupport(info);

     final Intf impl = new Impl(...);
     final Object mbean = new StandardEmitterMBean(
                                     impl, Intf.class, emitter);
     mbs.registerMBean(mbean, objectName);
     
```

**参见**

- StandardMBean

> *Since 1.6*
