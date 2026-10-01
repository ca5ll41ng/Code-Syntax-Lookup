---
id: "java-en-function-subjectdelegationpermission-subjectdelegationpermission"
language: "java"
lang: "en"
category: "function"
name: "SubjectDelegationPermission.SubjectDelegationPermission"
signature: "public SubjectDelegationPermission(String name)"
title: "SubjectDelegationPermission.SubjectDelegationPermission"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/SubjectDelegationPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubjectDelegationPermission.SubjectDelegationPermission

```java
public SubjectDelegationPermission(String name)
```

Creates a new SubjectDelegationPermission with the specified name.
 The name is the symbolic name of the SubjectDelegationPermission.

**参数**

- **name** — the name of the SubjectDelegationPermission

**异常**

- **NullPointerException** — if name is null.
- **IllegalArgumentException** — if name is empty.
