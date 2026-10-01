---
id: "java-en-function-files-setattribute"
language: "java"
lang: "en"
category: "function"
name: "Files.setAttribute"
signature: "public static Path setAttribute(Path path, String attribute, Object value, LinkOption... options) throws IOException"
title: "Files.setAttribute"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.setAttribute

```java
public static Path setAttribute(Path path, String attribute, Object value, LinkOption... options) throws IOException
```

Sets the value of a file attribute.

 

 The `attribute` parameter identifies the attribute to be set
 and takes the form:
 
 [view-name**:**]attribute-name
 
 where square brackets [...] delineate an optional component and the
 character `':'` stands for itself.

 

 view-name is the `name name` of a `FileAttributeView` that identifies a set of file attributes. If not
 specified then it defaults to `"basic"`, the name of the file
 attribute view that identifies the basic set of file attributes common to
 many file systems. attribute-name is the name of the attribute
 within the set.

 

 The `options` array may be used to indicate how symbolic links
 are handled for the case that the file is a symbolic link. By default,
 symbolic links are followed and the file attribute of the final target
 of the link is set. If the option `NOFOLLOW_LINKS
 NOFOLLOW_LINKS` is present then symbolic links are not followed.

 

 **Usage Example:**
 Suppose we want to set the DOS "hidden" attribute:
 {@snippet lang=java :
     Path path = ...
     Files.setAttribute(path, "dos:hidden", true);
 }

**参数**

- **path** — the path to the file
- **attribute** — the attribute to set
- **value** — the attribute value
- **options** — options indicating how symbolic links are handled

**返回**

- the given path

**异常**

- **UnsupportedOperationException** — if the attribute view is not available
- **IllegalArgumentException** — if the attribute name is not specified, or is not recognized, or the attribute value is of the correct type but has an inappropriate value
- **ClassCastException** — if the attribute value is not of the expected type or is a collection containing elements that are not of the expected type
- **IOException** — if an I/O error occurs
