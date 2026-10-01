---
id: "en-php-guide-book-uopz"
language: "php"
lang: "en"
category: "guide"
name: "book.uopz"
title: "User Operations for Zend"
module: "uopz"
source_url: "https://www.php.net/manual/en/book.uopz.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# User Operations for Zend

uopz

 Introduction  The uopz - User Operations for Zend - extension exposes Zend Engine functionality normally used at compilation and execution time in order to allow modification of the internal structures that represent PHP code, and for user code to interact with the VM.    uopz supports the following activities:    Overloading some opcodes including ZEND_EXIT and ZEND_NEW Backup and restore functions and methods Renaming functions and methods Copying of functions and methods Deletion of functions and methods Redefinition of global and class constants Deletion of global and class constants Runtime composition and modification of classes  
> All of the activities supported are compatible with opcache

 
> PECL uopz 6.1.1 is not compatible with Xdebug >= 2.9.4. Later uopz versions are not compatible with Xdebug < 2.9.4.
