---
id: "java-en-function-package-issealed"
language: "java"
lang: "en"
category: "function"
name: "Package.isSealed"
signature: "public boolean isSealed()"
title: "Package.isSealed"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package.isSealed

```java
public boolean isSealed()
```

Returns true if this package is sealed.

 Package sealing
 has no relationship with `isSealed() sealed classes or interfaces`.
 Package sealing is specific to JAR files defined for classes in an unnamed module.
 See the `Package Package` class specification for details
 how a `Package` is defined as sealed package.

**返回**

- true if the package is sealed, false otherwise
