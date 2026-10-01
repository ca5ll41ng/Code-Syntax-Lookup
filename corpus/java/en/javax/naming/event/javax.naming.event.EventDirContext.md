---
id: "java-en-function-javax-naming-event-eventdircontext"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.event.EventDirContext"
title: "EventDirContext"
directive: "type"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/EventDirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventDirContext

Contains methods for registering listeners to be notified
 of events fired when objects named in a directory context changes.

 The methods in this interface support identification of objects by
 RFC 2254
 search filters.

Using the search filter, it is possible to register interest in objects
 that do not exist at the time of registration but later come into existence and
 satisfy the filter.  However, there might be limitations in the extent
 to which this can be supported by the service provider and underlying
 protocol/service.  If the caller submits a filter that cannot be
 supported in this way, `addNamingListener()` throws an
 `InvalidSearchFilterException`.

 See `EventContext` for a description of event source
 and target, and information about listener registration/deregistration
 that are also applicable to methods in this interface.
 See the
 package description
 for information on threading issues.

 A `SearchControls` or array object
 passed as a parameter to any method is owned by the caller.
 The service provider will not modify the object or keep a reference to it.

> *Since 1.3*
