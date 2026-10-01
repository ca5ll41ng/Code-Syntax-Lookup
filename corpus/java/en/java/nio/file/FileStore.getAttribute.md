---
id: "java-en-function-filestore-getattribute"
language: "java"
lang: "en"
category: "function"
name: "FileStore.getAttribute"
signature: "public abstract Object getAttribute(String attribute) throws IOException"
title: "FileStore.getAttribute"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore.getAttribute

```java
public abstract Object getAttribute(String attribute) throws IOException
```

Reads the value of a file store attribute.

 

 The `attribute` parameter identifies the attribute to be read
 and takes the form:
 
 view-name**:**attribute-name
 
 where the character `':'` stands for itself.

 

 view-name is the `name name` of
 a `FileStore AttributeView` that identifies a set of file attributes.
 attribute-name is the name of the attribute.

 

 **Usage Example:**
 Suppose we want to know if ZFS compression is enabled (assuming the "zfs"
 view is supported):
 {@snippet lang=java :
     boolean compression = (Boolean)fs.getAttribute("zfs:compression");
 }

**参数**

- **attribute** — the attribute to read

**返回**

- the attribute value; `null` may be valid for some attributes

**异常**

- **UnsupportedOperationException** — if the attribute view is not available or it does not support reading the attribute
- **IOException** — if an I/O error occurs
