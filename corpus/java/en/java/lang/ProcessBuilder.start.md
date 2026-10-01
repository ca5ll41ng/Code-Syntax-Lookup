---
id: "java-en-function-processbuilder-start"
language: "java"
lang: "en"
category: "function"
name: "ProcessBuilder.start"
signature: "public Process start() throws IOException"
title: "ProcessBuilder.start"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.start

```java
public Process start() throws IOException
```

Starts a new process using the attributes of this process builder.

 

The new process will
 invoke the command and arguments given by `command`,
 in a working directory as given by `directory`,
 with a process environment as given by `environment`.

 

This method checks that the command is a valid operating
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

 

Subsequent modifications to this process builder will not
 affect the returned `Process`.

 In the reference implementation, logging of the command, arguments, directory,
 stack trace, and process id can be enabled.
 The logged information may contain sensitive security information and the potential exposure
 of the information should be carefully reviewed.
 Logging of the information is enabled when the logging level of the
 `getLogger(String) system logger` named `java.lang.ProcessBuilder`
 is `DEBUG Level.DEBUG` or `TRACE Level.TRACE`.
 When enabled for `Level.DEBUG` only the process id, directory, command, and stack trace
 are logged.
 When enabled for `Level.TRACE` the arguments are included with the process id,
 directory, command, and stack trace.

**返回**

- a new `Process` object for managing the subprocess

**异常**

- **NullPointerException** — if an element of the command list is null
- **IndexOutOfBoundsException** — if the command is an empty list (has size `0`)
- **UnsupportedOperationException** — If the operating system does not support the creation of processes.
- **IOException** — if an I/O error occurs

**参见**

- Runtime#exec(String[], String[], java.io.File)
