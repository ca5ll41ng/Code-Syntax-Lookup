---
id: "java-en-function-classloader-setclassassertionstatus"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.setClassAssertionStatus"
signature: "public void setClassAssertionStatus(String className, boolean enabled)"
title: "ClassLoader.setClassAssertionStatus"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.setClassAssertionStatus

```java
public void setClassAssertionStatus(String className, boolean enabled)
```

Sets the desired assertion status for the named top-level class in this
 class loader and any nested classes contained therein.  This setting
 takes precedence over the class loader's default assertion status, and
 over any applicable per-package default.  This method has no effect if
 the named class has already been initialized.  (Once a class is
 initialized, its assertion status cannot change.)

 

 If the named class is not a top-level class, this invocation will
 have no effect on the actual assertion status of any class.

**参数**

- **className** — The fully qualified class name of the top-level class whose assertion status is to be set.
- **enabled** — `true` if the named class is to have assertions enabled when (and if) it is initialized, `false` if the class is to have assertions disabled.

> *Since 1.4*
