---
id: "java-en-function-propertypermission-propertypermission"
language: "java"
lang: "en"
category: "function"
name: "PropertyPermission.PropertyPermission"
signature: "public PropertyPermission(String name, String actions)"
title: "PropertyPermission.PropertyPermission"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyPermission.PropertyPermission

```java
public PropertyPermission(String name, String actions)
```

Creates a new PropertyPermission object with the specified name.
 The name is the name of the system property, and
 actions contains a comma-separated list of the
 desired actions granted on the property. Possible actions are
 "read" and "write".

**参数**

- **name** — the name of the PropertyPermission.
- **actions** — the actions string.

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if `name` is empty or if `actions` is invalid.
