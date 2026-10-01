---
id: "java-en-function-files-getattribute"
language: "java"
lang: "en"
category: "function"
name: "Files.getAttribute"
signature: "public static Object getAttribute(Path path, String attribute, LinkOption... options) throws IOException"
title: "Files.getAttribute"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.getAttribute

```java
public static Object getAttribute(Path path, String attribute, LinkOption... options) throws IOException
```

Reads the value of a file attribute.

 

 The `attribute` parameter identifies the attribute to be read
 and takes the form:
 
 [view-name**:**]attribute-name
 
 where square brackets [...] delineate an optional component and the
 character `':'` stands for itself.

 

 view-name is the `name name` of a `FileAttributeView` that identifies a set of file attributes. If not
 specified then it defaults to `"basic"`, the name of the file
 attribute view that identifies the basic set of file attributes common to
 many file systems. attribute-name is the name of the attribute.

 

 The `options` array may be used to indicate how symbolic links
 are handled for the case that the file is a symbolic link. By default,
 symbolic links are followed and the file attribute of the final target
 of the link is read. If the option `NOFOLLOW_LINKS
 NOFOLLOW_LINKS` is present then symbolic links are not followed.

 

 **Usage Example:**
 Suppose we require the user ID of the file owner on a system that
 supports a "`unix`" view:
 {@snippet lang=java :
     Path path = ...
     int uid = (Integer)Files.getAttribute(path, "unix:uid");
 }

**参数**

- **path** — the path to the file
- **attribute** — the attribute to read
- **options** — options indicating how symbolic links are handled

**返回**

- the attribute value

**异常**

- **UnsupportedOperationException** — if the attribute view is not available
- **IllegalArgumentException** — if the attribute name is not specified or is not recognized
- **IOException** — if an I/O error occurs
