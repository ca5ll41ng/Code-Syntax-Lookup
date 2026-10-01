---
id: "java-en-function-java-nio-charset-charset"
language: "java"
lang: "en"
category: "function"
name: "java.nio.charset.Charset"
title: "Charset"
directive: "type"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset

A named mapping between sequences of sixteen-bit Unicode code units and sequences of
 bytes.  This class defines methods for creating decoders and encoders and
 for retrieving the various names associated with a charset.  Instances of
 this class are immutable.

 

 This class also defines static methods for testing whether a particular
 charset is supported, for locating charset instances by name, and for
 constructing a map that contains every charset for which support is
 available in the current Java virtual machine.  Support for new charsets can
 be added via the service-provider interface defined in the `java.nio.charset.spi.CharsetProvider` class.

 

 All of the methods defined in this class are safe for use by multiple
 concurrent threads.

 Charset names

 

 Charsets are named by strings composed of the following characters:

 

   
-  The uppercase letters `'A'` through `'Z'`
        ('&#92;u0041'&nbsp;through&nbsp;'&#92;u005a'),

   
-  The lowercase letters `'a'` through `'z'`
        ('&#92;u0061'&nbsp;through&nbsp;'&#92;u007a'),

   
-  The digits `'0'` through `'9'`
        ('&#92;u0030'&nbsp;through&nbsp;'&#92;u0039'),

   
-  The dash character `'-'`
        ('&#92;u002d',&nbsp;HYPHEN-MINUS),

   
-  The plus character `'+'`
        ('&#92;u002b',&nbsp;PLUS SIGN),

   
-  The period character `'.'`
        ('&#92;u002e',&nbsp;FULL STOP),

   
-  The colon character `':'`
        ('&#92;u003a',&nbsp;COLON), and

   
-  The underscore character `'_'`
        ('&#92;u005f',&nbsp;LOW&nbsp;LINE).

 

 A charset name must begin with either a letter or a digit.  The empty string
 is not a legal charset name.  Charset names are not case-sensitive; that is,
 case is always ignored when comparing charset names.  Charset names
 generally follow the conventions documented in RFC&nbsp;2278:&nbsp;IANA Charset
 Registration Procedures.

 

 Every charset has a canonical name and may also have one or more
 aliases.  The canonical name is returned by the `name() name` method
 of this class.  Canonical names are, by convention, usually in upper case.
 The aliases of a charset are returned by the `aliases() aliases`
 method.

 

Some charsets have an historical name that is defined for
 compatibility with previous versions of the Java platform.  A charset's
 historical name is either its canonical name or one of its aliases.  The
 historical name is returned by the `getEncoding()` methods of the
 `getEncoding InputStreamReader` and `getEncoding OutputStreamWriter` classes.

 

 If a charset listed in the IANA Charset
 Registry is supported by an implementation of the Java platform then
 its canonical name must be the name listed in the registry. Many charsets
 are given more than one name in the registry, in which case the registry
 identifies one of the names as MIME-preferred.  If a charset has more
 than one registry name then its canonical name must be the MIME-preferred
 name and the other names in the registry must be valid aliases.  If a
 supported charset is not listed in the IANA registry then its canonical name
 must begin with one of the strings `"X-"` or `"x-"`.

 

 The IANA charset registry does change over time, and so the canonical
 name and the aliases of a particular charset may also change over time.  To
 ensure compatibility it is recommended that no alias ever be removed from a
 charset, and that if the canonical name of a charset is changed then its
 previous canonical name be made into an alias.

 Standard charsets

 

 Every implementation of the Java platform is required to support the
 following standard charsets.  Consult the release documentation for your
 implementation to see if any other charsets are supported.  The behavior
 of such optional charsets may differ between implementations.

 
 Description of standard charsets
 
 CharsetDescription
 
 
 `US-ASCII`
     Seven-bit ASCII, a.k.a. `ISO646-US`,
         a.k.a. the Basic Latin block of the Unicode character set
 ISO-8859-1&nbsp;&nbsp;
     ISO Latin Alphabet No. 1, a.k.a. `ISO-LATIN-1`
 `UTF-8`
     Eight-bit UCS Transformation Format
 `UTF-16BE`
     Sixteen-bit UCS Transformation Format,
         big-endian byte&nbsp;order
 `UTF-16LE`
     Sixteen-bit UCS Transformation Format,
         little-endian byte&nbsp;order
 `UTF-16`
     Sixteen-bit UCS Transformation Format,
         byte&nbsp;order identified by an optional byte-order mark
 `UTF-32BE`
     Thirty-two-bit UCS Transformation Format,
         big-endian byte&nbsp;order
 `UTF-32LE`
     Thirty-two-bit UCS Transformation Format,
         little-endian byte&nbsp;order
 `UTF-32`
     Thirty-two-bit UCS Transformation Format,
         byte&nbsp;order identified by an optional byte-order mark
 
 

 

 The `UTF-8` charset is specified by RFC&nbsp;2279; the
 transformation format upon which it is based is specified in
 ISO&nbsp;10646-1 and is also described in the Unicode
 Standard.

 

 The `UTF-16` charsets are specified by RFC&nbsp;2781; the
 transformation formats upon which they are based are specified in
 ISO&nbsp;10646-1 and are also described in the Unicode
 Standard.

 

 The `UTF-32` charsets are based upon transformation formats
 which are specified in
 ISO&nbsp;10646-1 and are also described in the Unicode
 Standard.

 

 The `UTF-16` and `UTF-32` charsets use sixteen-bit and thirty-two-bit
 quantities respectively, and are
 therefore sensitive to byte order.  In these encodings the byte order of a
 stream may be indicated by an initial byte-order mark represented by
 the Unicode character `U+FEFF`.  Byte-order marks are handled
 as follows:

 

   
