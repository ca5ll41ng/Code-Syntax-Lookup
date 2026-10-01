---
id: "java-en-function-standardemittermbean-standardemittermbean"
language: "java"
lang: "en"
category: "function"
name: "StandardEmitterMBean.StandardEmitterMBean"
signature: "public <T> StandardEmitterMBean(T implementation, Class<T> mbeanInterface, NotificationEmitter emitter)"
title: "StandardEmitterMBean.StandardEmitterMBean"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardEmitterMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardEmitterMBean.StandardEmitterMBean

```java
public <T> StandardEmitterMBean(T implementation, Class<T> mbeanInterface, NotificationEmitter emitter)
```

Make an MBean whose management interface is specified by
 `mbeanInterface`, with the given implementation and
 where notifications are handled by the given `NotificationEmitter`.
 The resultant MBean implements the `NotificationEmitter` interface
 by forwarding its methods to `emitter`.  It is legal and useful
 for `implementation` and `emitter` to be the same object.

 

If `emitter` is an instance of `NotificationBroadcasterSupport` then the MBean's `sendNotification
 sendNotification` method will call `emitter.``sendNotification sendNotification`.

 

The array returned by `getNotificationInfo` on the
 new MBean is a copy of the array returned by
 `emitter.``getNotificationInfo
 getNotificationInfo` at the time of construction.  If the array
 returned by `emitter.getNotificationInfo()` later changes,
 that will have no effect on this object's
 `getNotificationInfo()`.

**参数**

- **the** — implementation type of the MBean
- **implementation** — the implementation of the MBean interface.
- **mbeanInterface** — a Standard MBean interface.
- **emitter** — the object that will handle notifications.

**异常**

- **IllegalArgumentException** — if the `mbeanInterface` does not follow JMX design patterns for Management Interfaces, or if the given `implementation` does not implement the specified interface, or if `emitter` is null.
