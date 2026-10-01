---
id: "java-en-function-classloader-setdefaultassertionstatus"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.setDefaultAssertionStatus"
signature: "public void setDefaultAssertionStatus(boolean enabled)"
title: "ClassLoader.setDefaultAssertionStatus"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.setDefaultAssertionStatus

```java
public void setDefaultAssertionStatus(boolean enabled)
```

Sets the default assertion status for this class loader.  This setting
 determines whether classes loaded by this class loader and initialized
 in the future will have assertions enabled or disabled by default.
 This setting may be overridden on a per-package or per-class basis by
 invoking `setPackageAssertionStatus` or `setClassAssertionStatus`.

**参数**

- **enabled** — `true` if classes loaded by this class loader will henceforth have assertions enabled by default, `false` if they will have assertions disabled by default.

> *Since 1.4*
