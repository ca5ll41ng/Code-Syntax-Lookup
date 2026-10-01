---
id: "java-en-function-unsolicitednotificationevent-dispatch"
language: "java"
lang: "en"
category: "function"
name: "UnsolicitedNotificationEvent.dispatch"
signature: "public void dispatch(UnsolicitedNotificationListener listener)"
title: "UnsolicitedNotificationEvent.dispatch"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/UnsolicitedNotificationEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnsolicitedNotificationEvent.dispatch

```java
public void dispatch(UnsolicitedNotificationListener listener)
```

Invokes the `notificationReceived()` method on
 a listener using this event.

**参数**

- **listener** — The non-null listener on which to invoke `notificationReceived`.
