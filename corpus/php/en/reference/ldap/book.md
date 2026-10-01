---
id: "en-php-guide-book-ldap"
language: "php"
lang: "en"
category: "guide"
name: "book.ldap"
title: "Lightweight Directory Access Protocol"
module: "ldap"
source_url: "https://www.php.net/manual/en/book.ldap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Lightweight Directory Access Protocol

LDAP

 {{{ preface 

 Introduction  LDAP is the Lightweight Directory Access Protocol, and is a protocol used to access "Directory Servers". The Directory is a special kind of database that holds information in a tree structure.    The concept is similar to your hard disk directory structure, except that in this context, the root directory is "The world" and the first level subdirectories are "countries". Lower levels of the directory structure contain entries for companies, organisations or places, while yet lower still we find directory entries for people, and perhaps equipment or documents.    To refer to a file in a subdirectory on your hard disk, you might use something like:    /usr/local/myapp/docs   The forwards slash marks each division in the reference, and the sequence is read from left to right.    The equivalent to the fully qualified file reference in LDAP is the "distinguished name", referred to simply as "dn". An example dn might be:    cn=John Smith,ou=Accounts,o=My Company,c=US   The comma marks each division in the reference, and the sequence is read from right to left. You would read this dn as:    country = US organization = My Company organizationalUnit = Accounts commonName = John Smith   In the same way as there are no hard rules about how you organise the directory structure of a hard disk, a directory server manager can set up any structure that is meaningful for the purpose. However, there are some conventions that are used. The message is that you can not write code to access a directory server unless you know something about its structure, any more than you can use a database without some knowledge of what is available.    Lots of information about LDAP can be found at   
- [Mozilla]()
- [OpenLDAP Project]()
- Internet Engineering Taskforce RFCs [4510](4510) through [4519](4519).

  The Netscape SDK contains a helpful [Programmer's Guide]() in HTML format.   

 }}}
