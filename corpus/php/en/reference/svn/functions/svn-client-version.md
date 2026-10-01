---
id: "en-php-function-function-svn-client-version"
language: "php"
lang: "en"
category: "function"
name: "svn_client_version"
title: "Returns the version of the SVN client libraries"
signature: "string svn_client_version()"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-client-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the version of the SVN client libraries

## Description

```php
string svn_client_version()
```

Returns the version of the SVN client libraries

## Parameters

This function has no parameters.

## Return Values

String version number, usually in form of x.y.z.

## Examples

**Basic example**

```php


<?php
echo svn_client_version();
?>

   
```

The above example will output something similar to:

```text


1.3.1

   
```

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.
