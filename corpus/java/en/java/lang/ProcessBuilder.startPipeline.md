---
id: "java-en-function-processbuilder-startpipeline"
language: "java"
lang: "en"
category: "function"
name: "ProcessBuilder.startPipeline"
signature: "public static List<Process> startPipeline(List<ProcessBuilder> builders) throws IOException"
title: "ProcessBuilder.startPipeline"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.startPipeline

```java
public static List<Process> startPipeline(List<ProcessBuilder> builders) throws IOException
```

Starts a Process for each ProcessBuilder, creating a pipeline of
 processes linked by their standard output and standard input streams.
 The attributes of each ProcessBuilder are used to start the respective
 process except that as each process is started, its standard output
 is directed to the standard input of the next.  The redirects for standard
 input of the first process and standard output of the last process are
 initialized using the redirect settings of the respective ProcessBuilder.
 All other `ProcessBuilder` redirects should be
 `PIPE Redirect.PIPE`.
 

 All input and output streams between the intermediate processes are
 not accessible.
 The `getOutputStream standard input` of all processes
 except the first process are null output streams
 The `getInputStream standard output` of all processes
 except the last process are null input streams.
 

 The `redirectErrorStream` of each ProcessBuilder applies to the
 respective process.  If set to `true`, the error stream is written
 to the same stream as standard output.
 

 If starting any of the processes throws an Exception, all processes
 are forcibly destroyed.
 

 The `startPipeline` method performs the same checks on
 each ProcessBuilder as does the `start` method. Each new process
 invokes the command and arguments given by the respective process builder's
 `command`, in a working directory as given by its `directory`,
 with a process environment as given by its `environment`.
 

 Each process builder's command is checked to be a valid operating
 system command.  Which commands are valid is system-dependent,
 but at the very least the command must be a non-empty list of
 non-null strings.
 

 A minimal set of system dependent environment variables may
 be required to start a process on some operating systems.
 As a result, the subprocess may inherit additional environment variable
 settings beyond those in the process builder's `environment`.
 The minimal set of system dependent environment variables
 may override the values provided in the environment.
 

 Starting an operating system process is highly system-dependent.
 Among the many things that can go wrong are:
 
 
- The operating system program file was not found.
 
- Access to the program file was denied.
 
- The working directory does not exist.
 
- Invalid character in command argument, such as NUL.
 

 

 In such cases an exception will be thrown.  The exact nature
 of the exception is system-dependent, but it will always be a
 subclass of `IOException`.
 

 If the operating system does not support the creation of
 processes, an `UnsupportedOperationException` will be thrown.
 

 Subsequent modifications to any of the specified builders
 will not affect the returned `Process`.
 For example to count the unique imports for all the files in a file hierarchy
 on a Unix compatible platform:
 {@snippet lang = "java" :
     String directory = "/home/duke/src";
     ProcessBuilder[] builders = {
              new ProcessBuilder("find", directory, "-type", "f"),
              new ProcessBuilder("xargs", "grep", "-h", "^import "),
              new ProcessBuilder("awk", "{print $2;}"),
              new ProcessBuilder("sort", "-u")};
     List processes = ProcessBuilder.startPipeline( Arrays.asList(builders));
     Process last = processes.get(processes.size() - 1);
     try (InputStream is = last.getInputStream();
         Reader isr = new InputStreamReader(is);
         BufferedReader r = new BufferedReader(isr)) {
         long count = r.lines().count();
     }
 }

 In the reference implementation, logging of each process created can be enabled,
 see `start` for details.

**参数**

- **builders** — a List of ProcessBuilders

**返回**

- a `List`es started from the corresponding ProcessBuilder

**异常**

- **IllegalArgumentException** — any of the redirects except the standard input of the first builder and the standard output of the last builder are not `PIPE`.
- **NullPointerException** — if an element of the command list is null or if an element of the ProcessBuilder list is null or the builders argument is null
- **IndexOutOfBoundsException** — if the command is an empty list (has size `0`)
- **UnsupportedOperationException** — If the operating system does not support the creation of processes
- **IOException** — if an I/O error occurs

> *Since 9*
