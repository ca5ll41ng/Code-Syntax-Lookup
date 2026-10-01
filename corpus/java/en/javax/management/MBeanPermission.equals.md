---
id: "java-en-function-mbeanpermission-equals"
language: "java"
lang: "en"
category: "function"
name: "MBeanPermission.equals"
signature: "public boolean equals(Object obj)"
title: "MBeanPermission.equals"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanPermission.equals

```java
public boolean equals(Object obj)
```

Checks two MBeanPermission objects for equality. Checks
 that obj is an MBeanPermission, and has the same
 name and actions as this object.

**参数**

- **obj** — the object we are testing for equality with this object.

**返回**

- true if obj is an MBeanPermission, and has the same name and actions as this MBeanPermission object.
