---
id: "java-en-function-zipoutputstream-setcomment"
language: "java"
lang: "en"
category: "function"
name: "ZipOutputStream.setComment"
signature: "public void setComment(String comment)"
title: "ZipOutputStream.setComment"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipOutputStream.setComment

```java
public void setComment(String comment)
```

Sets the ZIP file comment. If `comment` is an empty string or
 `null` then the output will have no ZIP file comment.

**参数**

- **comment** — the comment string, or an empty string or null for no comment

**异常**

- **IllegalArgumentException** — if the length of the specified ZIP file comment is greater than 0xFFFF bytes or if the `comment` contains characters that cannot be mapped by the `Charset` used to encode entry names and comments
