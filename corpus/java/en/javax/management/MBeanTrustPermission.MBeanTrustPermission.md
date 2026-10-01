---
id: "java-en-function-mbeantrustpermission-mbeantrustpermission"
language: "java"
lang: "en"
category: "function"
name: "MBeanTrustPermission.MBeanTrustPermission"
signature: "public MBeanTrustPermission(String name)"
title: "MBeanTrustPermission.MBeanTrustPermission"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanTrustPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanTrustPermission.MBeanTrustPermission

```java
public MBeanTrustPermission(String name)
```

Create a new MBeanTrustPermission with the given name.
        

This constructor is equivalent to
        MBeanTrustPermission(name,null).

**参数**

- **name** — the name of the permission. It must be "register" or "*" for this permission.

**异常**

- **NullPointerException** — if name is null.
- **IllegalArgumentException** — if name is neither "register" nor "*".
