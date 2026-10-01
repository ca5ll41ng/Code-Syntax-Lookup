---
id: "java-en-function-classloader-setpackageassertionstatus"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.setPackageAssertionStatus"
signature: "public void setPackageAssertionStatus(String packageName, boolean enabled)"
title: "ClassLoader.setPackageAssertionStatus"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.setPackageAssertionStatus

```java
public void setPackageAssertionStatus(String packageName, boolean enabled)
```

Sets the package default assertion status for the named package.  The
 package default assertion status determines the assertion status for
 classes initialized in the future that belong to the named package or
 any of its "subpackages".

 

 A subpackage of a package named p is any package whose name begins
 with "`p.`".  For example, `javax.swing.text` is a
 subpackage of `javax.swing`, and both `java.util` and
 `java.lang.reflect` are subpackages of `java`.

 

 In the event that multiple package defaults apply to a given class,
 the package default pertaining to the most specific package takes
 precedence over the others.  For example, if `javax.lang` and
 `javax.lang.reflect` both have package defaults associated with
 them, the latter package default applies to classes in
 `javax.lang.reflect`.

 

 Package defaults take precedence over the class loader's default
 assertion status, and may be overridden on a per-class basis by invoking
 `setClassAssertionStatus`.

**参数**

- **packageName** — The name of the package whose package default assertion status is to be set. A `null` value indicates the unnamed package that is "current" (see section {@jls 7.4.2} of The Java Language Specification.)
- **enabled** — `true` if classes loaded by this classloader and belonging to the named package or any of its subpackages will have assertions enabled by default, `false` if they will have assertions disabled by default.

> *Since 1.4*
