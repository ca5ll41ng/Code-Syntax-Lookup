---
id: "java-en-function-javax-naming-event-namingexceptionevent"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.event.NamingExceptionEvent"
title: "NamingExceptionEvent"
directive: "type"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingExceptionEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingExceptionEvent

This class represents an event fired when the procedures/processes
 used to collect information for notifying listeners of
 `NamingEvent`s threw a `NamingException`.
 This can happen, for example, if the server which the listener is using
 aborts subsequent to the `addNamingListener()` call.

**参见**

- NamingListener#namingExceptionThrown
- EventContext

> *Since 1.3*
