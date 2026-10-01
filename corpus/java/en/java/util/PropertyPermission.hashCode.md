---
id: "java-en-function-propertypermission-hashcode"
language: "java"
lang: "en"
category: "function"
name: "PropertyPermission.hashCode"
signature: "public int hashCode()"
title: "PropertyPermission.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyPermission.hashCode

```java
public int hashCode()
```

Returns the hash code value for this object.
 The hash code used is the hash code of this permissions name, that is,
 `getName().hashCode()`, where `getName` is
 from the Permission superclass.

**返回**

- a hash code value for this object.
