---
id: "java-en-function-zipentry-setextra"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setExtra"
signature: "public void setExtra(byte[] extra)"
title: "ZipEntry.setExtra"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setExtra

```java
public void setExtra(byte[] extra)
```

Sets the optional extra field data for the entry.

 

 Invoking this method may change this entry's last modification
 time, last access time and creation time, if the `extra` field
 data includes the extensible timestamp fields, such as `NTFS tag
 0x0001` or `Info-ZIP Extended Timestamp`, as specified in
 Info-ZIP
 Application Note 970311.

**参数**

- **extra** — The extra field data bytes

**异常**

- **IllegalArgumentException** — if the combined length of the specified extra field data, the `getName() entry name`, the `getComment() entry comment`, and the `CENHDR CEN Header size` exceeds 65,535 bytes.

**参见**

- #getExtra()
