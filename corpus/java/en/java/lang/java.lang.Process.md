---
id: "java-en-function-java-lang-process"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Process"
title: "Process"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Process.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Process

`Process` provides control of native processes started by
 `ProcessBuilder.start` and `Runtime.exec`.
 The class provides methods for performing input from the process, performing
 output to the process, waiting for the process to complete,
 checking the exit status of the process, and destroying (killing)
 the process.
 The `start` and
 `exec(String[],String[],File) Runtime.exec`
 methods create a native process and return an instance of a
 subclass of `Process` that can be used to control the process
 and obtain information about it.

 

The methods that create processes may not work well for special
 processes on certain native platforms, such as native windowing
 processes, daemon processes, Win16/DOS processes on Microsoft
 Windows, or shell scripts.

 

By default, the created process does not have its own terminal
 or console.  All its standard I/O (i.e. stdin, stdout, stderr)
 operations will be redirected to the parent process, where they can
 be accessed via the streams obtained using the methods
 `getOutputStream`,
 `getInputStream`, and
 `getErrorStream`.
 The I/O streams of characters and lines can be written and read using the methods
 `outputWriter`, `outputWriter`,
 `inputReader`, `inputReader`,
 `errorReader`, and `errorReader`.
 The parent process uses these streams to feed input to and get output
 from the process.  Because some native platforms only provide
 limited buffer size for standard input and output streams, failure
 to promptly write the input stream or read the output stream of
 the process may cause the process to block, or even deadlock.

 

Where desired, 
 process I/O can also be redirected
 using methods of the `ProcessBuilder` class.

 

There is no requirement that the process represented by a `Process` object execute asynchronously or concurrently with respect
 to the Java process that owns the `Process` object.

 

As of 1.5, `start` is the preferred way
 to create a `Process`.

 

Subclasses of Process should ensure that each overridden method
 invokes the superclass method.
 For example, if `close() close` is overridden, the subclass should
 ensure that `Process.close()` is called.
 {@snippet lang = "java" :
 public class LoggingProcess extends java.lang.Process {
     ...
     public void close() throws IOException  {
         try {
             super.close();
         } catch (IOException ex) {
             LOGGER.log(ex);
          } finally {
             LOGGER.log("process closed");
         }
     }
     ...
 }
 }

 

Subclasses of Process that wrap another Process instance
 should override and delegate the `onExit` and
 `toHandle` methods to provide a fully functional Process including the
 `pid() process id`,
 `info() information about the process`,
 `children() direct children`, and
 `descendants() direct children plus descendants of those children` of the process.
 Delegating to the underlying Process or ProcessHandle is typically
 easiest and most efficient.

 Resource Usage
 `start() Starting a process` uses resources in both the invoking process and the invoked
 process and for the communication streams between them.
 The resources to control the process and for communication between the processes are retained
 until there are no longer any references to the Process or the input, error, and output streams
 or readers, or they have been closed. The Process `close close` method closes
 all the streams and terminates the process to release the resources. Using try-with-resources
 will ensure the process is terminated when the try-with-resources block exits.

 

The process is not killed when there are no more references to the `Process` object,
 but rather the process continues executing asynchronously.
 The process implementation closes file descriptors and handles for streams
 that are no longer referenced to prevent leaking operating system resources.
 Processes that have terminated or been terminated are monitored and their resources released.

 

Streams should be closed when they are no longer needed, to avoid delaying
 releasing the operating system resources.
 `Try-with-resources` can be used to open and close the streams.
 

For example, to capture the output of a program known to produce some output and then exit:
 {@snippet lang = "java" :
 List capture(List args) throws Exception {
     ProcessBuilder pb = new ProcessBuilder(args);
     try (Process process = pb.start();
          BufferedReader in = process.inputReader()) {
         List captured = in.readAllLines();
         int status = process.waitFor();
         if (status != 0) {
             throw new RuntimeException("Process %d: %s failed with %d"
                         .formatted(process.pid(), args, status));
         }
         return captured;
     }
 }
 }
 

Stream resources (file descriptor or handle) are always paired; one in the invoking process
 and the other end of that connection in the invoked process.
 Closing a stream at either end terminates communication but does not have any direct effect
 on the other Process. The closing of the stream typically results in the other process exiting.

 

 `destroy Destroying a process` signals the operating system to terminate the process.
 It is up to the operating system to clean up and release the resources of that process.
 Typically, file descriptors and handles are closed. When they are closed, any connections to
 other processes are terminated and file descriptors and handles in the invoking process signal
 end-of-file or closed. Usually, that is seen as an end-of-file or an exception.

> *Since 1.0*
