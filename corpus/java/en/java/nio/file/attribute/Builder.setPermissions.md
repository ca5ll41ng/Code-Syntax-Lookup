---
id: "java-en-function-builder-setpermissions"
language: "java"
lang: "en"
category: "function"
name: "Builder.setPermissions"
signature: "public Builder setPermissions(Set<AclEntryPermission> perms)"
title: "Builder.setPermissions"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/AclEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setPermissions

```java
public Builder setPermissions(Set<AclEntryPermission> perms)
```

Sets the permissions component of this builder. On return, the
 permissions component of this builder is a copy of the given set.

**参数**

- **perms** — the permissions component

**返回**

- this builder

**异常**

- **ClassCastException** — if the set contains elements that are not of type `AclEntryPermission`
