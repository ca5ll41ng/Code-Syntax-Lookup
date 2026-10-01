---
id: "java-en-function-namingevent-getchangeinfo"
language: "java"
lang: "en"
category: "function"
name: "NamingEvent.getChangeInfo"
signature: "public Object getChangeInfo()"
title: "NamingEvent.getChangeInfo"
directive: "method"
module: "java.naming/javax.naming.event"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/event/NamingEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEvent.getChangeInfo

```java
public Object getChangeInfo()
```

Retrieves the change information for this event.
 The value of the change information is service-specific. For example,
 it could be an ID that identifies the change in a change log on the server.

**返回**

- The possibly null change information of this event.
