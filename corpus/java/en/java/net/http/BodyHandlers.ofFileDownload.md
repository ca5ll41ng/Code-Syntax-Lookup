---
id: "java-en-function-bodyhandlers-offiledownload"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.ofFileDownload"
signature: "public static BodyHandler<Path> ofFileDownload(Path directory, OpenOption... openOptions)"
title: "BodyHandlers.ofFileDownload"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.ofFileDownload

```java
public static BodyHandler<Path> ofFileDownload(Path directory, OpenOption... openOptions)
```

Returns a `BodyHandler` that returns a
 `BodySubscriber BodySubscriber`&lt;`Path`&gt;
 where the download directory is specified, but the filename is
 obtained from the `Content-Disposition` response header. The
 `Content-Disposition` header must specify the attachment
 type and must also contain a filename parameter. If the
 filename specifies multiple path components only the final component
 is used as the filename (with the given directory name).

 

 When the `HttpResponse` object is returned, the body has
 been completely written to the file and `body` returns a
 `Path` object for the file. The returned `Path` is the
 combination of the supplied directory name and the file name supplied
 by the server. If the destination directory does not exist or cannot
 be written to, then the response will fail with an `IOException`.

**参数**

- **directory** — the directory to store the file in
- **openOptions** — open options used when opening the file

**返回**

- a response body handler

**异常**

- **IllegalArgumentException** — if the given path does not exist, is not of the default file system, is not a directory, is not writable, or if an invalid set of open options are specified
