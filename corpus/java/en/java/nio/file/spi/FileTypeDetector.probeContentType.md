---
id: "java-en-function-filetypedetector-probecontenttype"
language: "java"
lang: "en"
category: "function"
name: "FileTypeDetector.probeContentType"
signature: "public abstract String probeContentType(Path path) throws IOException"
title: "FileTypeDetector.probeContentType"
directive: "method"
module: "java.base/java.nio.file.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/spi/FileTypeDetector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileTypeDetector.probeContentType

```java
public abstract String probeContentType(Path path) throws IOException
```

Probes the given file to guess its content type.

 

 The means by which this method determines the file type is highly
 implementation specific. It may simply examine the file name, it may use
 a file attribute,
 or it may examine bytes in the file.

 

 The probe result is the string form of the value of a
 Multipurpose Internet Mail Extension (MIME) content type as
 defined by RFC&nbsp;2045:
 Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet
 Message Bodies. The string must be parsable according to the
 grammar in the RFC 2045.

      RFC 2045: Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies

**参数**

- **path** — the path to the file to probe

**返回**

- The content type or `null` if the file type is not recognized

**异常**

- **IOException** — An I/O error occurs

**参见**

- java.nio.file.Files#probeContentType
