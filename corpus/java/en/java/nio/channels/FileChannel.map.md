---
id: "java-en-function-filechannel-map"
language: "java"
lang: "en"
category: "function"
name: "FileChannel.map"
signature: "public abstract MappedByteBuffer map(MapMode mode, long position, long size) throws IOException"
title: "FileChannel.map"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileChannel.map

```java
public abstract MappedByteBuffer map(MapMode mode, long position, long size) throws IOException
```

Maps a region of this channel's file directly into memory.

 

 The `mode` parameter specifies how the region of the file is
 mapped and may be one of the following modes:

 

   
- 

 Read-only: Any attempt to modify the resulting buffer
   will cause a `java.nio.ReadOnlyBufferException` to be thrown.
   (`READ_ONLY MapMode.READ_ONLY`) 

   
- 

 Read/write: Changes made to the resulting buffer will
   eventually be propagated to the file; they may or may not be made
   visible to other programs that have mapped the same file.  (`READ_WRITE MapMode.READ_WRITE`) 

   
- 

 Private: Changes made to the resulting buffer will not
   be propagated to the file and will not be visible to other programs
   that have mapped the same file; instead, they will cause private
   copies of the modified portions of the buffer to be created.  (`PRIVATE MapMode.PRIVATE`) 

 

 

 An implementation may support additional map modes.

 

 For a read-only mapping, this channel must have been opened for
 reading; for a read/write or private mapping, this channel must have
 been opened for both reading and writing.

 

 The `MappedByteBuffer mapped byte buffer`
 returned by this method will have a position of zero and a limit and
 capacity of `size`; its mark will be undefined.  The buffer and
 the mapping that it represents will remain valid until the buffer itself
 is garbage-collected.

 

 A mapping, once established, is not dependent upon the file channel
 that was used to create it.  Closing the channel, in particular, has no
 effect upon the validity of the mapping.

 

 Many of the details of memory-mapped files are inherently dependent
 upon the underlying operating system and are therefore unspecified.  The
 behavior of this method when the requested region is not completely
 contained within this channel's file is unspecified.  Whether changes
 made to the content or size of the underlying file, by this program or
 another, are propagated to the buffer is unspecified.  The rate at which
 changes to the buffer are propagated to the file is unspecified.

 

 For most operating systems, mapping a file into memory is more
 expensive than reading or writing a few tens of kilobytes of data via
 the usual `read read` and `write write` methods.  From the
 standpoint of performance it is generally only worth mapping relatively
 large files into memory.

**参数**

- **mode** — One of the constants `READ_ONLY READ_ONLY`, `READ_WRITE READ_WRITE`, or `PRIVATE PRIVATE` defined in the `MapMode` class, according to whether the file is to be mapped read-only, read/write, or privately (copy-on-write), respectively, or an implementation specific map mode
- **position** — The position within the file at which the mapped region is to start; must be non-negative
- **size** — The size of the region to be mapped; must be non-negative and no greater than `MAX_VALUE`

**返回**

- The mapped byte buffer

**异常**

- **NonReadableChannelException** — If the `mode` is `READ_ONLY READ_ONLY` or an implementation specific map mode requiring read access, but this channel was not opened for reading
- **NonWritableChannelException** — If the `mode` is `READ_WRITE READ_WRITE`, `PRIVATE PRIVATE` or an implementation specific map mode requiring write access, but this channel was not opened for both reading and writing
- **IllegalArgumentException** — If the preconditions on the parameters do not hold
- **UnsupportedOperationException** — If an unsupported map mode is specified
- **IOException** — If some other I/O error occurs

**参见**

- java.nio.channels.FileChannel.MapMode
- java.nio.MappedByteBuffer
