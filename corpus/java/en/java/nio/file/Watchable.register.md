---
id: "java-en-function-watchable-register"
language: "java"
lang: "en"
category: "function"
name: "Watchable.register"
signature: "WatchKey register(WatchService watcher, WatchEvent.Kind<?>[] events, WatchEvent.Modifier... modifiers) throws IOException"
title: "Watchable.register"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Watchable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Watchable.register

```java
WatchKey register(WatchService watcher, WatchEvent.Kind<?>[] events, WatchEvent.Modifier... modifiers) throws IOException
```

Registers an object with a watch service.

 

 If the file system object identified by this object is currently
 registered with the watch service then the watch key, representing that
 registration, is returned after changing the event set or modifiers to
 those specified by the `events` and `modifiers` parameters.
 Changing the event set does not cause pending events for the object to be
 discarded. Objects are automatically registered for the `OVERFLOW OVERFLOW` event. This event is not
 required to be present in the array of events.

 

 Otherwise the file system object has not yet been registered with the
 given watch service, so it is registered and the resulting new key is
 returned.

 

 Implementations of this interface should specify the events they
 support.

**参数**

- **watcher** — the watch service to which this object is to be registered
- **events** — the events for which this object should be registered
- **modifiers** — the modifiers, if any, that modify how the object is registered

**返回**

- a key representing the registration of this object with the given watch service

**异常**

- **UnsupportedOperationException** — if unsupported events or modifiers are specified
- **IllegalArgumentException** — if an invalid of combination of events are modifiers are specified
- **ClosedWatchServiceException** — if the watch service is closed
- **IOException** — if an I/O error occurs
