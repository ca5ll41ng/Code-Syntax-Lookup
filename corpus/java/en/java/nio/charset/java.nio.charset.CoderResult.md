---
id: "java-en-function-java-nio-charset-coderresult"
language: "java"
lang: "en"
category: "function"
name: "java.nio.charset.CoderResult"
title: "CoderResult"
directive: "type"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/CoderResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CoderResult

A description of the result state of a coder.

 

 A charset coder, that is, either a decoder or an encoder, consumes bytes
 (or characters) from an input buffer, translates them, and writes the
 resulting characters (or bytes) to an output buffer.  A coding process
 terminates for one of four categories of reasons, which are described by
 instances of this class:

 

   
- 

 Underflow is reported when there is no more input to be
   processed, or there is insufficient input and additional input is
   required.  This condition is represented by the unique result object
   `UNDERFLOW`, whose `isUnderflow() isUnderflow` method
   returns `true`.  

   
- 

 Overflow is reported when there is insufficient room
   remaining in the output buffer.  This condition is represented by the
   unique result object `OVERFLOW`, whose `isOverflow()
   isOverflow` method returns `true`.  

   
- 

 A malformed-input error is reported when a sequence of
   input units is not well-formed.  Such errors are described by instances of
   this class whose `isMalformed() isMalformed` method returns
   `true` and whose `length() length` method returns the length
   of the malformed sequence.  There is one unique instance of this class for
   all malformed-input errors of a given length.  

   
- 

 An unmappable-character error is reported when a sequence
   of input units denotes a character that cannot be represented in the
   output charset.  Such errors are described by instances of this class
   whose `isUnmappable() isUnmappable` method returns `true` and
   whose `length() length` method returns the length of the input
   sequence denoting the unmappable character.  There is one unique instance
   of this class for all unmappable-character errors of a given length.
   

 

 

 For convenience, the `isError() isError` method returns `true`
 for result objects that describe malformed-input and unmappable-character
 errors but `false` for those that describe underflow or overflow
 conditions.

> *Since 1.4*
