---
id: "java-en-function-managementpermission-managementpermission"
language: "java"
lang: "en"
category: "function"
name: "ManagementPermission.ManagementPermission"
signature: "public ManagementPermission(String name)"
title: "ManagementPermission.ManagementPermission"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ManagementPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ManagementPermission.ManagementPermission

```java
public ManagementPermission(String name)
```

Constructs a ManagementPermission with the specified name.

**参数**

- **name** — Permission name. Must be either "monitor" or "control".

**异常**

- **NullPointerException** — if name is null.
- **IllegalArgumentException** — if name is empty or invalid.
