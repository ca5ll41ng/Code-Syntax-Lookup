---
id: "java-en-function-javax-management-notificationemitter"
language: "java"
lang: "en"
category: "function"
name: "javax.management.NotificationEmitter"
title: "NotificationEmitter"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationEmitter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationEmitter

Interface implemented by an MBean that emits Notifications. It
 allows a listener to be registered with the MBean as a notification
 listener.

 Notification dispatch

When an MBean emits a notification, it considers each listener that has been
 added with `addNotificationListener addNotificationListener` and not
 subsequently removed with `removeNotificationListener removeNotificationListener`.
 If a filter was provided with that listener, and if the filter's
 `isNotificationEnabled isNotificationEnabled` method returns
 false, the listener is ignored.  Otherwise, the listener's
 `handleNotification handleNotification` method is called with
 the notification, as well as the handback object that was provided to
 `addNotificationListener`.

 

If the same listener is added more than once, it is considered as many times as it was
 added.  It is often useful to add the same listener with different filters or handback
 objects.

 

Implementations of this interface can differ regarding the thread in which the methods
 of filters and listeners are called.

 

If the method call of a filter or listener throws an `Exception`, then that
 exception should not prevent other listeners from being invoked.  However, if the method
 call throws an `Error`, then it is recommended that processing of the notification
 stop at that point, and if it is possible to propagate the `Error` to the sender of
 the notification, this should be done.

 

This interface should be used by new code in preference to the
 `NotificationBroadcaster` interface.

 

Implementations of this interface and of `NotificationBroadcaster`
 should be careful about synchronization.  In particular, it is not a good
 idea for an implementation to hold any locks while it is calling a
 listener.  To deal with the possibility that the list of listeners might
 change while a notification is being dispatched, a good strategy is to
 use a `CopyOnWriteArrayList` for this list.

> *Since 1.5*
