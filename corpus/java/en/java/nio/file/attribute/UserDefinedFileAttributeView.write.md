---
id: "java-en-function-userdefinedfileattributeview-write"
language: "java"
lang: "en"
category: "function"
name: "UserDefinedFileAttributeView.write"
signature: "int write(String name, ByteBuffer src) throws IOException"
title: "UserDefinedFileAttributeView.write"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/UserDefinedFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UserDefinedFileAttributeView.write

```java
int write(String name, ByteBuffer src) throws IOException
```

Writes the value of a user-defined attribute from a buffer.

 

 This method writes the value of the attribute from a given buffer as
 a sequence of bytes. The size of the value to transfer is `r`,
 where `r` is the number of bytes remaining in the buffer, that is
 `src.remaining()`. The sequence of bytes is transferred from the
 buffer starting at index `p`, where `p` is the buffer's
 position. Upon return, the buffer's position will be equal to `p + n`, where `n` is the number of bytes transferred; its limit
 will not have changed.

 

 If an attribute of the given name already exists then its value is
 replaced. If the attribute does not exist then it is created. It
 is implementation specific if a test to check for the existence of the
 attribute and the creation of attribute are atomic with respect to other
 file system activities.

 

 Where there is insufficient space to store the attribute, or the
 attribute name or value exceed an implementation specific maximum size
 then an `IOException` is thrown.

 

 **Usage Example:**
 Suppose we want to write a file's MIME type as a user-defined attribute:
 {@snippet lang=java :
     UserDefinedFileAttributeView view =
         Files.getFileAttributeView(path, UserDefinedFileAttributeView.class);
     view.write("user.mimetype", Charset.defaultCharset().encode("text/html"));
 }

**参数**

- **name** — The attribute name
- **src** — The buffer containing the attribute value

**返回**

- The number of bytes written, possibly zero

**异常**

- **IOException** — If an I/O error occurs
