---
id: "java-en-function-classloader-clearassertionstatus"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.clearAssertionStatus"
signature: "public void clearAssertionStatus()"
title: "ClassLoader.clearAssertionStatus"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.clearAssertionStatus

```java
public void clearAssertionStatus()
```

Sets the default assertion status for this class loader to
 `false` and discards any package defaults or class assertion
 status settings associated with the class loader.  This method is
 provided so that class loaders can be made to ignore any command line or
 persistent assertion status settings and "start with a clean slate."

> *Since 1.4*
