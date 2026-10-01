---
id: "java-en-function-handler-setlevel"
language: "java"
lang: "en"
category: "function"
name: "Handler.setLevel"
signature: "public synchronized void setLevel(Level newLevel)"
title: "Handler.setLevel"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Handler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Handler.setLevel

```java
public synchronized void setLevel(Level newLevel)
```

Set the log level specifying which message levels will be
 logged by this `Handler`.  Message levels lower than this
 value will be discarded.
 

 The intention is to allow developers to turn on voluminous
 logging, but to limit the messages that are sent to certain
 `Handlers`.

**参数**

- **newLevel** — the new value for the log level
