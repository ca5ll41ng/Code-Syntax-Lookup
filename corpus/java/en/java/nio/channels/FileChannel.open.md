---
id: "java-en-function-filechannel-open"
language: "java"
lang: "en"
category: "function"
name: "FileChannel.open"
signature: "public static FileChannel open(Path path, Set<? extends OpenOption> options, FileAttribute<?>... attrs) throws IOException"
title: "FileChannel.open"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileChannel.open

```java
public static FileChannel open(Path path, Set<? extends OpenOption> options, FileAttribute<?>... attrs) throws IOException
```

Opens or creates a file, returning a file channel to access the file.

 

 The `options` parameter determines how the file is opened.
 The `READ READ` and `WRITE
 WRITE` options determine if the file should be opened for reading and/or
 writing. If neither option (or the `APPEND APPEND`
 option) is contained in the array then the file is opened for reading.
 By default reading or writing commences at the beginning of the file.

 

 In the addition to `READ` and `WRITE`, the following
 options may be present:

 
 additional options
 
  Option Description 
 
 
 
    `APPEND APPEND` 
    If this option is present then the file is opened for writing and
     each invocation of the channel's `write` method first advances
     the position to the end of the file and then writes the requested
     data. Whether the advancement of the position and the writing of the
     data are done in a single atomic operation is system-dependent and
     therefore unspecified. The effect of `write(ByteBuffer,long) writing at a given position` with this option
     present is unspecified. This option may not be used in conjunction
     with the `READ` or `TRUNCATE_EXISTING` options. 
 
 
    `TRUNCATE_EXISTING TRUNCATE_EXISTING` 
    If this option is present then the existing file is truncated to
   a size of 0 bytes. This option is ignored when the file is opened only
   for reading. 
 
 
    `CREATE_NEW CREATE_NEW` 
    If this option is present then a new file is created, failing if
   the file already exists. When creating a file the check for the
   existence of the file and the creation of the file if it does not exist
   is atomic with respect to other file system operations. This option is
   ignored when the file is opened only for reading. 
 
 
    `CREATE CREATE` 
    If this option is present then an existing file is opened if it
   exists, otherwise a new file is created. When creating a file the check
   for the existence of the file and the creation of the file if it does
   not exist is atomic with respect to other file system operations. This
   option is ignored if the `CREATE_NEW` option is also present or
   the file is opened only for reading. 
 
 
    `DELETE_ON_CLOSE DELETE_ON_CLOSE` 
    When this option is present then the implementation makes a
   best effort attempt to delete the file when closed by
   the `close close` method. If the `close` method is not
   invoked then a best effort attempt is made to delete the file
   when the Java virtual machine terminates. 
 
 
   `SPARSE SPARSE` 
    When creating a new file this option is a hint that the
   new file will be sparse. This option is ignored when not creating
   a new file. 
 
 
    `SYNC SYNC` 
    Requires that every update to the file's content or metadata be
   written synchronously to the underlying storage device. (see  Synchronized I/O file
   integrity). 
 
 
    `DSYNC DSYNC` 
    Requires that every update to the file's content be written
   synchronously to the underlying storage device. (see  Synchronized I/O file
   integrity). 
 
 
 

 

 An implementation may also support additional options.

 

 The `attrs` parameter is an optional array of file `FileAttribute file-attributes` to set atomically when creating the file.

 

 The new channel is created by invoking the `newFileChannel newFileChannel` method on the
 provider that created the `Path`.

**参数**

- **path** — The path of the file to open or create
- **options** — Options specifying how the file is opened
- **attrs** — An optional list of file attributes to set atomically when creating the file

**返回**

- A new file channel

**异常**

- **IllegalArgumentException** — If the set contains an invalid combination of options
- **UnsupportedOperationException** — If the `path` is associated with a provider that does not support creating file channels, or an unsupported open option is specified, or the array contains an attribute that cannot be set atomically when creating the file
- **FileAlreadyExistsException** — If a file of that name already exists and the `CREATE_NEW CREATE_NEW` option is specified and the file is being opened for writing (optional specific exception)
- **IOException** — If an I/O error occurs

> *Since 1.7*
