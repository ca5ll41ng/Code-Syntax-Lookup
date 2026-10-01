---
id: "java-en-function-basicpermission-hashcode"
language: "java"
lang: "en"
category: "function"
name: "BasicPermission.hashCode"
signature: "public int hashCode()"
title: "BasicPermission.hashCode"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/BasicPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicPermission.hashCode

```java
public int hashCode()
```

{@return the hash code value for this object}
 The hash code used is the hash code of the name, that is,
 `getName().hashCode()`, where `getName` is
 from the `Permission` superclass.
