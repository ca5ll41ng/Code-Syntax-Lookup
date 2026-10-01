---
id: "java-en-function-logger-getanonymouslogger"
language: "java"
lang: "en"
category: "function"
name: "Logger.getAnonymousLogger"
signature: "public static Logger getAnonymousLogger()"
title: "Logger.getAnonymousLogger"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Logger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.getAnonymousLogger

```java
public static Logger getAnonymousLogger()
```

Create an anonymous Logger.  The newly created Logger is not
 registered in the LogManager namespace.
 

 This factory method was primarily intended for use from applets.
 Because the resulting Logger is anonymous it can be kept private
 by the creating class.  This removed the need for normal security
 checks, which in turn allowed untrusted applet code to update
 the control state of the Logger.  For example an applet could do
 a setLevel or an addHandler on an anonymous Logger.
 

 Even although the new logger is anonymous, it is configured
 to have the root logger ("") as its parent.  This means that
 by default it inherits its effective level and handlers
 from the root logger.

**返回**

- a newly created private Logger
