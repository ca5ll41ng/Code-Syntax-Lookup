---
id: "java-en-function-throwable-getcause"
language: "java"
lang: "en"
category: "function"
name: "Throwable.getCause"
signature: "public synchronized Throwable getCause()"
title: "Throwable.getCause"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Throwable.getCause

```java
public synchronized Throwable getCause()
```

Returns the cause of this throwable or `null` if the
 cause is nonexistent or unknown.  (The cause is the throwable that
 caused this throwable to get thrown.)

 

This implementation returns the cause that was supplied via one of
 the constructors requiring a `Throwable`, or that was set after
 creation with the `initCause` method.  While it is
 typically unnecessary to override this method, a subclass can override
 it to return a cause set by some other means.  This is appropriate for
 a "legacy chained throwable" that predates the addition of chained
 exceptions to `Throwable`.  Note that it is not
 necessary to override any of the `PrintStackTrace` methods,
 all of which invoke the `getCause` method to determine the
 cause of a throwable.

**返回**

- the cause of this throwable or `null` if the cause is nonexistent or unknown.

> *Since 1.4*
