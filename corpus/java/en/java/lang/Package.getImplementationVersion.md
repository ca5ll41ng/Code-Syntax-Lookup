---
id: "java-en-function-package-getimplementationversion"
language: "java"
lang: "en"
category: "function"
name: "Package.getImplementationVersion"
signature: "public String getImplementationVersion()"
title: "Package.getImplementationVersion"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package.getImplementationVersion

```java
public String getImplementationVersion()
```

Return the version of this implementation. It consists of any string
 assigned by the vendor of this implementation and does
 not have any particular syntax specified or expected by the Java
 runtime. It may be compared for equality with other
 package version strings used for this implementation
 by this vendor for this package.

**返回**

- the version of the implementation, `null` is returned if it is not known.
