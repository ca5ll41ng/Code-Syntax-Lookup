---
id: "java-en-function-userprincipallookupservice-lookupprincipalbygroupname"
language: "java"
lang: "en"
category: "function"
name: "UserPrincipalLookupService.lookupPrincipalByGroupName"
signature: "public abstract GroupPrincipal lookupPrincipalByGroupName(String group) throws IOException"
title: "UserPrincipalLookupService.lookupPrincipalByGroupName"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/UserPrincipalLookupService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UserPrincipalLookupService.lookupPrincipalByGroupName

```java
public abstract GroupPrincipal lookupPrincipalByGroupName(String group) throws IOException
```

Lookup a group principal by group name.

 

 Where an implementation does not support any notion of group then
 this method always throws `UserPrincipalNotFoundException`. Where
 the namespace for user accounts and groups is the same, then this method
 is identical to invoking `lookupPrincipalByName
 lookupPrincipalByName`.

**参数**

- **group** — the string representation of the group to lookup

**返回**

- a group principal

**异常**

- **UserPrincipalNotFoundException** — the principal does not exist or is not a group
- **IOException** — if an I/O error occurs
