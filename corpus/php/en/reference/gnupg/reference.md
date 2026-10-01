---
id: "en-php-guide-ref-gnupg"
language: "php"
lang: "en"
category: "guide"
name: "ref.gnupg"
title: "GnuPG "
module: "gnupg"
source_url: "https://www.php.net/manual/en/ref.gnupg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# GnuPG 

Notes  This extension makes use of the keyring of the current user. This keyring is normally located in ~/.gnupg/. To specify a custom location, store the path to the keyring in the environment variable GNUPGHOME. See putenv for more information how to do this.    Some functions require the specification of a key. This specification can be anything that refers to a unique key (userid, key-id, fingerprint, ...). This documentation uses the fingerprint in all examples.   
> As alternative to the explicitly documented functions using `resource`s, you can also use an object-oriented style using `gnupg` objects.
