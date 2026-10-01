---
id: "java-en-function-java-util-zip-gzipinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.util.zip.GZIPInputStream"
title: "GZIPInputStream"
directive: "type"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/GZIPInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GZIPInputStream

This class implements a stream filter for decompressing GZIP file format data.

 GZIP file format
 The GZIP file format is specified by RFC 1952. The format, as specified in section 2.2 of
 the RFC, consists of a series of "members" that appear one after another in the stream with
 no additional information before, between, or after them. Each member consists of a header,
 followed by data that is compressed using the `deflate` algorithm, and then a trailer.
 

 This class is capable of reading a stream consisting of a series of members.
 

 Reading from the stream may read and buffer bytes from the underlying stream.
 This includes bytes that follow a member's trailer. Whether or not any additional bytes
 have been read past a member's trailer, the read methods on this class yield decompressed
 data from at most one member; data from multiple members is not combined in
 a single read operation.

 Thread safety
 `GZIPInputStream` is not safe for use by multiple concurrent threads. Any multithreaded
 concurrent use must be guarded by appropriate synchronization.

 The `close` method should be called to release resources used by this
 stream, either directly, or with the `try`-with-resources statement.

 After reading a member trailer, the `read(byte[], int, int) read` method calls
 `available` on the underlying stream to determine whether additional
 bytes are available that may represent a subsequent member. If the
 {@systemProperty jdk.util.gzip.tryReadAheadAfterTrailer} system property is set
 to `true`, then the call to `InputStream.available()` is skipped and the
 implementation instead attempts to read a subsequent member in the stream.
 `GZIPInputStream` depends on the return value of `InputStream.available()`
 to reliably process a stream with a series of members. Consequently, it may be necessary
 to set this property in environments that process streams with a series of members. By default,
 the `jdk.util.gzip.tryReadAheadAfterTrailer` system property is not set, and
 `InputStream.available()` gets called.

       RFC 1952: GZIP file format specification version 4.3

**参见**

- InflaterInputStream

> *Since 1.1*
