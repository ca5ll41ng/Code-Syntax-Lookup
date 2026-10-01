---
id: "java-en-function-zipentry-setcomment"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setComment"
signature: "public void setComment(String comment)"
title: "ZipEntry.setComment"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setComment

```java
public void setComment(String comment)
```

Sets the optional comment string for the entry. If `comment` is an
 empty string or `null` then the entry will have no comment.

**参数**

- **comment** — the comment string, or an empty string or null for no comment

**异常**

- **IllegalArgumentException** — if the combined length of the specified entry comment, the `getName() entry name`, the `getExtra() extra field data`, and the `CENHDR CEN Header size` exceeds 65,535 bytes.

**参见**

- #getComment()
