---
id: "java-en-function-logmanager-logmanager"
language: "java"
lang: "en"
category: "function"
name: "LogManager.LogManager"
signature: "protected LogManager()"
title: "LogManager.LogManager"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.LogManager

```java
protected LogManager()
```

Protected constructor.  This is protected so that container applications
 (such as J2EE containers) can subclass the object.  It is non-public as
 it is intended that there only be one LogManager object, whose value is
 retrieved by calling LogManager.getLogManager.
