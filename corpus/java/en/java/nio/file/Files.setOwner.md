---
id: "java-en-function-files-setowner"
language: "java"
lang: "en"
category: "function"
name: "Files.setOwner"
signature: "public static Path setOwner(Path path, UserPrincipal owner) throws IOException"
title: "Files.setOwner"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.setOwner

```java
public static Path setOwner(Path path, UserPrincipal owner) throws IOException
```

Updates the file owner.

 

 The `path` parameter is associated with a file system that
 supports `FileOwnerAttributeView`. This file attribute view provides
 access to a file attribute that is the owner of the file.

 

 **Usage Example:**
 Suppose we want to make "joe" the owner of a file:
 {@snippet lang=java :
     Path path = ...
     UserPrincipalLookupService lookupService =
         provider(path).getUserPrincipalLookupService();
     UserPrincipal joe = lookupService.lookupPrincipalByName("joe");
     Files.setOwner(path, joe);
 }

**参数**

- **path** — The path to the file
- **owner** — The new file owner

**返回**

- The given path

**异常**

- **UnsupportedOperationException** — if the associated file system does not support the `FileOwnerAttributeView`
- **IOException** — if an I/O error occurs

**参见**

- FileSystem#getUserPrincipalLookupService
- java.nio.file.attribute.UserPrincipalLookupService
