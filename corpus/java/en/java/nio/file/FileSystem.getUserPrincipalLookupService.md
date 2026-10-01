---
id: "java-en-function-filesystem-getuserprincipallookupservice"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.getUserPrincipalLookupService"
signature: "public abstract UserPrincipalLookupService getUserPrincipalLookupService()"
title: "FileSystem.getUserPrincipalLookupService"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.getUserPrincipalLookupService

```java
public abstract UserPrincipalLookupService getUserPrincipalLookupService()
```

Returns the `UserPrincipalLookupService` for this file system
 (optional operation). The resulting lookup service may be used to
 lookup user or group names.

 

 **Usage Example:**
 Suppose we want to make "joe" the owner of a file:
 {@snippet lang=java :
     UserPrincipalLookupService lookupService = FileSystems.getDefault().getUserPrincipalLookupService();
     Files.setOwner(path, lookupService.lookupPrincipalByName("joe"));
 }

**返回**

- The `UserPrincipalLookupService` for this file system

**异常**

- **UnsupportedOperationException** — If this `FileSystem` does not does have a lookup service
