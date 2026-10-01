---
id: "java-en-function-javax-management-notificationbroadcastersupport"
language: "java"
lang: "en"
category: "function"
name: "javax.management.NotificationBroadcasterSupport"
title: "NotificationBroadcasterSupport"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationBroadcasterSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationBroadcasterSupport

Provides an implementation of `javax.management.NotificationEmitter NotificationEmitter`
 interface.  This can be used as the super class of an MBean that
 sends notifications.

 

By default, the notification dispatch model is synchronous.
 That is, when a thread calls sendNotification, the
 NotificationListener.handleNotification method of each listener
 is called within that thread. You can override this default
 by overriding handleNotification in a subclass, or by passing an
 Executor to the constructor.

 

If the method call of a filter or listener throws an `Exception`,
 then that exception does not prevent other listeners from being invoked.  However,
 if the method call of a filter or of `Executor.execute` or of
 `handleNotification` (when no `Executor` is specified) throws an
 `Error`, then that `Error` is propagated to the caller of
 `sendNotification sendNotification`.

 

Remote listeners added using the JMX Remote API (see JMXConnector) are not
 usually called synchronously.  That is, when sendNotification returns, it is
 not guaranteed that any remote listeners have yet received the notification.

> *Since 1.5*
