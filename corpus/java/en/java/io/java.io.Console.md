---
id: "java-en-function-java-io-console"
language: "java"
lang: "en"
category: "function"
name: "java.io.Console"
title: "Console"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Console.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Console

Methods to access the character-based console device, if any, associated
 with the current Java virtual machine.

 

 Whether a virtual machine's console exists is dependent upon the
 underlying platform and also upon the manner in which the virtual
 machine is invoked.  If the virtual machine is started from an
 interactive command line without redirecting the standard input and
 output streams, then its console will generally exist and will be
 connected to the keyboard and display from which the virtual machine
 was launched. If the standard input or standard output have been
 redirected (for example, to a file or to a pipe), or if the virtual
 machine was started from a background job scheduler, the console
 will not exist.
 

 If the console exists, then it is represented by a unique instance of this
 class which can be obtained by invoking the `console` method.
 If the console does not exist, that method will return `null`.
 

 Read and write operations are synchronized to guarantee the atomic
 completion of critical operations; therefore invoking methods
 `readLine`, `readPassword`, `format format`,
 `printf printf` as well as the read, format and write operations
 on the objects returned by `reader` and `writer` may
 block in multithreaded scenarios.
 

 Read and write operations use the `Charset`s specified by
 `#stdin.encoding stdin.encoding` and `#stdout.encoding stdout.encoding`, respectively. The
 `Charset` used for write operations can also be retrieved using
 the `charset` method. Since `Console` is intended for
 interactive use on a terminal, these charsets are typically the same.
 

 Operations that format strings are locale sensitive, using either the
 specified `Locale`, or the
 `#default_locale default format Locale` to produce localized
 formatted strings.
 

 Invoking `close()` on the objects returned by the `reader`
 and the `writer` will not close the underlying stream of those
 objects.
 

 The console-read methods return `null` when the end of the
 console input stream is reached, for example by typing control-D on
 Unix or control-Z on Windows.  Subsequent read operations will succeed
 if additional characters are later entered on the console's input
 device.
 

 Unless otherwise specified, passing a `null` argument to any method
 in this class will cause a `NullPointerException` to be thrown.
 

 **Security note:**
 If an application needs to read a password or other secure data, it should
 use `readPassword` or `readPassword` and
 manually zero the returned character array after processing to minimize the
 lifetime of sensitive data in memory.

 {@snippet lang=java :
 Console cons;
 char[] passwd;
 if ((cons = System.console()) != null &&
     (passwd = cons.readPassword("[%s]", "Password:")) != null) {
     ...
     java.util.Arrays.fill(passwd, ' ');
 }
 }

> *Since 1.6*
