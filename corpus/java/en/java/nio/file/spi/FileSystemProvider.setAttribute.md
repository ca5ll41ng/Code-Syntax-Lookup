---
id: "java-en-function-filesystemprovider-setattribute"
language: "java"
lang: "en"
category: "function"
name: "FileSystemProvider.setAttribute"
signature: "public abstract void setAttribute(Path path, String attribute, Object value, LinkOption... options) throws IOException"
title: "FileSystemProvider.setAttribute"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileSystemProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystemProvider.setAttribute

```java
public abstract void setAttribute(Path path, String attribute, Object value, LinkOption... options) throws IOException
```

Sets the value of a file attribute. This method works in exactly the
 manner specified by the `setAttribute` method.

**参数**

- **path** — the path to the file
- **attribute** — the attribute to set
- **value** — the attribute value
- **options** — options indicating how symbolic links are handled

**异常**

- **UnsupportedOperationException** — if the attribute view is not available
- **IllegalArgumentException** — if the attribute name is not specified, or is not recognized, or the attribute value is of the correct type but has an inappropriate value
- **ClassCastException** — If the attribute value is not of the expected type or is a collection containing elements that are not of the expected type
- **IOException** — If an I/O error occurs
