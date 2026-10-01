---
id: "java-en-function-logmanager-removeconfigurationlistener"
language: "java"
lang: "en"
category: "function"
name: "LogManager.removeConfigurationListener"
signature: "public void removeConfigurationListener(Runnable listener)"
title: "LogManager.removeConfigurationListener"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.removeConfigurationListener

```java
public void removeConfigurationListener(Runnable listener)
```

Removes a previously registered configuration listener.

 Returns silently if the listener is not found.

**参数**

- **listener** — the configuration listener to remove.

**异常**

- **NullPointerException** — if the listener is null.

> *Since 9*
