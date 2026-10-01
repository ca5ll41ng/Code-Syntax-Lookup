---
id: "java-en-function-propertypermission-equals"
language: "java"
lang: "en"
category: "function"
name: "PropertyPermission.equals"
signature: "public boolean equals(Object obj)"
title: "PropertyPermission.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyPermission.equals

```java
public boolean equals(Object obj)
```

Checks two PropertyPermission objects for equality. Checks that obj is
 a PropertyPermission, and has the same name and actions as this object.

**参数**

- **obj** — the object we are testing for equality with this object.

**返回**

- true if obj is a PropertyPermission, and has the same name and actions as this PropertyPermission object.
