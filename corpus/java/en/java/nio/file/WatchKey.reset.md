---
id: "java-en-function-watchkey-reset"
language: "java"
lang: "en"
category: "function"
name: "WatchKey.reset"
signature: "boolean reset()"
title: "WatchKey.reset"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchKey.reset

```java
boolean reset()
```

Resets this watch key.

 

 If this watch key has been cancelled or this watch key is already in
 the ready state then invoking this method has no effect. Otherwise
 if there are pending events for the object then this watch key is
 immediately re-queued to the watch service. If there are no pending
 events then the watch key is put into the ready state and will remain in
 that state until an event is detected or the watch key is cancelled.

**返回**

- `true` if the watch key is valid and has been reset, and `false` if the watch key could not be reset because it is no longer `isValid valid`
