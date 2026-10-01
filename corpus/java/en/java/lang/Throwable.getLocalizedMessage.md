---
id: "java-en-function-throwable-getlocalizedmessage"
language: "java"
lang: "en"
category: "function"
name: "Throwable.getLocalizedMessage"
signature: "public String getLocalizedMessage()"
title: "Throwable.getLocalizedMessage"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Throwable.getLocalizedMessage

```java
public String getLocalizedMessage()
```

Creates a localized description of this throwable.
 Subclasses may override this method in order to produce a
 locale-specific message.  For subclasses that do not override this
 method, the default implementation returns the same result as
 `getMessage()`.

**返回**

- The localized description of this throwable.

> *Since 1.1*
