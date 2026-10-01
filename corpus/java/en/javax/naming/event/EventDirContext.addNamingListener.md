---
id: "java-en-function-eventdircontext-addnaminglistener"
language: "java"
lang: "en"
category: "function"
name: "EventDirContext.addNamingListener"
signature: "void addNamingListener(Name target, String filter, SearchControls ctls, NamingListener l) throws NamingException"
title: "EventDirContext.addNamingListener"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/EventDirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventDirContext.addNamingListener

```java
void addNamingListener(Name target, String filter, SearchControls ctls, NamingListener l) throws NamingException
```

Adds a listener for receiving naming events fired
 when objects identified by the search filter `filter` at
 the object named by target are modified.
 

 The scope, returningObj flag, and returningAttributes flag from
 the search controls `ctls` are used to control the selection
 of objects that the listener is interested in,
 and determines what information is returned in the eventual
 `NamingEvent` object. Note that the requested
 information to be returned might not be present in the `NamingEvent`
 object if they are unavailable or could not be obtained by the
 service provider or service.

**参数**

- **target** — The nonnull name of the object resolved relative to this context.
- **filter** — The nonnull string filter (see RFC2254).
- **ctls** — The possibly null search controls. If null, the default search controls are used.
- **l** — The nonnull listener.

**异常**

- **NamingException** — If a problem was encountered while adding the listener.

**参见**

- EventContext#removeNamingListener
- javax.naming.directory.DirContext#search(javax.naming.Name, java.lang.String, javax.naming.directory.SearchControls)
