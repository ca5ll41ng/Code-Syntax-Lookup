---
id: "java-en-function-java-lang-processbuilder-redirect"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ProcessBuilder.Redirect"
title: "Redirect"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Redirect

Represents a source of subprocess input or a destination of
 subprocess output.

 Each `Redirect` instance is one of the following:

 
 
- the special value `PIPE Redirect.PIPE`
 
- the special value `INHERIT Redirect.INHERIT`
 
- the special value `DISCARD Redirect.DISCARD`
 
- a redirection to read from a file, created by an invocation of
     `from Redirect.from`
 
- a redirection to write to a file,  created by an invocation of
     `to Redirect.to`
 
- a redirection to append to a file, created by an invocation of
     `appendTo Redirect.appendTo`
 

 

Each of the above categories has an associated unique
 `Type Type`.

> *Since 1.7*
