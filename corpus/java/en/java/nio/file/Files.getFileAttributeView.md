---
id: "java-en-function-files-getfileattributeview"
language: "java"
lang: "en"
category: "function"
name: "Files.getFileAttributeView"
signature: "public static <V extends FileAttributeView> V getFileAttributeView(Path path, Class<V> type, LinkOption... options)"
title: "Files.getFileAttributeView"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.getFileAttributeView

```java
public static <V extends FileAttributeView> V getFileAttributeView(Path path, Class<V> type, LinkOption... options)
```

Returns a file attribute view of a given type.

 

 A file attribute view provides a read-only or updatable view of a
 set of file attributes. This method is intended to be used where the file
 attribute view defines type-safe methods to read or update the file
 attributes. The `type` parameter is the type of the attribute view
 required and the method returns an instance of that type if supported.
 The `BasicFileAttributeView` type supports access to the basic
 attributes of a file. Invoking this method to select a file attribute
 view of that type will always return an instance of that class.

 

 The `options` array may be used to indicate how symbolic links
 are handled by the resulting file attribute view for the case that the
 file is a symbolic link. By default, symbolic links are followed. If the
 option `NOFOLLOW_LINKS NOFOLLOW_LINKS` is present then
 symbolic links are not followed. This option is ignored by implementations
 that do not support symbolic links.

 

 **Usage Example:**
 Suppose we want read or set a file's ACL, if supported:
 {@snippet lang=java :
     Path path = ...
     AclFileAttributeView view = Files.getFileAttributeView(path, AclFileAttributeView.class);
     if (view != null) {
         List acl = view.getAcl();
         :
     }
 }

**参数**

- **The** — `FileAttributeView` type
- **path** — the path to the file
- **type** — the `Class` object corresponding to the file attribute view
- **options** — options indicating how symbolic links are handled

**返回**

- a file attribute view of the specified type, or `null` if the attribute view type is not available