- 

 When decoding, the `UTF-16BE`, `UTF-16LE`,
   `UTF-32BE`, and `UTF-32LE`
   charsets interpret the initial byte-order marks as a ZERO-WIDTH
   NON-BREAKING SPACE; when encoding, they do not write
   byte-order marks. 

   
- 

 When decoding, the `UTF-16` and `UTF-32` charsets interpret the
   byte-order mark at the beginning of the input stream to indicate the
   byte-order of the stream but defaults to big-endian if there is no
   byte-order mark; when encoding, it uses big-endian byte order and writes
   a big-endian byte-order mark. 

 

 In any case, byte order marks occurring after the first element of an
 input sequence are not omitted since the same code is used to represent
 ZERO-WIDTH NON-BREAKING SPACE.

 

 Every instance of the Java virtual machine has a default charset, which
 is `UTF-8` unless changed in an implementation specific manner. Refer to
 `defaultCharset` for more detail.

 

 The `StandardCharsets` class defines constants for each of the
 standard charsets.

 Terminology

 

 The name of this class is taken from the terms used in
 RFC&nbsp;2278.
 In that document a charset is defined as the combination of
 one or more coded character sets and a character-encoding scheme.
 (This definition is confusing; some other software systems define
 charset as a synonym for coded character set.)

 

 A coded character set is a mapping between a set of abstract
 characters and a set of integers.  US-ASCII, ISO&nbsp;8859-1,
 JIS&nbsp;X&nbsp;0201, and Unicode are examples of coded character sets.

 

 Some standards have defined a character set to be simply a
 set of abstract characters without an associated assigned numbering.
 An alphabet is an example of such a character set.  However, the subtle
 distinction between character set and coded character set
 is rarely used in practice; the former has become a short form for the
 latter, including in the Java API specification.

 

 A character-encoding scheme is a mapping between one or more
 coded character sets and a set of octet (eight-bit byte) sequences.
 UTF-8, UTF-16, ISO&nbsp;2022, and EUC are examples of
 character-encoding schemes.  Encoding schemes are often associated with
 a particular coded character set; UTF-8, for example, is used only to
 encode Unicode.  Some schemes, however, are associated with multiple
 coded character sets; EUC, for example, can be used to encode
 characters in a variety of Asian coded character sets.

 

 When a coded character set is used exclusively with a single
 character-encoding scheme then the corresponding charset is usually
 named for the coded character set; otherwise a charset is usually named
 for the encoding scheme and, possibly, the locale of the coded
 character sets that it supports.  Hence `US-ASCII` is both the
 name of a coded character set and of the charset that encodes it, while
 `EUC-JP` is the name of the charset that encodes the
 JIS&nbsp;X&nbsp;0201, JIS&nbsp;X&nbsp;0208, and JIS&nbsp;X&nbsp;0212
 coded character sets for the Japanese language.

 

 The native character encoding of the Java programming language is
 UTF-16.  A charset in the Java platform therefore defines a mapping
 between sequences of sixteen-bit UTF-16 code units (that is, sequences
 of chars) and sequences of bytes. 

      RFC 2278: IANA Charset Registration Procedures
      RFC 2279: UTF-8, a transformation format of ISO 10646
      RFC 2781: UTF-16, an encoding of ISO 10646

**参见**

- CharsetDecoder
- CharsetEncoder
- java.nio.charset.spi.CharsetProvider
- java.lang.Character

> *Since 1.4*
