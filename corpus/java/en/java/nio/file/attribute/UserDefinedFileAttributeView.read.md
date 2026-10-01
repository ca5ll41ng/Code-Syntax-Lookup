---
id: "java-en-function-userdefinedfileattributeview-read"
language: "java"
lang: "en"
category: "function"
name: "UserDefinedFileAttributeView.read"
signature: "int read(String name, ByteBuffer dst) throws IOException"
title: "UserDefinedFileAttributeView.read"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/UserDefinedFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UserDefinedFileAttributeView.read

```java
int read(String name, ByteBuffer dst) throws IOException
```

Read the value of a user-defined attribute into a buffer.

 

 This method reads the value of the attribute into the given buffer
 as a sequence of bytes, failing if the number of bytes remaining in
 the buffer is insufficient to read the complete attribute value. The
 number of bytes transferred into the buffer is `n`, where `n`
 is the size of the attribute value. The first byte in the sequence is at
 index `p` and the last byte is at index `p + n - 1`, where
 `p` is the buffer's position. Upon return the buffer's position
 will be equal to `p + n`; its limit will not have changed.

 

 **Usage Example:**
 Suppose we want to read a file's MIME type that is stored as a user-defined
 attribute with the name "`user.mimetype`".
 {@snippet lang=java :
     UserDefinedFileAttributeView view =
         Files.getFileAttributeView(path, UserDefinedFileAttributeView.class);
     String name = "user.mimetype";
     ByteBuffer buf = ByteBuffer.allocate(view.size(name));
     view.read(name, buf);
     buf.flip();
     String value = Charset.defaultCharset().decode(buf).toString();
 }

**参数**

- **name** — The attribute name
- **dst** — The destination buffer

**返回**

- The number of bytes read, possibly zero

**异常**

- **IllegalArgumentException** — If the destination buffer is read-only
- **IOException** — If an I/O error occurs or there is insufficient space in the destination buffer for the attribute value

**参见**

- #size
