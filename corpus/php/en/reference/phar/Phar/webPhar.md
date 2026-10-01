---
id: "en-php-function-phar-webphar"
language: "php"
lang: "en"
category: "function"
name: "Phar::webPhar"
title: "Routes a request from a web browser to an internal file within the phar archive"
signature: "final public static void Phar::webPhar(string|null $alias = null, string|null $index = null, string|null $fileNotFoundScript = null, array $mimeTypes = [], callable|null $rewrite = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.webphar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Routes a request from a web browser to an internal file within the phar archive

## Description

```php
final public static void Phar::webPhar(string|null $alias = null, string|null $index = null, string|null $fileNotFoundScript = null, array $mimeTypes = [], callable|null $rewrite = null)
```

`Phar::webPhar()` serves as `Phar::mapPhar()` for web-based phars. This method parses `$_SERVER['REQUEST_URI']` and routes a request from a web browser to an internal file within the phar archive. It simulates a web server, routing requests to the correct file, echoing the correct headers and parsing PHP files as needed. Combined with `Phar::mungServer()` and `Phar::interceptFileFuncs()`, any web application can be used unmodified from a phar archive.

`Phar::webPhar()` should only be called from the stub of a phar archive (see here for more information on what a stub is).

## Parameters

- **`$alias`** — The alias that can be used in `phar://` URLs to refer to this archive, rather than its full path.
- **`$index`** — The location within the phar of the directory index.
- **`$fileNotFoundScript`** — The location of the script to run when a file is not found. This script should output the proper HTTP 404 headers.
- **`$mimeTypes`** — An array mapping additional file extensions to MIME type. If the default mapping is sufficient, pass an empty array. By default, these extensions are mapped to these MIME types: ```php <?php $mimes = array( 'phps' => Phar::PHPS, // pass to highlight_file() 'c' => 'text/plain', 'cc' => 'text/plain', 'cpp' => 'text/plain', 'c++' => 'text/plain', 'dtd' => 'text/plain', 'h' => 'text/plain', 'log' => 'text/plain', 'rng' => 'text/plain', 'txt' => 'text/plain', 'xsd' => 'text/plain', 'php' => Phar::PHP, // parse as PHP 'inc' => Phar::PHP, // parse as PHP 'avi' => 'video/avi', 'bmp' => 'image/bmp', 'css' => 'text/css', 'gif' => 'image/gif', 'htm' => 'text/html', 'html' => 'text/html', 'htmls' => 'text/html', 'ico' => 'image/x-ico', 'jpe' => 'image/jpeg', 'jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg', 'js' => 'application/x-javascript', 'midi' => 'audio/midi', 'mid' => 'audio/midi', 'mod' => 'audio/mod', 'mov' => 'movie/quicktime', 'mp3' => 'audio/mp3', 'mpg' => 'video/mpeg', 'mpeg' => 'video/mpeg', 'pdf' => 'application/pdf', 'png' => 'image/png', 'swf' => 'application/shockwave-flash', 'tif' => 'image/tiff', 'tiff' => 'image/tiff', 'wav' => 'audio/wav', 'xbm' => 'image/xbm', 'xml' => 'text/xml', ); ?> ```
- **`$rewrite`** — The rewrites function is passed a string as its only parameter and must return a `string` or `false`. — If you are using fast-cgi or cgi then the parameter passed to the function is the value of the `$_SERVER['PATH_INFO']` variable. Otherwise, the parameter passed to the function is the value of the `$_SERVER['REQUEST_URI']` variable. — If a string is returned it is used as the internal file path. If `false` is returned then webPhar() will send a HTTP 403 Denied Code.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `PharException` when unable to open the internal file to output, or if called from a non-stub. If an invalid array value is passed into `$mimeTypes` or an invalid callback is passed into `$rewrite`, then `UnexpectedValueException` is thrown.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$fileNotFoundScript` and `$rewrite` are nullable now. |

## Examples

**A `Phar::webPhar()` example**

With the example below, the created phar will display `Hello World` if one browses to `/myphar.phar/index.php` or to `/myphar.phar`, and will display the source of `index.phps` if one browses to `/myphar.phar/index.phps`.

```php


<?php
// creating the phar archive:
try {
    $phar = new Phar('myphar.phar');
    $phar['index.php'] = '<?php echo "Hello World"; ?>';
    $phar['index.phps'] = '<?php echo "Hello World"; ?>';
    $phar->setStub('<?php
Phar::webPhar();
__HALT_COMPILER(); ?>');
} catch (Exception $e) {
    // handle error here
}
?>

    
```

## See Also

`Phar::mungServer()` `Phar::interceptFileFuncs()`
