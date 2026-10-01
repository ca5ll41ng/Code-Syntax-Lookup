---
id: "java-en-function-java-util-logging-filehandler"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.FileHandler"
title: "FileHandler"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/FileHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileHandler

Simple file logging `Handler`.
 

 The `FileHandler` can either write to a specified file,
 or it can write to a rotating set of files.
 

 For a rotating set of files, as each file reaches a given size
 limit, it is closed, rotated out, and a new file opened.
 Successively older files are named by adding "0", "1", "2",
 etc. into the base filename.
 

 By default buffering is enabled in the IO libraries but each log
 record is flushed out when it is complete.
 

 By default the `XMLFormatter` class is used for formatting.
 

 **Configuration:**
 By default each `FileHandler` is initialized using the following
 `LogManager` configuration properties where ``
 refers to the fully-qualified class name of the handler.
 If properties are not defined
 (or have invalid values) then the specified default values are used.
 
 
-    &lt;handler-name&gt;.level
        specifies the default level for the `Handler`
        (defaults to `Level.ALL`). 
 
-    &lt;handler-name&gt;.filter
        specifies the name of a `Filter` class to use
        (defaults to no `Filter`). 
 
-    &lt;handler-name&gt;.formatter
        specifies the name of a `Formatter` class to use
        (defaults to `java.util.logging.XMLFormatter`) 
 
-    &lt;handler-name&gt;.encoding
        the name of the character set encoding to use (defaults to
        the default platform encoding). 
 
-    &lt;handler-name&gt;.limit
        specifies an approximate maximum amount to write (in bytes)
        to any one file.  If this is zero, then there is no limit.
        (Defaults to no limit). 
 
-    &lt;handler-name&gt;.count
        specifies how many output files to cycle through (defaults to 1). 
 
-    &lt;handler-name&gt;.pattern
        specifies a pattern for generating the output file name.  See
        below for details. (Defaults to "%h/java%u.log"). 
 
-    &lt;handler-name&gt;.append
        specifies whether the FileHandler should append onto
        any existing files (defaults to false). 
 
-    &lt;handler-name&gt;.maxLocks
        specifies the maximum number of concurrent locks held by
        FileHandler (defaults to 100). 
 

 

 For example, the properties for `FileHandler` would be:
 
 
-    java.util.logging.FileHandler.level=INFO 
 
-    java.util.logging.FileHandler.formatter=java.util.logging.SimpleFormatter 
 

 

 For a custom handler, e.g. com.foo.MyHandler, the properties would be:
 
 
-    com.foo.MyHandler.level=INFO 
 
-    com.foo.MyHandler.formatter=java.util.logging.SimpleFormatter 
 

 

 A pattern consists of a string that includes the following special
 components that will be replaced at runtime:
 
 
-     "/"    the local pathname separator 
 
-      "%t"   the system temporary directory 
 
-      "%h"   the value of the "user.home" system property 
 
-      "%g"   the generation number to distinguish rotated logs 
 
-      "%u"   a unique number to resolve conflicts 
 
-      "%%"   translates to a single percent sign "%" 
 

 If no "%g" field has been specified and the file count is greater
 than one, then the generation number will be added to the end of
 the generated filename, after a dot.
 

 Thus for example a pattern of "%t/java%g.log" with a count of 2
 would typically cause log files to be written on Solaris to
 /var/tmp/java0.log and /var/tmp/java1.log whereas on Windows 95 they
 would be typically written to C:\TEMP\java0.log and C:\TEMP\java1.log
 

 Generation numbers follow the sequence 0, 1, 2, etc.
 

 Normally the "%u" unique field is set to 0.  However, if the `FileHandler`
 tries to open the filename and finds the file is currently in use by
 another process it will increment the unique number field and try
 again.  This will be repeated until `FileHandler` finds a file name that
 is  not currently in use. If there is a conflict and no "%u" field has
 been specified, it will be added at the end of the filename after a dot.
 (This will be after any automatically added generation number.)
 

 Thus if three processes were all trying to log to fred%u.%g.txt then
 they  might end up using fred0.0.txt, fred1.0.txt, fred2.0.txt as
 the first file in their rotating sequences.
 

 Note that the use of unique ids to avoid conflicts is only guaranteed
 to work reliably when using a local disk file system.

> *Since 1.4*
