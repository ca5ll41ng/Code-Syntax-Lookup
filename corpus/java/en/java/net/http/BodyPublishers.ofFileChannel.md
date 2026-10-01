---
id: "java-en-function-bodypublishers-offilechannel"
language: "java"
lang: "en"
category: "function"
name: "BodyPublishers.ofFileChannel"
signature: "public static BodyPublisher ofFileChannel(FileChannel channel, long offset, long length) throws IOException"
title: "BodyPublishers.ofFileChannel"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublishers.ofFileChannel

```java
public static BodyPublisher ofFileChannel(FileChannel channel, long offset, long length) throws IOException
```

{@return a request body publisher whose body is the `length`
 content bytes read from the provided file `channel` starting
 from the specified `offset`}
 

 This method and the returned `BodyPublisher` do not modify the
 `channel`'s position, and do not close the `channel`. The
 caller is expected to close the `channel` when no longer needed.

 This method can be used to either publish just a region of a file as
 the request body or to publish different regions of a file
 concurrently. A typical usage would be to publish different regions
 of a file by creating a single instance of `FileChannel` and
 then send multiple concurrent `HttpRequest`s, each of which
 uses a new `ofFileChannel BodyPublisher` created from the same
 channel with a different, typically non-overlapping, range of bytes
 specified by offset and length.

**参数**

- **channel** — a file channel
- **offset** — the offset of the first byte
- **length** — the number of bytes to read from the file channel

**异常**

- **IndexOutOfBoundsException** — if the specified byte range is found to be `checkFromIndexSize(long, long, long) out of bounds` compared with the size of the file referred by the channel
- **IOException** — if the `size() channel's size` cannot be determined or the `channel` is closed

> *Since 26*
