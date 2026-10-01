---
id: "java-en-function-asynchronousfilechannel-open"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousFileChannel.open"
signature: "public static AsynchronousFileChannel open(Path file, Set<? extends OpenOption> options, ExecutorService executor, FileAttribute<?>... attrs) throws IOException"
title: "AsynchronousFileChannel.open"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousFileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousFileChannel.open

```java
public static AsynchronousFileChannel open(Path file, Set<? extends OpenOption> options, ExecutorService executor, FileAttribute<?>... attrs) throws IOException
```

Opens or creates a file for reading and/or writing, returning an
 asynchronous file channel to access the file.

 

 The `options` parameter determines how the file is opened.
 The `READ READ` and `WRITE
 WRITE` options determines if the file should be opened for reading and/or
 writing. If neither option is contained in the array then an existing file
 is opened for  reading.

 

 In addition to `READ` and `WRITE`, the following options
 may be present:

 
 additional options
 
  Option Description 
 
 
 
    `TRUNCATE_EXISTING TRUNCATE_EXISTING` 
    When opening an existing file, the file is first truncated to a
   size of 0 bytes. This option is ignored when the file is opened only
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

 

 The `executor` parameter is the `ExecutorService` to
 which tasks are submitted to handle I/O events and dispatch completion
 results for operations initiated on resulting channel.
 The nature of these tasks is highly implementation specific and so care
 should be taken when configuring the `Executor`. Minimally it
 should support an unbounded work queue and should not run tasks on the
 caller thread of the `execute execute` method.
 Shutting down the executor service while the channel is open results in
 unspecified behavior.

 

 The `attrs` parameter is an optional array of file `FileAttribute file-attributes` to set atomically when creating the file.

 

 The new channel is created by invoking the `newAsynchronousFileChannel newAsynchronousFileChannel`
 method on the provider that created the `Path`.

**参数**

- **file** — The path of the file to open or create
- **options** — Options specifying how the file is opened
- **executor** — The thread pool or `null` to associate the channel with the default thread pool
- **attrs** — An optional list of file attributes to set atomically when creating the file

**返回**

- A new asynchronous file channel

**异常**

- **IllegalArgumentException** — If the set contains an invalid combination of options
- **UnsupportedOperationException** — If the `file` is associated with a provider that does not support creating asynchronous file channels, or an unsupported open option is specified, or the array contains an attribute that cannot be set atomically when creating the file
- **FileAlreadyExistsException** — If a file of that name already exists and the `CREATE_NEW CREATE_NEW` option is specified and the file is being opened for writing (optional specific exception)
- **IOException** — If an I/O error occurs
