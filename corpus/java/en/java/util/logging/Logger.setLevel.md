---
id: "java-en-function-logger-setlevel"
language: "java"
lang: "en"
category: "function"
name: "Logger.setLevel"
signature: "public void setLevel(Level newLevel)"
title: "Logger.setLevel"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.setLevel

```java
public void setLevel(Level newLevel)
```

Set the log level specifying which message levels will be
 logged by this logger.  Message levels lower than this
 value will be discarded.  The level value Level.OFF
 can be used to turn off logging.
 

 If the new level is null, it means that this node should
 inherit its level from its nearest ancestor with a specific
 (non-null) level value.

**参数**

- **newLevel** — the new value for the log level (may be null)
