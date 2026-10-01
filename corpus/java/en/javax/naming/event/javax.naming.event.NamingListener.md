---
id: "java-en-function-javax-naming-event-naminglistener"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.event.NamingListener"
title: "NamingListener"
directive: "type"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingListener

This interface is the root of listener interfaces that
 handle `NamingEvent`s.
 It does not make sense for a listener to implement just this interface.
 A listener typically implements a subinterface of `NamingListener`,
 such as `ObjectChangeListener` or `NamespaceChangeListener`.

 This interface contains a single method, `namingExceptionThrown()`,
 that must be implemented so that the listener can be notified of
 exceptions that are thrown (by the service provider) while gathering
 information about the events that they're interested in.
 When this method is invoked, the listener has been automatically deregistered
 from the `EventContext` with which it has registered.

 For example, suppose a listener implements `ObjectChangeListener` and
 registers with an `EventContext`.
 Then, if the connection to the server is subsequently broken,
 the listener will receive a `NamingExceptionEvent` and may
 take some corrective action, such as notifying the user of the application.

**参见**

- NamingEvent
- NamingExceptionEvent
- EventContext
- EventDirContext

> *Since 1.3*
