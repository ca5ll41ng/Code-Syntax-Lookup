---
id: "en-php-function-function-wincache-refresh-if-changed"
language: "php"
lang: "en"
category: "function"
name: "wincache_refresh_if_changed"
title: "Refreshes the cache entries for the cached files"
signature: "bool wincache_refresh_if_changed(array $files = NULL)"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-refresh-if-changed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Refreshes the cache entries for the cached files

## Description

```php
bool wincache_refresh_if_changed(array $files = NULL)
```

Refreshes the cache entries for the files, whose names were passed in the input argument. If no argument is specified then refreshes all the entries in the cache.

## Parameters

- **`$files`** — An array of file names for files that need to be refreshed. An absolute or relative file paths can be used.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

WinCache performs regular checks on the cached files to ensure that if any file has changed then the corresponding entry in the cache is updated. By default this check is performed every 30 seconds. If, for example, a PHP script updates another PHP script where the application's configuration settings are stored, then it may happen that after the configuration settings have been saved to a file, the application is still using old settings for some time until the cache is refreshed. In those cases it may be preferrable to refresh the cache right after the file has been changed. The following example shows how this can be done.

**A `wincache_refresh_if_changed()` example**

```php


<?php 
$filename = 'C:\inetpub\wwwroot\config.php';
$handle = fopen($filename, 'w+');
if ($handle === FALSE) die('Failed to open file '.$filename.' for writing');
fwrite($handle, '<?php $setting=something; ?>');
fclose($handle);
wincache_refresh_if_changed(array($filename));
?>

    
```

## See Also

`wincache_fcache_fileinfo()` `wincache_fcache_meminfo()` `wincache_ocache_fileinfo()` `wincache_ocache_meminfo()` `wincache_rplist_fileinfo()` `wincache_rplist_meminfo()` `wincache_ucache_meminfo()` `wincache_ucache_info()`
