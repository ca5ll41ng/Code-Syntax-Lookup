---
id: "java-en-function-asynchronousfilechannel-force"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousFileChannel.force"
signature: "public abstract void force(boolean metaData) throws IOException"
title: "AsynchronousFileChannel.force"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousFileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousFileChannel.force

```java
public abstract void force(boolean metaData) throws IOException
```

Forces any updates to this channel's file to be written to the storage
 device that contains it.

 

 If this channel's file resides on a local storage device then when
 this method returns it is guaranteed that all changes made to the file
 since this channel was created, or since this method was last invoked,
 will have been written to that device.  This is useful for ensuring that
 critical information is not lost in the event of a system crash.

 

 If the file does not reside on a local device then no such guarantee
 is made.

 

 The `metaData` parameter can be used to limit the number of
 I/O operations that this method is required to perform.  Passing
 `false` for this parameter indicates that only updates to the
 file's content need be written to storage; passing `true`
 indicates that updates to both the file's content and metadata must be
 written, which generally requires at least one more I/O operation.
 Whether this parameter actually has any effect is dependent upon the
 underlying operating system and is therefore unspecified.

 

 Invoking this method may cause an I/O operation to occur even if the
 channel was only opened for reading.  Some operating systems, for
 example, maintain a last-access time as part of a file's metadata, and
 this time is updated whenever the file is read.  Whether or not this is
 actually done is system-dependent and is therefore unspecified.

 

 This method is only guaranteed to force changes that were made to
 this channel's file via the methods defined in this class.

**参数**

- **metaData** — If `true` then this method is required to force changes to both the file's content and metadata to be written to storage; otherwise, it need only force content changes to be written

**异常**

- **ClosedChannelException** — If this channel is closed
- **IOException** — If some other I/O error occurs
