---
id: "java-en-function-logmanager-addconfigurationlistener"
language: "java"
lang: "en"
category: "function"
name: "LogManager.addConfigurationListener"
signature: "public LogManager addConfigurationListener(Runnable listener)"
title: "LogManager.addConfigurationListener"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.addConfigurationListener

```java
public LogManager addConfigurationListener(Runnable listener)
```

Adds a configuration listener to be invoked each time the logging
 configuration is read.
 If the listener is already registered the method does nothing.
 

 The listener is invoked with privileges that are restricted by the
 calling context of this method.
 The order in which the listeners are invoked is unspecified.
 

 It is recommended that listeners do not throw errors or exceptions.

 If a listener terminates with an uncaught error or exception then
 the first exception will be propagated to the caller of
 `readConfiguration` (or `readConfiguration`)
 after all listeners have been invoked.

 exception, an implementation may record the additional errors or
 exceptions as `addSuppressed(java.lang.Throwable)
 suppressed exceptions`.

**参数**

- **listener** — A configuration listener that will be invoked after the configuration changed.

**返回**

- This LogManager.

**异常**

- **NullPointerException** — if the listener is null.

> *Since 9*
