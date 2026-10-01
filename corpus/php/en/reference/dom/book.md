---
id: "en-php-guide-book-dom"
language: "php"
lang: "en"
category: "guide"
name: "book.dom"
title: "Document Object Model"
module: "dom"
source_url: "https://www.php.net/manual/en/book.dom.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Document Object Model

DOM

 Introduction  The DOM extension allows operations on XML and HTML documents through the DOM API with PHP.   
> The DOM extension uses UTF-8 encoding. Use `mb_convert_encoding()`, `UConverter::transcode()`, or `iconv()` to handle other encodings.

 

                                                      

 FIXME: <section xml:id="dom.class.domnamelist"> <title><classname>DOMNameList</classname></title> <para> </para> <section xml:id="dom.class.domnamelist.methods">  <itemizedlist> <listitem> <para><xref linkend='function.dom-domnamelist-getname' /> - </para> </listitem> <listitem> <para><xref linkend='function.dom-domnamelist-getnamespaceuri' /> - </para> </listitem> </itemizedlist> </section> <section xml:id="dom.class.domnamelist.properties"> <title>Properties</title> <table> <title/> <tgroup cols="4"> <thead> <row> <entry>Name</entry> <entry>Type</entry> <entry>Read-only</entry> <entry>Description</entry> </row> </thead> <tbody> <row> <entry>length</entry> <entry>int</entry> <entry>yes</entry> <entry> The number of pairs (name and namespaceURI) in the list. The range of valid child node indices is 0 to <literal>length - 1</literal> inclusive. </entry> </row> </tbody> </tgroup> </table> </section> </section>

 DOM
