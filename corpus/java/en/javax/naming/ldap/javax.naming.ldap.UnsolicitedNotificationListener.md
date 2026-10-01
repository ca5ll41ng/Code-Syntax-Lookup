---
id: "java-en-function-javax-naming-ldap-unsolicitednotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.UnsolicitedNotificationListener"
title: "UnsolicitedNotificationListener"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/UnsolicitedNotificationListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnsolicitedNotificationListener

This interface is for handling `UnsolicitedNotificationEvent`.
 "Unsolicited notification" is defined in
 RFC 2251.
 It allows the server to send unsolicited notifications to the client.
 An `UnsolicitedNotificationListener` must:

 
- Implement this interface and its method
 
- Implement `NamingListener.namingExceptionThrown()` so
 that it will be notified of exceptions thrown while attempting to
 collect unsolicited notification events.
 
- Register with the context using one of the `addNamingListener()`
 methods from `EventContext` or `EventDirContext`.
 Only the `NamingListener` argument of these methods are applicable;
 the rest are ignored for an `UnsolicitedNotificationListener`.
 (These arguments might be applicable to the listener if it implements
 other listener interfaces).

**参见**

- UnsolicitedNotificationEvent
- UnsolicitedNotification
- javax.naming.event.EventContext#addNamingListener
- javax.naming.event.EventDirContext#addNamingListener
- javax.naming.event.EventContext#removeNamingListener

> *Since 1.3*
